/**
 * Defines is passed array not empty nor null (undefined).
 *
 * @param {Array} items
 */
export function notEmptyArray(items) {
  return items !== null
      && items !== undefined
      && items.length > 0;
}

/**
 * Traverse through passed array reducing it to comma separated string of items.
 *
 * @param {Array} items
 */
export function commaSeparate(items) {
  return (items || []).reduce((prev, curr) => `${prev}, ${curr}`);
}

/**
 * Stub function to prevent eslint ebat' mne mozgi with 'default export'.
 */
export function stub() {}
