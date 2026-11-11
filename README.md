# Hackerloop website

Plain HTML, CSS and JavaScript deployed to Cloudflare Workers Static Assets.
Images in `img/` and the background video in `video/` are served directly from
the same host as the site. The showreel remains a YouTube embed; Google Fonts
and the existing analytics script remain external services.

## Develop and deploy

Use Node.js 22 or newer.

```sh
npm ci
npm run dev
```

```sh
npx wrangler login
npm run deploy:check
npm run deploy
```

The build copies only public files into `dist/`. Cloudflare configuration is
in `wrangler.jsonc`, including the target account and `hackerloop.com/*` Worker
route. All requests on that hostname are served by the static asset deployment.
The existing proxied DNS record is retained because Cloudflare rejected replacing
its externally managed record with a Worker custom domain. Keep that record proxied
so the Worker route remains active. The deployment also has a preview at
https://hackerloop-site.valentin-4a3.workers.dev.

`CNAME` and `.nojekyll` are legacy GitHub Pages files and are not deployed to
Cloudflare. Future updates require running `npm run deploy`; automatic Git
deployments are not configured.

See [Cloudflare's static assets documentation](https://developers.cloudflare.com/workers/static-assets/).
