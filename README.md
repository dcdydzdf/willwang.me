# willwang.me

Personal website for Will Wang, built with [Astro](https://astro.build/) and [Decap CMS](https://decapcms.org/) for deployment on Cloudflare Pages.

## Development

Node.js 22 or later is required.

```bash
npm install
npm run dev
```

Production verification:

```bash
npm run build
npm run preview
```

## Content

Articles are Markdown files in:

- `src/content/articles/industry`
- `src/content/articles/literature`
- `src/content/articles/reflections`

The CMS interface is served at `/admin/`. Its GitHub backend targets `dcdydzdf/willwang.me`. For GitHub login in production, deploy a Decap-compatible OAuth provider and add its `base_url` and `auth_endpoint` values to `public/admin/config.yml`; Cloudflare Pages does not provide a built-in GitHub OAuth endpoint.

## Deployment

Configure Cloudflare Pages with:

```text
Build command: npm run build
Output directory: dist
```

This project produces static output and does not require a Cloudflare adapter or `wrangler.toml`.
