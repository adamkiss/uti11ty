const stripIndent = require('strip-indent')
const markdownIt = require('markdown-it')

const options = {
	markdownOptions: {
		html: true,
		typographer: true
	},
	markdownPlugins: [
		require('markdown-it-attrs')
	],
	markdownDisableCode: true
}

const si = text => stripIndent(text)
const md = (renderer, content) => renderer.render(si(content))
const mdi = (renderer, content) => renderer.renderInline(si(content))

module.exports = (ec, opts = {}) => {
	Object.assign(options, opts)

	const markdown = markdownIt(options.markdownOptions)
	markdownPlugins.forEach(plugin => markdown.use(plugin))
	if (options.markdownDisableCode) markdown.disable('code')

	ec.addFilter('md', value => md(markdown, value))
	ec.addFilter('mdi', value => mdi(markdown, value))
	ec.addPairedShortcode('md', content => md(markdown, content))

	ec.setLibrary('md', markdown)
}
