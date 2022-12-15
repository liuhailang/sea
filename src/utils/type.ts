export function isObject(param) {
  return !isNull(param) && typeof param === "object";
}

export function isPlainObject(param) {
  return isObject(param) && !isArray(param);
}

export function isNull(param) {
  return param === null;
}

export function isUndefined(param) {
  return param === void 0;
}

export function isNullable(param) {
  return isNull(param) || isUndefined(param);
}

export function isArray(param) {
  return Array.isArray(param);
}

export function isFunction(param) {
  return typeof param === "function";
}

export function isDate(param) {
  return param instanceof Date;
}
