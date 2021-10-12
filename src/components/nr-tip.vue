<script>
export default {
  name: 'nr-tip',
  functional: true,
  props: {
    iconClass: {
      type: String,
      default: 'el-icon-info'
    },
    content: {
      type: String,
      default: ''
    }
  },
  render (h, context) {
    const { iconClass, content } = context.props
    const vnodes = []
    vnodes.push(
      <el-tooltip class="item"
        effect="dark"
        content={content}
        placement="top-start">
        <i class={iconClass}
          style="color:#BABCBF;width:4px"></i>
      </el-tooltip>
    )
    return vnodes
  }
}
</script>
