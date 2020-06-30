import curry from "ramda/src/curry";
import propEq from "ramda/src/propEq";
import when from "ramda/src/when";
import map from "ramda/src/map";
import mergeRight from "ramda/src/mergeRight";

export function updateValueByKeyInArray(key, keyValue, newKey, newValue, data) {

}

/**
 *
 * Update object from an array or objects by key
 *
 * @param key
 * @param keyValue
 * @param newObject
 * @param data
 * @returns array
 */
export function updateByKeyInArray(key, keyValue, newObject, data) {
    const alter = curry((kee, keyVal, newObj, items) =>
        map(when(propEq(kee, keyVal), newObj), items)
    );
    return alter(key, keyValue, newObject, data);
}