import { env } from '$env/dynamic/public';
import type { ITemplate } from '../../lib/types/template';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const res = await fetch(`${env.PUBLIC_UNDB_URL}/api/templates`);
	const templates = (await res.json()) as { templates: ITemplate[] };

	return {
		templates
	};
};
