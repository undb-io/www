import { env } from '$env/dynamic/public';
import { slugFromPath } from '$lib/slugFromPath';
import type { ITemplate } from '../../lib/types/template';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	// 获取模板数据
	const res = await fetch(`${env.PUBLIC_UNDB_URL}/api/templates`);
	const { templates } = (await res.json()) as { templates: ITemplate[] };

	// 获取博客数据
	const modules = import.meta.glob(`/src/blogs/*.{md,svx,svelte.md}`);
	const postPromises = Object.entries(modules).map(([path, resolver]) =>
		resolver().then(
			(post) =>
				({
					slug: slugFromPath(path),
					...(post as unknown as App.MdsvexFile).metadata
				}) as App.BlogPost
		)
	);
	const blogs = await Promise.all(postPromises);
	const publishedPosts = blogs.filter((post) => post.published);

	// 生成sitemap XML
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://undb.io</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://undb.io/templates</loc>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>
      ${templates
				.map(
					(template) => `
      <url>
        <loc>https://undb.io/templates/${template.id}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
      </url>`
				)
				.join('')}
      ${publishedPosts
				.map(
					(post) => `
      <url>
        <loc>https://undb.io/blog/${post.slug}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
      </url>`
				)
				.join('')}
    </urlset>`.trim();

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
