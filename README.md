# Svelte Autoscroll Action

![npm (scoped)](https://img.shields.io/npm/v/@kizivat/svelte-autoscroll)

Svelte action to automatically scroll to the end of an element.

See demo at https://kizivat.eu/svelte-autoscroll/.

Simply used with the `use` directive.

```html
<div use:autoscroll>...</div>
```

The above `div` will automatically scroll to the end (bottom and right) when either

1. It's children list or DOM subtree change or
2. Any of the children change their size

## Installation

```bash
npm i @kizivat/svelte-autoscroll
```

## Usage

Make sure the `autoscroll` element has overflow set to `auto` or `scroll` in at least one of the `x` or `y` directions.

```html
<script>
	import autoscroll from '@kizivat/svelte-autoscroll';
</script>

<div use:autoscroll>...</div>

<style>
	div {
		overflow: auto;
	}
</style>
```

### Arguments

The action accepts an optional argument object. You can use it to

1. modify the scroll behavior (`'smooth'` or `'auto'`, default: `'smooth'`)
2. enable `pauseOnUserScroll` feature (default: `false`)

```html
<!-- Modify default scroll behavior only -->
<div use:autoscroll={{ behavior: 'auto' }}>...</div>
<!-- Pause on user scroll -->
<div use:autoscroll={{ pauseOnUserScroll: true }}>...</div>
<!-- Both -->
<div use:autoscroll={{ pauseOnUserScroll: true, behavior: 'auto' }}>...</div>
```
