import phtml from 'phtml';

export default new phtml.Plugin('phtml-image-alt', opts => {
	const alts = Object(Object(opts).alts);
	const hasAlts = Boolean(Object.keys(alts).length);

	return {
		Element(node) {
			if (/img/i.test(node.name)) {
				const hasAlt = node.attrs.contains('alt');

				if (!hasAlt) {
					node.attrs.add('alt', null);

					if (hasAlts) {
						const src = node.attrs.get('src');

						if (src in alts) {
							node.attrs.add('alt', alts[src]);
						}
					}
				}
			}
		}
	};
});
