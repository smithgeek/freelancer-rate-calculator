
export interface TextNavItem {
	text: string;
	icon?: JSX.Element;
	onClick?: () => void;
	type: "text";
	active?: boolean;
}

export interface LinkNavItem {
	text: string;
	icon?: JSX.Element;
	href: string;
	type: "link";
	active?: boolean;
	target?: string;
}

export interface InputNavItem {
	text: string;
	icon?: JSX.Element;
	type: "input",
	value: string,
	onChange: (value: string) => void;
}

export type NavigationItem = TextNavItem | InputNavItem | LinkNavItem | JSX.Element;

export function isInputNavItem(item: NavigationItem): item is InputNavItem {
	return item.type === 'input';
}

export function isTextNavItem(item: NavigationItem): item is TextNavItem {
	return item.type === 'text';
}

export function isLinkNavItem(item: NavigationItem): item is LinkNavItem {
	return item.type === 'link';
}
