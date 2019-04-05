# eox-ui
A curated collection of vue.js UI components, EOX style.

## Installation

### Via npm install
```
npm install @eox/ui
```
In your `main.js`, or a similar entry point, import the library using:
```
import '@eox/ui';
```

### Via script tag
```
<script src="//unpkg.com/@eox/ui/dist/eox.umd.min.js"></script>
```

## Usage

### Basic Page rendering
```
<eox-page-layout>
...
</eox-page-layout>
```

### Button
```
<eox-button :color="'eox'" :icon="'dashboard'" :link="'eox.at'">Test</eox-button>
```
- The prop 'color' with the value 'eox' applies EOX style blue background. Default background is grey.
- The prop 'icon' adds an (optional) material-design icon. Any name from the [official documentation](https://material.io/tools/icons/) can be used here.
- The prop 'link' renders an anchor tag instead of a button, pointing to the passed value.

### Markdown
```
<eox-markdown>
# Hello World
</eox-markdown>
```

### EOX Logo
```
<eox-logo height="30px"/>
```

## Development
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Compiles and minifies components for npm
```
npm run build:npm
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
