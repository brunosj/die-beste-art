export function observeIntersection(
	targetSelector: string,
	callback: () => void,
	threshold = 0.5,
	margin = '0px'
) {
	const options = {
		rootMargin: margin,
		threshold: threshold
	};

	const handleIntersection: IntersectionObserverCallback = (
		entries: IntersectionObserverEntry[]
	) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				callback();
			}
		});
	};

	const observer = new IntersectionObserver(handleIntersection, options);
	const target = document.querySelector(targetSelector);

	if (target) {
		observer.observe(target);
	}

	return () => {
		if (target) {
			observer.unobserve(target);
		}
	};
}
