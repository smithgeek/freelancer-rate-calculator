import Link from "next/link";
import { ReactNode, useState } from "react";
import { isInputNavItem, isLinkNavItem, isTextNavItem, NavigationItem } from "./NavigationItem";

interface SidebarProps {
	header: {
		title: string;
		icon?: ReactNode
	}
	items: NavigationItem[];
	className?: string;
}

const width = 300;
export function Sidebar(props: SidebarProps) {
	const [open, setOpen] = useState(true);
	return <div style={{ width: width, flex: `0 0 ${width}px` }} className={props.className}>
		<div className={`fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 ${open ? "" : "hidden"}`}>
			<div className="text-gray-100 text-xl">
				<div className="p-2.5 mt-1 flex items-center">
					{props.header.icon}
					<h1 className="font-bold text-gray-200 text-[15px] ml-3">{props.header.title}</h1>
				</div>
				<div className="my-2 bg-gray-600 h-[1px]" />
			</div>
			{props.items.map(item => {
				if (isInputNavItem(item)) {
					return <div key={item.text} className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
						{item.icon}
						<input type="text" value={item.value} onChange={e => item.onChange(e.target.value)} placeholder={item.text} className="text-[15px] ml-4 w-full bg-transparent focus:outline-none" />
					</div>
				}
				if (isTextNavItem(item)) {
					const activeStyle = item.active ? "bg-blue-600" : "";
					return <div key={item.text} className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white ${activeStyle}`} onClick={item.onClick}>
						{item.icon}
						<span className="text-[15px] ml-4 text-gray-200 font-bold">{item.text}</span>
					</div>
				}
				if (isLinkNavItem(item)) {
					const activeStyle = item.active ? "bg-blue-600" : "";
					const content = <div className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white ${activeStyle}`}>
						{item.icon}
						<span className="text-[15px] ml-4 text-gray-200 font-bold">{item.text}</span>
					</div>;
					if (item.target) {
						return <a key={item.text} href={item.href} target={item.target} rel="noopener norefferer">
							{content}
						</a>
					}
					return <Link key={item.text} href={item.href} target={item.target}>
						<a>{content}</a>
					</Link>
				}
				return item;
			})}
		</div>
	</div>;
}