/* jshint node:true */

module.exports = function(/* environment */) {
  return {
    /**
     * Merges the fallback locale's translations into all other locales as a
     * build-time fallback strategy.
     *
     * This will **not** prevent missing translation warnings or errors from occurring.
     * It's meant as safety net when warnings are enabled.
     * When enabled along with `errorOnMissingTranslations` any fallback attempts will result in an error.
     *
     * @property fallbackLocale
     * @type {String?}
     * @default "null"
     */
    fallbackLocale: null,

    /**
     * Path where translations are stored.  This is relative to the project root.
     * For example, if your translations are an npm dependency, set this to:
     *`'./node_modules/path/to/translations'`
     *
     * @property inputPath
     * @type {String}
     * @default "'translations'"
     */
    inputPath: 'translations',

    /**
     * Prevents the translations from being bundled with the application code.
     * This enables asynchronously loading the translations for the active locale
     * by fetching them from the asset folder of the build.
     *
     * See: https://ember-intl.github.io/ember-intl/docs/guide/asynchronously-loading-translations
     *
     * @property publicOnly
     * @type {Boolean}
     * @default "false"
     */
    publicOnly: false,

    /**
     * Add the subdirectories of the translations as a namespace for all keys.
     *
     * @property wrapTranslationsWithNamespace
     * @type {Boolean}
     * @default "false"
     */
    wrapTranslationsWithNamespace: false,

    /**
		 * Paired with wrapTranslationsWithNamespace=true, considers top level folder name inside translations folder as module name
		 * and builds the dist folder with module name as the folder name containing all language files in each.
		 *
		 * Ex:
		 * With the below module wise folder structure :
		 *  - translations/module-admin/ar.json, en.json, fr.json, ...
		 *  - translations/module-dashboard/ar.json, en.json, fr.json, ...
		 *
		 * the build output structure will be as follows :
		 *  - dist/translations/module-admin --> ar.json, en.json, fr.json, ...
		 *  - dist/translation/module-dashboard --> ar.json, en.json, fr.json, ...
		 *
		 * instead of the default :
		 *  - dist/translations/ar.json, en.json, fr.json, ... containing all the keys inside all sub-folders combined
		 *
		 * @property modularizeTranslations
		 * @type {Boolean}
		 * @default "false"
		 * @requires wrapTranslationsWithNamespace to be set as true
		 */
		modularizeTranslations: false,

    /**
     * Cause a build error if ICU argument mismatches are detected between translations
     * with the same key across all locales.
     *
     * @property errorOnNamedArgumentMismatch
     * @type {Boolean}
     * @default "false"
     */
    errorOnNamedArgumentMismatch: false,

    /**
     * Cause a build error if missing translations are detected.
     *
     * See https://ember-intl.github.io/ember-intl/docs/guide/missing-translations#throwing-a-build-error-on-missing-required-translation
     *
     * @property errorOnMissingTranslations
     * @type {Boolean}
     * @default "false"
     */
    errorOnMissingTranslations: false,

    /**
     * removes empty translations from the build output.
     *
     * @property stripEmptyTranslations
     * @type {Boolean}
     * @default "false"
     */
    stripEmptyTranslations: false,

    /**
     * A function that is called whenever any translation key, from any locale, is missing at build time.
     *
     * See https://ember-intl.github.io/ember-intl/docs/guide/missing-translations#requiring-translations
     *
     * @property requiresTranslation
     * @type {Function}
     * @default "function(key,locale) { return true }"
     */
    requiresTranslation(/* key, locale */) {
      return true;
    }
  };
};
