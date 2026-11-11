# SEO and copy update — 9 November 2026

## Positioning

Lead with interactive production and creative technology for brands, agencies
and publishers. Paris is the location signal. Twitch remains a specific capability,
alongside custom software, connected objects and interactive installations.
The primary conversion is a project enquiry to hi@hackerloop.com.

## Findings and changes

| Priority | Finding | Change |
| --- | --- | --- |
| High | The homepage had no H1 and the hero offered only a showreel. | Added a visible category-led H1, an explanatory subheading and a project enquiry link. |
| High | Copy relied on vague phrases such as “purest forms of engagement” and “productizing.” | Explained the services and participation mechanisms using existing capabilities. |
| Medium | The homepage had no canonical URL. | Added https://hackerloop.com/ as canonical, including on the workers.dev copy. |
| Medium | No sitemap or robots.txt was in the deployment. | Added both and included them in the build. A sitemap is a discovery aid, not a ranking guarantee. |
| Medium | Search metadata did not describe the broader offer. | Updated the title and description; added social sharing metadata using an existing local image. |
| Medium | The contact address was plain text. | Added direct email links and project-focused CTA copy. |
| Low | Logo dimensions were unspecified and the showreel trigger was a div. | Added image dimensions, proportional sizing, lazy loading for partner logos, and a native button. |

## Copy decisions

Selected headline: **Interactive production. Creative technology. Built for participation.**
The first two phrases explain the offer; the final phrase connects it to an audience benefit.
Supporting copy names software, connected objects and storytelling rather than making
unverified claims about performance, client outcomes or delivery guarantees.

Alternative headlines for a future copy test:

- **Creative technology that puts your audience in control.** More benefit-led; narrower emphasis on audience control.
- **From creative idea to interactive experience.** Simpler and broader; needs the service categories in the subheading.

Selected primary CTA: **Tell us about your project.** This describes the immediate action.
Alternative: **Discuss your interactive experience.** More specific, but less natural for an early-stage brief.

SEO title: Interactive Production & Creative Technology | Hackerloop

Description: Hackerloop is a Paris creative technology studio. We build interactive live experiences, custom software and connected installations for brands and agencies.

## Next priorities

1. Add two or three real project case studies: the brief, Hackerloop's role, the
   interaction, technology and verified outcomes. Confirm client naming permissions
   and facts before writing them. Existing logos alone offer little project context.
2. Connect the hackerloop.com property to Search Console. The connected account only
   exposed playability.gg, so search queries, indexing and traffic were not assessed.
   Submit the sitemap there and record a baseline before judging the changes.
3. Use query data and case-study material to decide whether dedicated pages for
   interactive production, creative technology and installations are justified.
   These are positioning hypotheses, not keywords validated by search-volume data.
4. Measure mobile Core Web Vitals with field data. Responsive checks were performed,
   but no performance improvement or ranking gain has been measured.
5. Review the legacy Universal Analytics integration separately when setting up
   current enquiry and organic-traffic measurement.

## Guidance

- [Google SEO starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Titles](https://developers.google.com/search/docs/appearance/title-link)
- [Canonical URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)

Google may rewrite search titles and snippets. Recrawling and indexing are separate
from deploying the changes.

## Homepage structured data

Added a static JSON-LD graph in `index.html` linking `WebSite` to its publisher,
`Organization`, through stable canonical-domain IDs. Organization details use the
visible brand name, description, email, logo and Paris/France location. No street
address, postcode, social profiles or ratings were inferred.

Validation on 9 November 2026:

- Schema.org Validator: zero errors and zero warnings for the linked graph.
- Local checks: valid JSON, matching canonical URLs, resolved publisher reference,
  visible content consistency and existing local logo; Wrangler dry run passed.
- Live homepage and logo returned HTTP 200; live JSON-LD matched the source.
- [Google Rich Results Test](https://search.google.com/test/rich-results/result?id=Rjj5CaIBCq_-UcyM3OBEXw):
  one valid Organization, with two optional warnings for missing `streetAddress`
  and `postalCode`. Those fields remain omitted because they are not established
  on the homepage. WebSite site-name markup was checked with Schema.org Validator.

References: [Organization](https://developers.google.com/search/docs/appearance/structured-data/organization)
and [site names](https://developers.google.com/search/docs/appearance/site-names).
