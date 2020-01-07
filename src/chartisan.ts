import { ServerData, ExtraData, DatasetData } from './data'

/**
 * Represents the main chartisan class.
 *
 * @export
 * @class Chartisan
 */
export class Chartisan {
    /**
     * Stores the server data of the chart.
     *
     * @protected
     * @type {ServerData}
     * @memberof Chartisan
     */
    protected serverData: ServerData

    /**
     * Creates an instance of Chartisan.
     *
     * @param {ServerData} serverData
     * @memberof Chartisan
     */
    constructor(serverData: ServerData) {
        this.serverData = serverData
    }

    /**
     * Creates a new chart using the builder.
     *
     * @static
     * @returns {Chartisan}
     * @memberof Chartisan
     */
    static build(): Chartisan {
        return new Chartisan({
            chart: {
                labels: [],
                extra: {}
            },
            datasets: []
        })
    }

    /**
     * Sets the chart labels.
     *
     * @param {string[]} labels
     * @returns {Chartisan}
     * @memberof Chartisan
     */
    labels(labels: string[]): Chartisan {
        this.serverData.chart.labels = labels
        return this
    }

    /**
     * Adds extra information to the chart.
     *
     * @param {ExtraData} extra
     * @returns {Chartisan}
     * @memberof Chartisan
     */
    extra(extra: ExtraData): Chartisan {
        this.serverData.chart.extra = extra
        return this
    }

    /**
     * AdvancedDataset appends a new dataset to the chart or modifies an existing one.
     * If the ID has already been used, the dataset will be replaced with this one.
     *
     * @param {string} name
     * @param {number[]} values
     * @param {number} id
     * @param {ExtraData} extra
     * @returns {Chartisan}
     * @memberof Chartisan
     */
    advancedDataset(
        name: string,
        values: number[],
        id: number,
        extra: ExtraData
    ): Chartisan {
        const [dataset, isNew] = this.getOrCreateDataset(
            name,
            values,
            id,
            extra
        )
        if (isNew) {
            // Append the new dataset.
            this.serverData.datasets.push(dataset)
            return this
        }
        dataset.name = name
        dataset.values = values
        dataset.extra = extra
        return this
    }

    /**
     * Dataset adds a new simple dataset to the chart. If more advanced control is
     * needed, consider using `AdvancedDataset` instead.
     *
     * @param {string} name
     * @param {number[]} values
     * @returns {Chartisan}
     * @memberof Chartisan
     */
    dataset(name: string, values: number[]): Chartisan {
        const [dataset] = this.getOrCreateDataset(
            name,
            values,
            this.getNewID(),
            {}
        )
        this.serverData.datasets.push(dataset)
        return this
    }

    /**
     * Returns the string representation JSON encoded.
     *
     * @returns {string}
     * @memberof Chartisan
     */
    toJSON(): string {
        return JSON.stringify(this.serverData)
    }

    /**
     * Transforms it to an object.
     *
     * @returns {ServerData}
     * @memberof Chartisan
     */
    toObject(): ServerData {
        return this.serverData
    }

    /**
     * getNewID returns an ID that is not used by any of the datasets.
     * Keep in mind, this will panic when n > 2^32 if int is 32 bits.
     * If you need more than 2^32 datasets, you're crazy.
     *
     * @protected
     * @returns {number}
     * @memberof Chartisan
     */
    protected getNewID(): number {
        for (let n = 0; ; n++) {
            if (!this.idUsed(n)) {
                return n
            }
        }
    }

    /**
     * Returns true if the given ID is already used.
     *
     * @protected
     * @param {number} id
     * @returns {boolean}
     * @memberof Chartisan
     */
    protected idUsed(id: number): boolean {
        for (const dataset of this.serverData.datasets) {
            if (dataset.id == id) {
                return true
            }
        }
        return false
    }

    /**
     * Returns a dataset from the chart or creates a new one given the data.
     *
     * @protected
     * @param {string} name
     * @param {number[]} values
     * @param {number} id
     * @param {ExtraData} extra
     * @returns {[DatasetData, boolean]}
     * @memberof Chartisan
     */
    protected getOrCreateDataset(
        name: string,
        values: number[],
        id: number,
        extra: ExtraData
    ): [DatasetData, boolean] {
        for (const dataset of this.serverData.datasets) {
            if (dataset.id == id) {
                return [dataset, false]
            }
        }
        return [{ id, name, values, extra }, true]
    }
}
