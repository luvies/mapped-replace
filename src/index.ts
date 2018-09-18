import escapeRegex from 'escape-string-regexp';

export default function mappedReplace(str: string, rpl: Record<string, string>): string {
    const keys = Object.keys(rpl);

    // if no keys were given, string doesn't need any replacement
    if (!keys.length) {
        return str;
    }

    const search = new RegExp(keys.map(r => escapeRegex(r)).join('|'), 'g');
    return str.replace(search, (match) => rpl[match]);
}
