const _ = require("underscore");
export const resultObject = (
  data: object | null,
  status: boolean,
  statusCode: number,
  message: string
) => {
  return {
    status: status,
    statusCode: statusCode,
    message: message,
    data: data,
  };
};

export const checkNotEmpty = (o: string | null | undefined, f?: boolean) => {
  if (exists(o) && o != "") {
    return true;
  }
  return false;
};

export const exists = (o: any) => {
  if (
    typeof o !== "undefined" &&
    o !== "undefined" &&
    o !== undefined &&
    o !== null &&
    o !== "null"
  ) {
    return true;
  }
  return false;
};

export const notExists = (o: any) => {
  return !exists(o);
};

export const getProps = (o: any) => {
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
