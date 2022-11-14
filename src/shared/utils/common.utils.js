import { twMerge } from 'tailwind-merge'

/**
 * A utility for resolving tailwind css className conflict targeting same css property. The
 * property provided last is applied
 * 
 * @param {String} css Group of css class names 
 * @returns {String} Merged css class names
 * 
 * Example:
 * Given: <span className="text-red text-blue">Message</span>
 * Output: <span className="text-blue">Message</span>
 * 
 */
export const ClassNames = (css) => {
  const mergedCss = twMerge(css);
  return mergedCss.replace("undefined", "").trimEnd().trimStart();
}

/**
 * A utility for finding unqiue values against specific property in an array of objects
 * @param {Array<Object>} arr The given dataset
 * @param {String} key The property where want to find unique values
 * @returns {Array} An array of unique values
 */
export const uniqueKeyValues = (arr, key) => {
  return [... new Set(arr.map((obj) => { return obj[key] }))];
}

export const countUniqueOccurences = (array, key) => {
  const formattedArray = array.map((obj) => {
    return obj[key]
  });
  let result = [];

  for (let value of formattedArray) {
    result = {
      ...result,
      [value]: (result[value] || 0) + 1
    }
  }
  return result;
}
