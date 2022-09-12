"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProps = exports.notExists = exports.exists = exports.checkNotEmpty = exports.resultObject = void 0;
const _ = require("underscore");
const resultObject = (data, status, statusCode, message) => {
    return {
        status: status,
        statusCode: statusCode,
        message: message,
        data: data,
    };
};
exports.resultObject = resultObject;
const checkNotEmpty = (o, f) => {
    if ((0, exports.exists)(o) && o != "") {
        return true;
    }
    return false;
};
exports.checkNotEmpty = checkNotEmpty;
const exists = (o) => {
    if (typeof o !== "undefined" &&
        o !== "undefined" &&
        o !== undefined &&
        o !== null &&
        o !== "null") {
        return true;
    }
    return false;
};
exports.exists = exists;
const notExists = (o) => {
    return !(0, exports.exists)(o);
};
exports.notExists = notExists;
const getProps = (o) => {
    let obj = {};
    if (!_.isEmpty(o.params)) {
        obj = Object.assign(obj, o.params);
    }
    if (!_.isEmpty(o.body)) {
        obj = Object.assign(obj, o.body);
    }
    if (!_.isEmpty(o.query)) {
        obj = Object.assign(obj, o.query);
    }
    if (!_.isEmpty(o.resource)) {
        obj = Object.assign(obj, o.resource);
    }
    return obj;
};
exports.getProps = getProps;
