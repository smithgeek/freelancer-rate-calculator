
import { Fragment } from 'react';
import config, { ProductItem } from './config';
import Divider from './Divider';

const Product = () => {
	const { product } = config;
	const items: [ProductItem[]] = [[]]
	for (let i = 0; i < product.items.length; i += 2) {
		const subItems = [product.items[i]];
		if (i + 1 < product.items.length) {
			subItems.push(product.items[i + 1]);
		}
		items.push(subItems);
	}

	return (
		<section className={`bg-background py-8`} id="product">
			<div className={`container max-w-5xl mx-auto m-8`}>
				<h1
					className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
				>
					{product.title.split(' ').map((word, index) => (
						<span
							key={index}
							className={index % 2 ? 'text-primary' : 'text-border'}
						>
							{word}{' '}
						</span>
					))}
				</h1>
				<Divider />
				{items.map((itemGroup, i) => {
					const [firstItem, secondItem] = itemGroup;
					return <Fragment key={i}>
						<div className={`flex flex-wrap`}>
							<div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
								<h3
									className={`text-3xl text-primary font-bold leading-none mb-3`}
								>
									{firstItem?.title}
								</h3>
								<p>{firstItem?.description}</p>
							</div>
							<div className={`w-full sm:w-1/2 p-6`}>
								<img
									className="h-6/6"
									src={firstItem?.img}
									alt={firstItem?.title}
								/>
							</div>
						</div>
						{secondItem && <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
							<div className={`w-full sm:w-1/2 p-6`}>
								<img
									className="h-6/6"
									src={secondItem?.img}
									alt={secondItem?.title}
								/>
							</div>
							<div className={`w-full sm:w-1/2 p-6 mt-20`}>
								<div className={`align-middle`}>
									<h3
										className={`text-3xl text-primary font-bold leading-none mb-3`}
									>
										{secondItem?.title}
									</h3>
									<p>{secondItem?.description}</p>
								</div>
							</div>
						</div>}
					</Fragment>
				})}
			</div>
		</section>
	);
};

export default Product;
