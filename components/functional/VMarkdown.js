import MarkdownIt from 'markdown-it'
import katex from 'markdown-it-katex'
import Prism from '~/utils/prism'
import 'katex/dist/katex.min.css'

const md = new MarkdownIt()
md.use(katex, { throwOnError: false, errorColor: ' #cc0000' })
md.options.highlight = (code, lang) => {
  const prismLanguage = Prism.languages[lang]
  const className = `language-${lang}`
  const rendered = Prism.highlight(code, prismLanguage)
  return `<pre class="${className}"><code class="${className}">${rendered}</code></pre>`
}

export default {
  name: 'VMarkdown',
  functional: true,
  props: {
    source: {
      type: String,
      required: true
    }
  },
  render(h, ctx) {
    return h('div', {
      class: [ctx.data.class],
      domProps: {
        innerHTML: md.render(ctx.props.source)
      }
    })
  }
}
