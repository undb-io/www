import { env } from '$env/dynamic/public';
import type { ITemplate } from '$lib/types/template';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const templateId = event.params.templateId;

	const res = await fetch(`${env.PUBLIC_UNDB_URL}/api/templates/${templateId}`);
	const template = (await res.json()) as { template: ITemplate };

	return {
		template: template.template
	};
};
