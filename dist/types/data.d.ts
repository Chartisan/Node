/**
 * Determines how the extra data looks like.
 */
export interface ExtraData {
    [key: string]: string;
}
/**
 * Represents the chart data.
 */
export interface ChartData {
    /**
     * Stores the chart labels.
     */
    labels: string[];
    /**
     * Stores the chart extra options.
     */
    extra: ExtraData | null;
}
/**
 * Determine the dataset data.
 */
export interface DatasetData {
    /**
     * Stores the dataset name.
     */
    name: string;
    /**
     * Stores the dataset values.
     */
    values: number[];
    /**
     * Stores the dataset extra options.
     */
    extra: ExtraData | null;
}
/**
 * Represents the server data.
 */
export interface ServerData {
    /**
     * Stores the chart data.
     */
    chart: ChartData;
    /**
     * Stores the datasets.
     */
    datasets: DatasetData[];
}
