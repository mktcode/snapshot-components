import { defineComponent, openBlock, createElementBlock, toDisplayString } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    title: { default: "A proposal" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("h1", null, toDisplayString(__props.title), 1);
    };
  }
});
export { _sfc_main as Proposal };
