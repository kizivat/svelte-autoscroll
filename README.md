# Svelte Autoscroll Action

Svelte action to automatically scroll to the end of an element.

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

The action accepts an optional argument object to modify the default scroll behavior (`smooth`):

```html
<div use:autoscroll={{ behavior: 'auto' }}>...</div>
```
