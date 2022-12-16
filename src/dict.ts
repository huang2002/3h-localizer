/**
 * Type of dictionaries.
 */
export type Dict = Record<string | symbol, string>;
/** dts2md break */
/**
 * Type of dictionary names.
 */
export type DictName = string | symbol;
/** dts2md break */
/**
 * Type of translations.
 */
export type Translations<
    DictType extends Dict = Dict,
    DictNameType extends DictName = DictName,
> = Record<keyof DictType, Record<DictNameType, string>>;
/** dts2md break */
/**
 * Create dicts from translations.
 *
 * @example
 * ```js
 * const dicts = translationsToDicts({
 *     HELLO: {
 *         en: 'hello',
 *         zh: '你好',
 *     },
 *     WORLD: {
 *         en: 'world',
 *         zh: '世界',
 *     },
 * });
 * ```
 */
export const translationsToDicts = <
    DictType extends Dict = Dict,
    DictNameType extends DictName = DictName,
>(
    translations: Translations<DictType, DictNameType>,
): Record<DictNameType, DictType> => {
    const dicts = Object.create(null) as Record<DictNameType, DictType>;
    for (const key in translations) {
        const translation = translations[key];
        for (const dictName in translation) {
            if (!(dictName in dicts)) {
                dicts[dictName as unknown as DictNameType] =
                    Object.create(null);
            }
            (dicts[dictName as unknown as DictNameType][key] as string) =
                translation[dictName];
        }
    }
    return dicts;
};
