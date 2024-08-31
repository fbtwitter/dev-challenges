/* empty css                                              */
import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_DDyeZ1Xj.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_DXV9fpLR.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Modal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "meta": { title: "Modal Creations" }, "data-astro-cid-k2p6vnx6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="app" data-astro-cid-k2p6vnx6> <main data-astro-cid-k2p6vnx6> <div class="wrap" data-astro-cid-k2p6vnx6> <button class="button jsModalButton" data-astro-cid-k2p6vnx6>Click me!</button> <svg class="point-hand" viewBox="0 0 58 66" data-astro-cid-k2p6vnx6> <use xlink:href="/images/creations/modal/sprite.svg#point-hand" data-astro-cid-k2p6vnx6></use> </svg> </div> </main> <div class="modal-overlay jsModalOverlay" data-astro-cid-k2p6vnx6> <div class="modal" data-astro-cid-k2p6vnx6> <div class="modal__content" data-astro-cid-k2p6vnx6> <svg class="wave-hand" width="112" height="139" viewBox="0 0 112 139" data-astro-cid-k2p6vnx6> <use xlink:href="/images/creations/modal/sprite.svg#wave-hand" data-astro-cid-k2p6vnx6></use> </svg> <button class="modal__close-button jsModalClose" data-astro-cid-k2p6vnx6> <svg width="1em" height="1em" viewBox="0 0 18 18" data-astro-cid-k2p6vnx6> <use xlink:href="/images/creations/modal/sprite.svg#close" data-astro-cid-k2p6vnx6></use> </svg> </button> </div> </div> </div> </div> ` })}  `;
}, "E:/dev/office/GingerInc/site/dev-challenges/src/pages/creations/modal.astro", void 0);

const $$file = "E:/dev/office/GingerInc/site/dev-challenges/src/pages/creations/modal.astro";
const $$url = "/creations/modal";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Modal,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
