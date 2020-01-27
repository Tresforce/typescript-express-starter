export const DOES_NOT_EXIST = ['', null, undefined];
// TODO update to use validate.js https://validatejs.org/

// TODO update to work for nested objects
/**
 * Takes an object and an optional keyArray
 * If no keyArray is passed it checks to see if all the keys on the object exist
 * If keyArray is passed it checks if all of the keys exist in the object
 *
 * @export
 * @param {*} object
 * @param {string[]} [keyArray] keyArray of keys to search in object
 * @returns {string[]} returns an empty keyArray if exists else returns the keys that do not exists
 */
export function exists(object: any, keyArray?: string[]): string[] {
  if (typeof keyArray === 'undefined') {
    return Object.keys(object).filter(key =>
      DOES_NOT_EXIST.includes(object[key])
    );
  }
  return keyArray.filter(key => DOES_NOT_EXIST.includes(object[key]));
}
