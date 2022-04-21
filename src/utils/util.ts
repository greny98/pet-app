/**
 * @method isEmpty
 * @param {String | Number | Object} value
 * @returns {Boolean} true & false
 * @description this value is Empty Check
 */
export const isEmpty = (value: string | number | object): boolean => {
  if (value === null) {
    return true;
  } else if (typeof value !== 'number' && value === '') {
    return true;
  } else if (typeof value === 'undefined' || value === undefined) {
    return true;
  } else if (value !== null && typeof value === 'object' && !Object.keys(value).length) {
    return true;
  } else {
    return false;
  }
};

export const calcDate = date => {
  const monthDiff = Date.now() - date;
  const ageDT = new Date(monthDiff);
  const year = ageDT.getUTCFullYear();
  return Math.abs(year - 1970) === 0 ? 1 : Math.abs(year - 1970);
};
