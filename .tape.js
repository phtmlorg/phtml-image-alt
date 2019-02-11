module.exports = {
	'basic': {
		message: 'supports basic usage'
	},
	'basic:alts': {
		message: 'supports { alts } usage',
		options: {
			alts: {
				'/path/to/image-4.jpg': 'test image with generated alt'
			}
		}
	}
};
