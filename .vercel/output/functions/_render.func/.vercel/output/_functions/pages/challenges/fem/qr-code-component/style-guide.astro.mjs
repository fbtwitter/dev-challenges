/* empty css                                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../../../chunks/astro/server_DDyeZ1Xj.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../../../renderers.mjs';

const html = "<h1 id=\"front-end-style-guide\">Front-end Style Guide</h1>\n<h2 id=\"layout\">Layout</h2>\n<p>The designs were created to the following widths:</p>\n<ul>\n<li>Mobile: 375px</li>\n<li>Desktop: 1440px</li>\n</ul>\n<h2 id=\"colors\">Colors</h2>\n<ul>\n<li>White: hsl(0, 0%, 100%)</li>\n<li>Light gray: hsl(212, 45%, 89%)</li>\n<li>Grayish blue: hsl(220, 15%, 55%)</li>\n<li>Dark blue: hsl(218, 44%, 22%)</li>\n</ul>\n<h2 id=\"typography\">Typography</h2>\n<h3 id=\"body-copy\">Body Copy</h3>\n<ul>\n<li>Font size (paragraph): 15px</li>\n</ul>\n<h3 id=\"font\">Font</h3>\n<ul>\n<li>Family: <a href=\"https://fonts.google.com/specimen/Outfit\">Outfit</a></li>\n<li>Weights: 400, 700</li>\n</ul>";

				const frontmatter = {};
				const file = "E:/dev/office/GingerInc/site/dev-challenges/src/pages/challenges/fem/qr-code-component/style-guide.md";
				const url = "/challenges/fem/qr-code-component/style-guide";
				function rawContent() {
					return "# Front-end Style Guide\n\n## Layout\n\nThe designs were created to the following widths:\n\n- Mobile: 375px\n- Desktop: 1440px\n\n## Colors\n\n- White: hsl(0, 0%, 100%)\n- Light gray: hsl(212, 45%, 89%)\n- Grayish blue: hsl(220, 15%, 55%)\n- Dark blue: hsl(218, 44%, 22%)\n\n## Typography\n\n### Body Copy\n\n- Font size (paragraph): 15px\n\n### Font\n\n- Family: [Outfit](https://fonts.google.com/specimen/Outfit)\n- Weights: 400, 700\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"front-end-style-guide","text":"Front-end Style Guide"},{"depth":2,"slug":"layout","text":"Layout"},{"depth":2,"slug":"colors","text":"Colors"},{"depth":2,"slug":"typography","text":"Typography"},{"depth":3,"slug":"body-copy","text":"Body Copy"},{"depth":3,"slug":"font","text":"Font"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
