# 3h-dict

> A utility lib for language switch in vue.

## Example Usage

The following code creates a demo page
containing a title and a select input,
where the content of the title
is controlled by selected language.

```vue
<template>
    <h1>{{ dict.HELLO_WORLD }}</h1>
    <select v-model="language">
        <option value="zh">中文</option>
        <option value="en">English</option>
    </select>
</template>

<script setup lang="ts">
import { LanguageSwitch } from '3h-dict';

interface MyDict {
    HELLO_WORLD: string;
}

type MyLanguages = 'zh' | 'en';

const languageSwitch = new LanguageSwitch<MyDict, MyLanguages>({
    defaultLanguage: 'en',
    dicts: {
        zh: {
            HELLO_WORLD: '你好，世界！',
        },
        en: {
            HELLO_WORLD: 'Hello, world!',
        },
    },
});

const { language, dict } = languageSwitch;
</script>
```

## Links

- [API Reference](https://github.com/huang2002/3h-dict/wiki)
- [Changelog](./CHANGELOG.md)
- [License (MIT)](./LICENSE)
