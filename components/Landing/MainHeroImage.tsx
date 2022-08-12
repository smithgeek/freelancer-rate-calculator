
import config from './config';

const MainHeroImage = () => {
	const { mainHero } = config;
	if (!mainHero.img) {
		return null;
	}
	return (
		<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
			{typeof mainHero.img === 'string' && <img
				className="h-56 w-full object-cover sm:h-72 md:h-80 lg:w-full lg:h-full"
				src={mainHero.img}
				alt="happy team image"
			/>}
			{typeof mainHero.img !== 'string' && mainHero.img}
		</div>
	);
};

export default MainHeroImage;
