import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PAGE_SEO, SITE } from "../data.js";

/**
 * Sets document.title + meta description per route. Googlebot renders JS so it
 * picks these up; non-JS crawlers (Facebook/LinkedIn/Slack) only see the static
 * tags in index.html, so keep solid defaults there too. For full per-page social
 * previews the site would need prerendering/SSR — out of scope for GitHub Pages.
 */
export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = PAGE_SEO[pathname] || PAGE_SEO["/"];
    document.title = meta.title;

    setMeta("name", "description", meta.description);
    setMeta("property", "og:title", meta.title);
    setMeta("property", "og:description", meta.description);
    setMeta("property", "og:url", SITE.url.replace(/\/$/, "") + pathname);
    setMeta("name", "twitter:title", meta.title);
    setMeta("name", "twitter:description", meta.description);

    setCanonical(SITE.url.replace(/\/$/, "") + pathname);
  }, [pathname]);

  return null;
}

function setMeta(attr, key, value) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}
