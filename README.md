# DeMolay Puerto Rico Website — V2.5 SEO + Production

This release adds production SEO, social sharing, performance, accessibility-minded image loading, and basic security headers.

## Added in V2.5
- Unique SEO titles and descriptions for every public page
- Canonical URLs on `https://demolaypr.org`
- Open Graph + Twitter/X large-card metadata
- 1200×630 social share image
- Schema.org JSON-LD: Organization, WebSite, WebPage, BreadcrumbList; FAQPage on Parents; chapter Organization data
- `sitemap.xml` and `robots.txt`
- Favicon, Apple touch icon, PWA web manifest
- Custom 404 page with `noindex`
- Image dimensions, lazy loading below the fold, high-priority hero image
- Cloudflare `_headers` with baseline security/cache headers

## After deployment
1. Verify `https://demolaypr.org/sitemap.xml` and `https://demolaypr.org/robots.txt` load.
2. Add `demolaypr.org` as a Domain property in Google Search Console and submit `https://demolaypr.org/sitemap.xml`.
3. Optionally enable Cloudflare Web Analytics in the Cloudflare dashboard. No analytics token is hard-coded in this package.
4. Test a page in Google Rich Results / Schema Markup Validator and the Facebook Sharing Debugger.
5. Keep alternate domains as 301 redirects to `https://demolaypr.org`, preserving path and query.

## Important
- The site defaults to Spanish and offers English through the client-side language toggle. There are not separate English URLs, so no `hreflang` alternates are declared. If separate `/en/` URLs are created later, add reciprocal `hreflang` tags then.
- Do not add Event structured data until actual public event names, dates, locations, and URLs are available.
- The site does not publish a physical address because none was provided. Add verified location data only when the organization chooses to publish it.
