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
        var dataset = this.getDataset(name);
        if (dataset) {
            dataset.name = name;
            dataset.values = values;
            dataset.extra = extra;
        }
        else {
            this.serverData.datasets.push({ name: name, values: values, extra: extra });
        }
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
        return this.advancedDataset(name, values, null);
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
     * Gets the dataset with the given name.
     *
     * @protected
     * @param {string} name
     * @returns {ServerData}
     * @memberof Chartisan
     */
    Chartisan.prototype.getDataset = function (name) {
        for (var _i = 0, _a = this.serverData.datasets; _i < _a.length; _i++) {
            var dataset = _a[_i];
            if (dataset.name == name) {
                return dataset;
            }
        }
        return null;
    };
    return Chartisan;
}());
exports.Chartisan = Chartisan;
