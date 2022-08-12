import Link from 'next/link';
import config from './config';

const Menu = () => {
	const { navigation, company, callToAction } = config;
	const { name: companyName, logo } = company;

	return (
		<>

			<div className="relative pt-6 px-4 sm:px-6 lg:px-8">
				<nav
					className="relative flex items-center justify-between sm:h-10 lg:justify-start"
					aria-label="Global"
				>
					<div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
						<div className="flex items-center justify-between w-full md:w-auto">
							<a href="#">
								<span className="sr-only">{companyName}</span>
								<img alt="logo" className="h-8 w-auto sm:h-8" src={logo} />
							</a>
						</div>
					</div>
					<div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
						{navigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="font-medium text-gray-500 hover:text-gray-900"
							>
								{item.name}
							</Link>
						))}
						<Link
							href={callToAction.href}
						>
							<a
								href={callToAction.href}
								className={`font-medium text-info hover:text-secondary`}
							>
								{callToAction.text}
							</a>
						</Link>

					</div>
				</nav>
			</div>
		</>
	);
};

export default Menu;
