import { ComputedRef, Ref, ref, computed } from "@vue/reactivity";

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
 * Type of options for {@link LanguageSwitch}.
 */
export interface LanguageSwitchOptions<
    DictType extends Dict = Dict,
    DictNameType extends DictName = DictName,
> {
    dicts: Record<DictNameType, DictType>;
    defaultLanguage: DictNameType;
}
/** dts2md break */
/**
 * Class of language switch managers.
 */
export class LanguageSwitch<
    DictType extends Dict = Dict,
    DictNameType extends DictName = DictName,
> {
    /** dts2md break */
    /**
     * Constructor of {@link LanguageSwitch}.
     */
    constructor(
        options: LanguageSwitchOptions<DictType, DictNameType>,
    ) {

        this.dicts = Object.assign(
            Object.create(null),
            options.dicts,
        );

        this.defaultLanguage = options.defaultLanguage;

        this.language = ref(options.defaultLanguage) as Ref<DictNameType>;

        this.dict = computed(() => {
            const { language, dicts } = this;
            if (language.value in dicts) {
                return dicts[language.value];
            } else {
                return dicts[this.defaultLanguage];
            }
        });

    }
    /** dts2md break */
    /**
     * The ref that stores current language.
     * (You can modify the value of this ref
     * to select the dictionary to use.)
     *
     * @example
     * ```vue
     * <select v-model="language">
     *     <!-- options here... -->
     * </select>
     * ```
     */
    readonly language: Ref<DictNameType>;
    /** dts2md break */
    /**
     * Current dictionary.
     * (You should define translated texts in `dicts`
     * and use `dict` to access them responsively.)
     *
     * @example
     * ```vue
     * <h1>{{ dict.TITLE }}</h1>
     * <p>{{ dict.DESCRIPTION }}</p>
     * ```
     */
    readonly dict: ComputedRef<DictType>;
    /** dts2md break */
    /**
     * Defined dictionaries.
     *
     * @example
     * ```js
     * languageSwitch.dicts = {
     *     'en-US': {
     *         HELLO: 'hello!',
     *     },
     *     'zh-CN': {
     *         HELLO: '你好！',
     *     },
     * };
     * ```
     */
    dicts: Record<DictNameType, DictType>;
    /** dts2md break */
    /**
     * Default language to use.
     */
    defaultLanguage: DictNameType;

}
