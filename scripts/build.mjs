import { cp, mkdir, rm } from 'node:fs/promises';

// Only public site files belong in the deployment.
const output = new URL('../dist/', import.meta.url);
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const path of ['index.html', 'robots.txt', 'sitemap.xml', 'favicon.ico', 'css', 'fonts', 'img', 'js', 'video']) {
  await cp(new URL(`../${path}`, import.meta.url), new URL(path, output), { recursive: true });
}
