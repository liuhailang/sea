import { isPlainObject } from "./type";

export default function ensureDefaultWhenNullable(obj, defaultObj) {
  if (isPlainObject(defaultObj)) {
    if (isPlainObject(obj)) {
      const newObj = { ...obj };

      Object.entries(defaultObj).forEach(
        ([key, value]) => (newObj[key] = newObj[key] ?? value)
      );
      
      return newObj;
    }

    return { ...defaultObj };
  }

  return obj;
}
