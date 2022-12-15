export function autoscroll(
	node: HTMLElement,
	options: ScrollOptions = { behavior: 'smooth' }
) {
	const forbiddenOverflows = ['visible', 'hidden'];
	if (
		forbiddenOverflows.includes(getComputedStyle(node).overflowX) &&
		forbiddenOverflows.includes(getComputedStyle(node).overflowY)
	) {
		console.warn(
			'Autoscroll element will never scroll. Set at least one of `overflow-x` or `overflow-y` to either `auto` or `scroll`.'
		);
	}

	const scroll = () => {
		node.scrollTo({
			top: node.scrollHeight,
			left: node.scrollWidth,
			...options,
		});
	};

	// for when children change sizes
	const resizeObserver = new ResizeObserver(_ => {
		scroll();
	});

	// for when children
	const mutationObserver = new MutationObserver(_ => {
		scroll();
	});

	// observe size of all children
	for (const child of node.children) {
		resizeObserver.observe(child);
	}

	mutationObserver.observe(node, { childList: true, subtree: true });

	return {
		destroy() {
			if (mutationObserver) {
				mutationObserver.disconnect();
			}
			if (resizeObserver) {
				resizeObserver.disconnect();
			}
		},
	};
}
