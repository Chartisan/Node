/**
 * Determines how the extra data looks like.
 *
 * @export
 * @interface ExtraData
 */
export interface ExtraData {
    [key: string]: unknown;
}
/**
 * Represents the chart data.
 *
 * @export
 * @interface ChartData
 */
export interface ChartData {
    /**
     * Stores the chart labels.
     *
     * @type {string[]}
     * @memberof ChartData
     */
    labels: string[];
    /**
     * Stores the chart extra options.
     *
     * @type {ExtraData}
     * @memberof ChartData
     */
    extra: ExtraData | null;
}
/**
 * Determine the dataset data.
 *
 * @export
 * @interface DatasetData
 */
export interface DatasetData {
    /**
     * Stores the dataset name.
     *
     * @type {string}
     * @memberof DatasetData
     */
    name: string;
    /**
     * Stores the dataset values.
     *
     * @type {number[]}
     * @memberof DatasetData
     */
    values: number[];
    /**
     * Stores the dataset extra options.
     *
     * @type {ExtraData}
     * @memberof DatasetData
     */
    extra: ExtraData | null;
}
/**
 * Represents the server data.
 *
 * @export
 * @interface ServerData
 */
export interface ServerData {
    /**
     * Stores the chart data.
     *
     * @type {ChartData}
     * @memberof ServerData
     */
    chart: ChartData;
    /**
     * Stores the datasets.
     *
     * @type {DatasetData[]}
     * @memberof ServerData
     */
    datasets: DatasetData[];
}
