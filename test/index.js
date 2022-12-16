// @ts-check
/// <reference types=".." />

// @ts-ignore
const { defineComponent, createApp } = /** @type {import('vue')} */(Vue);

const dicts = HD.translationsToDicts({
    CHOOSE_LANGUAGE: {
        zh: '选择语言：',
        en: 'Choose language: ',
    },
    HELLO_WORLD: {
        zh: '你好，世界！',
        en: 'Hello, world!',
    },
});

const localizer = new HD.Localizer({
    /**
     * @type {'zh' | 'en'}
     */
    defaultLanguage: 'en',
    dicts,
});

const App = defineComponent({
    template: /* html */`
        <h1 id="text">
            {{ dict.HELLO_WORLD }}
        </h1>
        <form id="form">
            <label for="select">
                {{ dict.CHOOSE_LANGUAGE }}
            </label>
            <select id="select" v-model="language">
                <option value="zh">中文</option>
                <option value="en">English</option>
            </select>
        </form>
    `,
    setup() {
        return {
            dict: localizer.dict,
            language: localizer.language,
        };
    },
});

const app = createApp(App);
app.mount('#app');
