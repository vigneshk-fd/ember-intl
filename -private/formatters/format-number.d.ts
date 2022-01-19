/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
import Formatter, { BaseOptions } from './-base';
/**
 * @private
 * @hide
 */
export default class FormatNumber extends Formatter<Intl.NumberFormatOptions> {
    static readonly type = "number";
    createNativeFormatter: (locales: string | string[], options: Intl.NumberFormatOptions) => Intl.NumberFormat;
    get options(): readonly ("style" | "currency" | "localeMatcher" | "unit" | "currencySign" | "unitDisplay" | "notation" | "compactDisplay" | "signDisplay" | "currencyDisplay" | "useGrouping" | "minimumIntegerDigits" | "minimumSignificantDigits" | "maximumSignificantDigits" | "minimumFractionDigits" | "maximumFractionDigits")[];
    format(locale: string | string[], value: number, formatOptions?: Intl.NumberFormatOptions & BaseOptions): string;
}
