import md from '~/utils/markdown'

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
    return h(
      'div',
      Object.assign({}, ctx.data, {
        class: [ctx.data.class, 'markdown-body'],
        domProps: {
          innerHTML: md.render(ctx.props.source)
        }
      })
    )
  }
}
