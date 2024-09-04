import { slugFromPath } from '$lib/slugFromPath';
import type { PageServerLoad } from './$types';

const MAX_POSTS = 10;

export const load: PageServerLoad = async () => {
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
	const publishedPosts = blogs.filter((post) => post.published).slice(0, MAX_POSTS);

	publishedPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

	return { blogs: publishedPosts };
};
