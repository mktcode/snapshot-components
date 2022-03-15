import { defineComponent, openBlock, createElementBlock, createElementVNode, toDisplayString } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    proposal: { default: () => ({
      title: "A proposal",
      excerpt: "This is a very long text for a proposal demo."
    }) },
    allowVoting: { type: Boolean, default: true },
    showResults: { type: Boolean, default: true }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createElementVNode("div", null, toDisplayString(__props.proposal.title), 1),
        createElementVNode("div", null, toDisplayString(__props.proposal.excerpt), 1)
      ]);
    };
  }
});
export { _sfc_main as Proposal };
