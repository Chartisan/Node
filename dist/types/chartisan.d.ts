import { ServerData, ExtraData, DatasetData } from './data';
/**
 * Represents the main chartisan class.
 */
export declare class Chartisan {
    /**
     * Stores the server data of the chart.
     */
    protected serverData: ServerData;
    /**
     * Creates an instance of Chartisan.
     */
    constructor(serverData: ServerData);
    /**
     * Creates a new chart using the builder.
     */
    static build(): Chartisan;
    /**
     * Sets the chart labels.
     */
    labels(labels: string[]): Chartisan;
    /**
     * Adds extra information to the chart.
     */
    extra(extra: ExtraData): Chartisan;
    /**
     * AdvancedDataset appends a new dataset to the chart or modifies an existing one.
     * If the ID has already been used, the dataset will be replaced with this one.
     */
    advancedDataset(name: string, values: number[], extra: ExtraData | null): Chartisan;
    /**
     * Dataset adds a new simple dataset to the chart. If more advanced control is
     * needed, consider using `AdvancedDataset` instead.
     */
    dataset(name: string, values: number[]): Chartisan;
    /**
     * Returns the string representation JSON encoded.
     */
    toJSON(): string;
    /**
     * Transforms it to an object.
     */
    toObject(): ServerData;
    /**
     * Gets the dataset with the given name.
     */
    protected getDataset(name: string): DatasetData | null;
}
