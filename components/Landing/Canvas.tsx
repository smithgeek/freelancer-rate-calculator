import { FC, useEffect, useRef, useState } from 'react';
import { CanvasContext } from './hooks/useCanvas';

import useResponsiveSize from './hooks/useResponsiveSize';
import Wave from './Wave';

const Canvas: FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const { width } = useResponsiveSize();
	const [context, setContext] = useState<
		CanvasRenderingContext2D | undefined
	>();

	useEffect(() => {
		const ctx = canvasRef?.current?.getContext('2d');
		if (ctx) setContext(ctx);
	}, []);

	return (
		<>
			<div>
				<CanvasContext.Provider value={{ context }}>
					<canvas id="canvas" ref={canvasRef} width={width} height={220}></canvas>
					<Wave />
					<div style={{ height: 4, backgroundColor: 'rgb(36,99,235, 0.1)' }}></div>
				</CanvasContext.Provider>
			</div>
		</>
	);
};

export default Canvas;
