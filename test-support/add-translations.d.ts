declare const _default: (localeNameOrTranslations: string | import("../addon/-private/utils/flatten").NestedStructure<string | number>, translations?: import("../addon/-private/utils/flatten").NestedStructure<string | number> | undefined) => void;
/**
 * Invokes the `addTranslations` method of the `intl` service. The first
 * parameter, the `localeName`, is optional and will default to the last
 * currently enabled locale. This means, that if you invoke this helper with
 * just translations, they will be added to the last locale and all other
 * locales will be tried before.
 *
 * @function addTranslations
 * @param {string} [localeName]
 * @param {object} translations
 */
export default _default;
