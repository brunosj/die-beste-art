export function processMarkdownLinks(markdownRef: Element) {
	const links = markdownRef.querySelectorAll('a[href^="http://"],a[href^="https://"]');
	links.forEach((link: Element) => {
		(link as HTMLAnchorElement).setAttribute('target', '_blank');
		(link as HTMLAnchorElement).setAttribute('rel', 'noopener noreferrer');
	});
}
