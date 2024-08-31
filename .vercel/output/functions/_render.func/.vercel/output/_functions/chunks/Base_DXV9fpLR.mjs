import { c as createComponent, r as renderTemplate, d as addAttribute, e as createAstro, b as renderComponent, a as renderHead, f as renderSlot } from './astro/server_DDyeZ1Xj.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const siteConfig = {
  // Meta property used as the default description meta property
  author: "Reza Fauzi Augusdi",
  description: "Description",
  lang: "id-ID",
  title: "Dev Challenge"
};

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "E:/dev/office/GingerInc/site/dev-challenges/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$1 = createAstro();
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { description, title } = Astro2.props;
  const titleSeparator = "|";
  const siteTitle = `${title} ${titleSeparator} ${siteConfig.title}`;
  return renderTemplate`<meta charset="UTF-8"><meta content="width=device-width, initial-scale=1.0, shrink-to-fit=no" name="viewport"><meta content="IE=edge" http-equiv="X-UA-Compatible"><title>${siteTitle}</title><!-- ViewTransitions -->${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}<meta${addAttribute(siteTitle, "content")} name="title"><meta${addAttribute(description, "content")} name="description"><meta${addAttribute(siteConfig.author, "content")} name="author"><meta${addAttribute(Astro2.generator, "content")} name="generator"><!-- Custom Fonts or CSS --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Roboto:wght@200..900&display=swap" rel="stylesheet">`;
}, "E:/dev/office/GingerInc/site/dev-challenges/src/components/BaseHead.astro", void 0);

const $$Astro = createAstro();
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const {
    meta: { description = siteConfig.description, title }
  } = Astro2.props;
  return renderTemplate`<html${addAttribute(siteConfig.lang, "lang")}> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "description": description, "title": title })}${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "E:/dev/office/GingerInc/site/dev-challenges/src/layouts/Base.astro", void 0);

export { $$Base as $ };
