import { openBlock, createElementBlock } from "vue";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("h1", null, "Proposal");
}
var Proposal = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Proposal };
