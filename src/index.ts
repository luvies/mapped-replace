import escapeRegex from 'escape-string-regexp';

/**
 * Replaces all occurrences the keys of an object with the values of them in the
 * given string.
 *
 * @param str The string to search.
 * @param rpl The object with the mapped replacements.
 * @returns The adjusted string.
 */
export default function mappedReplace(str: string, rpl: Record<string, string>): string {
  const keys = Object.keys(rpl);

  // if no keys were given, string doesn't need any replacement
  if (!keys.length) {
    return str;
  }

  const search = new RegExp(keys.map(r => escapeRegex(r)).join('|'), 'g');
  return str.replace(search, (match) => rpl[match]);
}
