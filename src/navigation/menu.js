import { ACCOUNT, EDITING, ROOT, VIDEOS } from "../const/urls";

export const menu = [
	{
		name: 'home',
		visibleAtLogin: true,
		url: ROOT
	},
	{
		name: 'editing',
		visibleAtLogin: false,
		url: EDITING
		
	},
	{
		name: 'videos',
		visibleAtLogin: false,
		url: VIDEOS
		
	},
	{
		name: 'account',
		visibleAtLogin: false,
		url: ACCOUNT
	}
];