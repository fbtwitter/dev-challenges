/* empty css                                              */
import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_DDyeZ1Xj.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_DXV9fpLR.mjs';
/* empty css                                              */
export { renderers } from '../../renderers.mjs';

const $$OffCanvasMenu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "meta": { title: "Off Canvas Menu Creations" }, "data-astro-cid-76u7xqfm": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-76u7xqfm> <div class="offsite-container" data-astro-cid-76u7xqfm> <nav class="nav" data-astro-cid-76u7xqfm> <ul data-astro-cid-76u7xqfm> <li data-astro-cid-76u7xqfm><a href="#" data-astro-cid-76u7xqfm>Home</a></li> <li data-astro-cid-76u7xqfm><a href="#" data-astro-cid-76u7xqfm>Work</a></li> <li data-astro-cid-76u7xqfm><a href="#" data-astro-cid-76u7xqfm>About</a></li> <li data-astro-cid-76u7xqfm><a href="#" data-astro-cid-76u7xqfm>Contact</a></li> </ul> </nav> </div> <div class="site-container" data-astro-cid-76u7xqfm> <h1 data-astro-cid-76u7xqfm>Click the button to open the sidebar!</h1> <button data-astro-cid-76u7xqfm> <span data-astro-cid-76u7xqfm>Menu</span> </button> </div> </main> ` })}  `;
}, "E:/dev/office/GingerInc/site/dev-challenges/src/pages/creations/off-canvas-menu.astro", void 0);

const $$file = "E:/dev/office/GingerInc/site/dev-challenges/src/pages/creations/off-canvas-menu.astro";
const $$url = "/creations/off-canvas-menu";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$OffCanvasMenu,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
