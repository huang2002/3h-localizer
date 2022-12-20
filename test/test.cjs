// @ts-check
const { test } = require('3h-test');
const { ref } = require('@vue/reactivity');
const HL = require('..');

test(null, {

    translationsToDicts(ctx) {
        const translations = {
            A: {
                0: 'A0',
                1: 'A1',
            },
            B: {
                0: 'B0',
                1: 'B1',
            },
        };
        const dicts = HL.translationsToDicts(translations);
        ctx.assertDeepEqual(dicts, {
            0: {
                A: 'A0',
                B: 'B0',
            },
            1: {
                A: 'A1',
                B: 'B1',
            },
        });
    },

    localizer_defaultLanguage(ctx) {
        const dicts = {
            A: {
                0: 'A0',
            },
            B: {
                0: 'B0',
            },
        };
        const localizer = new HL.Localizer({
            /**
             * @type {'A' | 'B'}
             */
            defaultLanguage: 'A',
            dicts,
        });
        ctx.assertStrictEqual(localizer.defaultLanguage, 'A');
        ctx.assertStrictEqual(localizer.language.value, 'A');
        ctx.assertDeepEqual(localizer.dict.value, { 0: 'A0' });
        localizer.language.value = 'B';
        ctx.assertStrictEqual(localizer.defaultLanguage, 'A');
        ctx.assertStrictEqual(localizer.language.value, 'B');
        ctx.assertDeepEqual(localizer.dict.value, { 0: 'B0' });
    },

    localizer_language(ctx) {
        /**
         * @type {import('@vue/reactivity').Ref<'A' | 'B'>}
         */
        const language = ref('B');
        const dicts = {
            A: {
                0: 'A0',
            },
            B: {
                0: 'B0',
            },
        };
        const localizer = new HL.Localizer({
            language,
            dicts,
        });
        ctx.assertStrictEqual(localizer.defaultLanguage, 'B');
        ctx.assertStrictEqual(localizer.language.value, 'B');
        ctx.assertDeepEqual(localizer.dict.value, { 0: 'B0' });
        localizer.language.value = 'A';
        ctx.assertStrictEqual(localizer.defaultLanguage, 'B');
        ctx.assertStrictEqual(localizer.language.value, 'A');
        ctx.assertDeepEqual(localizer.dict.value, { 0: 'A0' });
    },

});
