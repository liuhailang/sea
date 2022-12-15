import { isDate, isFunction, isObject } from "./type";

export default function deepCopy(param) {
  if (isFunction(param)) {
    const fnStrReg = /\((.*)\).*{(.*)}/s;
    const [_, paramStr, fnBodyStr] = param.toString().match(fnStrReg);

    return Function(paramStr, fnBodyStr);
  }

  if (!isObject(param)) {
    return param;
  }

  if (isDate(param)) {
    return new Date(param);
  }

  const newObj = new param.constructor();

  Reflect.ownKeys(param).forEach((key) => {
    const descriptor = Reflect.getOwnPropertyDescriptor(param, key);
    Reflect.defineProperty(newObj, key, {
      ...descriptor,
      value: deepCopy(param[key]),
    });
  });

  return newObj;
}
