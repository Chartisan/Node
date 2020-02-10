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
                extra: null
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
     * @param {ExtraData} extra
     * @returns {Chartisan}
     * @memberof Chartisan
     */
    advancedDataset(
        name: string,
        values: number[],
        extra: ExtraData | null
    ): Chartisan {
        const dataset = this.getDataset(name)
        if (dataset) {
            dataset.name = name
            dataset.values = values
            dataset.extra = extra
        } else {
            this.serverData.datasets.push({ name, values, extra })
        }
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
        return this.advancedDataset(name, values, null)
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
     * Gets the dataset with the given name.
     *
     * @protected
     * @param {string} name
     * @returns {ServerData}
     * @memberof Chartisan
     */
    protected getDataset(name: string): DatasetData | null {
        for (const dataset of this.serverData.datasets) {
            if (dataset.name == name) {
                return dataset
            }
        }
        return null
    }
}
