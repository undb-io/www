import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ cookies }) => {
	const cookie = cookies.get('undb_auth_session');

	return {
		loggedIn: !!cookie
	};
};
