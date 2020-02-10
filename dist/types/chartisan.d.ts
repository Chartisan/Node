import { ServerData, ExtraData, DatasetData } from './data';
/**
 * Represents the main chartisan class.
 *
 * @export
 * @class Chartisan
 */
export declare class Chartisan {
    /**
     * Stores the server data of the chart.
     *
     * @protected
     * @type {ServerData}
     * @memberof Chartisan
     */
    protected serverData: ServerData;
    /**
     * Creates an instance of Chartisan.
     *
     * @param {ServerData} serverData
     * @memberof Chartisan
     */
    constructor(serverData: ServerData);
    /**
     * Creates a new chart using the builder.
     *
     * @static
     * @returns {Chartisan}
     * @memberof Chartisan
     */
    static build(): Chartisan;
    /**
     * Sets the chart labels.
     *
     * @param {string[]} labels
     * @returns {Chartisan}
     * @memberof Chartisan
     */
    labels(labels: string[]): Chartisan;
    /**
     * Adds extra information to the chart.
     *
     * @param {ExtraData} extra
     * @returns {Chartisan}
     * @memberof Chartisan
     */
    extra(extra: ExtraData): Chartisan;
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
    advancedDataset(name: string, values: number[], extra: ExtraData | null): Chartisan;
    /**
     * Dataset adds a new simple dataset to the chart. If more advanced control is
     * needed, consider using `AdvancedDataset` instead.
     *
     * @param {string} name
     * @param {number[]} values
     * @returns {Chartisan}
     * @memberof Chartisan
     */
    dataset(name: string, values: number[]): Chartisan;
    /**
     * Returns the string representation JSON encoded.
     *
     * @returns {string}
     * @memberof Chartisan
     */
    toJSON(): string;
    /**
     * Transforms it to an object.
     *
     * @returns {ServerData}
     * @memberof Chartisan
     */
    toObject(): ServerData;
    /**
     * Gets the dataset with the given name.
     *
     * @protected
     * @param {string} name
     * @returns {ServerData}
     * @memberof Chartisan
     */
    protected getDataset(name: string): DatasetData | null;
}
