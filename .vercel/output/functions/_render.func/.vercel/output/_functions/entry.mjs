import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Dhta_2ER.mjs';
import { manifest } from './manifest_3WeEGLap.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/challenges/fem/qr-code-component/readme.astro.mjs');
const _page2 = () => import('./pages/challenges/fem/qr-code-component/readme-template.astro.mjs');
const _page3 = () => import('./pages/challenges/fem/qr-code-component/style-guide.astro.mjs');
const _page4 = () => import('./pages/challenges/fem/qr-code-component.astro.mjs');
const _page5 = () => import('./pages/challenges/wordle.astro.mjs');
const _page6 = () => import('./pages/creations/modal.astro.mjs');
const _page7 = () => import('./pages/creations/off-canvas-menu.astro.mjs');
const _page8 = () => import('./pages/creations.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/challenges/fem/qr-code-component/README.md", _page1],
    ["src/pages/challenges/fem/qr-code-component/README-template.md", _page2],
    ["src/pages/challenges/fem/qr-code-component/style-guide.md", _page3],
    ["src/pages/challenges/fem/qr-code-component/index.astro", _page4],
    ["src/pages/challenges/wordle.astro", _page5],
    ["src/pages/creations/modal.astro", _page6],
    ["src/pages/creations/off-canvas-menu.astro", _page7],
    ["src/pages/creations/index.astro", _page8],
    ["src/pages/index.astro", _page9]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "5a36e538-8f19-40dc-b22b-cea685340c21",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
