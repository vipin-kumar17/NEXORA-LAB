import { SITE } from "@/lib/constants";
export default function sitemap() { return ["", "/about", "/services", "/projects", "/contact", ].map((p) => ({ url: SITE.url + p, lastModified: new Date() })); }
