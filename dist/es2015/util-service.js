export let UtilService = class UtilService {
  isArrayEqual(a, b) {
    if (a === b) return true;
    if (a === null || b === null) return false;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
      let aExistsInb = false;
      for (let j = 0; j < b.length && !aExistsInb; j++) {
        if (a[i] === b[j]) {
          aExistsInb = true;
        }
      }
      if (!aExistsInb) {
        return false;
      }
    }
    return true;
  }

  isEqual(a, b) {
    if (Array.isArray(a) && Array.isArray(b)) {
      return this.isArrayEqual(a.sort(), b.sort());
    }
    return a === b;
  }

  isObjectArray(inputArrray) {
    return Array.isArray(inputArrray) && inputArrray.length > 0 && typeof inputArrray[0] === 'object';
  }

  isObject(arg) {
    return typeof arg === 'object';
  }

  isString(arg) {
    return typeof arg === 'string' || arg instanceof String;
  }

  isStringArray(inputArrray) {
    return Array.isArray(inputArrray) && inputArrray.length > 0 && typeof inputArrray[0] === 'string';
  }

  parseBool(value) {
    return (/^(true|1)$/i.test(value)
    );
  }

  parseBoolOrTrueOnEmpty(value) {
    return value === undefined || value === '' ? true : this.parseBool(value);
  }
};