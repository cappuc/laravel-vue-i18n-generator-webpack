# Laravel Vue-i18n Generator Webpack
This webpack plugin allow you to keep updated your vue-i18n localizations with laravel localizations.
This is a wrapper for webpack around [Martin Lindhe](https://github.com/martinlindhe)'s [laravel-vue-i18n-generator](https://github.com/martinlindhe/laravel-vue-i18n-generator).

## Requirements
- [laravel-vue-i18n-generator](https://github.com/martinlindhe/laravel-vue-i18n-generator)

## Usage
Install laravel-vue-i18n-generator (see his [repo](https://github.com/martinlindhe/laravel-vue-i18n-generator) for more info)
```bash
composer require martinlindhe/laravel-vue-i18n-generator
```
In config/app.php add to providers
```php
MarinLindhe\VueInternationalizationGenerator\GeneratorProvider::class,
```

Install laravel-vue-i18n-generator-webpack
```bash
//npm
npm install laravel-vue-i18n-generator-webpack --save

//yarn
yarn add laravel-vue-i18n-generator-webpack
```

Add to your webpack config
```javascript
const LaravelVueI18nGenerator = require('laravel-vue-i18n-generator-webpack')

...
plugins: [
   new LaravelVueI18nGenerator 
]
...
```

## Licence
Under [MIT](LICENSE)
