import type NavLink from '$lib/types/NavLink';

export const navLinks: NavLink[] = [
	{
		id: 1,
		label: 'Beranda',
		href: '/',
		inactiveIcon: 'house-door',
		activeIcon: 'house-door-fill'
	},
	{
		id: 2,
		label: 'Upakara',
		href: '/upakara',
		inactiveIcon: 'book',
		activeIcon: 'book-fill'
	},
	{
		id: 3,
		label: 'Kontribusi',
		href: '/contribution',
		inactiveIcon: 'pencil',
		activeIcon: 'pencil-fill'
	},
	{
		id: 4,
		label: 'Q&A',
		href: '/qna',
		inactiveIcon: 'question-circle',
		activeIcon: 'question-circle-fill'
	},
	{
		id: 5,
		label: 'Profil',
		href: '/profile',
		inactiveIcon: 'person',
		activeIcon: 'person-fill'
	}
];
