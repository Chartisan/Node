"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents the main chartisan class.
 *
 * @export
 * @class Chartisan
 */
var Chartisan = /** @class */ (function () {
    /**
     * Creates an instance of Chartisan.
     *
     * @param {ServerData} serverData
     * @memberof Chartisan
     */
    function Chartisan(serverData) {
        this.serverData = serverData;
    }
    /**
     * Creates a new chart using the builder.
     *
     * @static
     * @returns {Chartisan}
     * @memberof Chartisan
     */
    Chartisan.build = function () {
        return new Chartisan({
            chart: {
                labels: [],
                extra: null
            },
            datasets: []
        });
    };
    /**
     * Sets the chart labels.
     *
     * @param {string[]} labels
     * @returns {Chartisan}
     * @memberof Chartisan
     */
    Chartisan.prototype.labels = function (labels) {
        this.serverData.chart.labels = labels;
        return this;
    };
    /**
     * Adds extra information to the chart.
     *
     * @param {ExtraData} extra
     * @returns {Chartisan}
     * @memberof Chartisan
     */
    Chartisan.prototype.extra = function (extra) {
        this.serverData.chart.extra = extra;
        return this;
    };
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
    Chartisan.prototype.advancedDataset = function (name, values, extra) {
        var _a = this.getOrCreateDataset(name, values, extra), dataset = _a[0], isNew = _a[1];
        if (isNew) {
            // Append the new dataset.
            this.serverData.datasets.push(dataset);
            return this;
        }
        dataset.name = name;
        dataset.values = values;
        dataset.extra = extra;
        return this;
    };
    /**
     * Dataset adds a new simple dataset to the chart. If more advanced control is
     * needed, consider using `AdvancedDataset` instead.
     *
     * @param {string} name
     * @param {number[]} values
     * @returns {Chartisan}
     * @memberof Chartisan
     */
    Chartisan.prototype.dataset = function (name, values) {
        this.advancedDataset(name, values, null);
        return this;
    };
    /**
     * Returns the string representation JSON encoded.
     *
     * @returns {string}
     * @memberof Chartisan
     */
    Chartisan.prototype.toJSON = function () {
        return JSON.stringify(this.serverData);
    };
    /**
     * Transforms it to an object.
     *
     * @returns {ServerData}
     * @memberof Chartisan
     */
    Chartisan.prototype.toObject = function () {
        return this.serverData;
    };
    /**
     * Returns a dataset from the chart or creates a new one given the data.
     *
     * @protected
     * @param {string} name
     * @param {number[]} values
     * @param {ExtraData} extra
     * @returns {[DatasetData, boolean]}
     * @memberof Chartisan
     */
    Chartisan.prototype.getOrCreateDataset = function (name, values, extra) {
        for (var _i = 0, _a = this.serverData.datasets; _i < _a.length; _i++) {
            var dataset = _a[_i];
            if (dataset.name == name) {
                return [dataset, false];
            }
        }
        return [{ name: name, values: values, extra: extra }, true];
    };
    return Chartisan;
}());
exports.Chartisan = Chartisan;
