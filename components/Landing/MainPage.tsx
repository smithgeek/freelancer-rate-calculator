
import { Calculator } from '../Calculator';
import Header from './Header';
import LazyShow from './LazyShow';
import MainHero from './MainHero';
import MainHeroImage from './MainHeroImage';

export const MainPage = () => {
	return (
		<div className={`bg-background grid`}>
			<div>
				<div className={`relative bg-neutral flex`}>
					<div className="max-w-7xl mx-auto">
						<div
							className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
						>
							<Header />
							<MainHero />
						</div>
					</div>
					<MainHeroImage />
				</div>
				<svg style={{}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#191d24" fillOpacity="1" d="M0,160L48,138.7C96,117,192,75,288,69.3C384,64,480,96,576,117.3C672,139,768,149,864,128C960,107,1056,53,1152,42.7C1248,32,1344,64,1392,80L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
			</div>
			<div style={{ marginTop: -100 }}>
				<LazyShow>
					<>
						<Calculator />
					</>
				</LazyShow>
			</div>

			{/* <AnimatedWaves /> */}
		</div>
	);
};
