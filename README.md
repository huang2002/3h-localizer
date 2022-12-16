# 3h-localizer

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
import { Localizer, translationsToDicts, type Translations } from '3h-localizer';

interface MyDict {
    HELLO_WORLD: string;
}

type MyLanguages = 'zh' | 'en';

const translations: Translations<MyDict, MyLanguages> = {
    HELLO_WORLD: {
        zh: '你好，世界！',
        en: 'Hello, world!',
    },
};

const localizer = new Localizer<MyDict, MyLanguages>({
    defaultLanguage: 'en',
    dicts: translationsToDicts(translations),
});

const { language, dict } = localizer;
</script>
```

## Links

- [API Reference](https://github.com/huang2002/3h-localizer/wiki)
- [Changelog](./CHANGELOG.md)
- [License (MIT)](./LICENSE)
