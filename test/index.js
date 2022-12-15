// @ts-check
/// <reference types=".." />

// @ts-ignore
const { defineComponent, createApp } = /** @type {import('vue')} */(Vue);

const languageSwitch = new HD.LanguageSwitch({
    /**
     * @type {'zh' | 'en'}
     */
    defaultLanguage: 'en',
    dicts: {
        'zh': {
            CHOOSE_LANGUAGE: '选择语言：',
            HELLO_WORLD: '你好，世界！',
        },
        'en': {
            CHOOSE_LANGUAGE: 'Choose language: ',
            HELLO_WORLD: 'Hello, world!',
        },
    },
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
            dict: languageSwitch.dict,
            language: languageSwitch.language,
        };
    },
});

const app = createApp(App);
app.mount('#app');
