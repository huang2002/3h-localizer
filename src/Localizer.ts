import { ComputedRef, Ref, ref, computed } from "@vue/reactivity";
import { Dict, DictName } from "./dict";

/**
 * Type of options for {@link Localizer}.
 */
export interface LocalizerOptions<
    DictType extends Dict = Dict,
    DictNameType extends DictName = DictName,
> {
    dicts: Record<DictNameType, DictType>;
    defaultLanguage: DictNameType;
}
/** dts2md break */
/**
 * Class of localizers.
 */
export class Localizer<
    DictType extends Dict = Dict,
    DictNameType extends DictName = DictName,
> {
    /** dts2md break */
    /**
     * Constructor of {@link Localizer}.
     */
    constructor(
        options: LocalizerOptions<DictType, DictNameType>,
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
     * localizer.dicts = {
     *     'en-US': {
     *         HELLO: 'Hello!',
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
