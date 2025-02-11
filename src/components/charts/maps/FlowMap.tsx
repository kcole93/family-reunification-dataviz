import React from "react";
import {
	ComposableMap,
	Geographies,
	Geography,
	Marker,
	useMapContext,
} from "react-simple-maps";
import geoData from "@/assets/map.json";

// Geo data type (adjust based on your actual JSON structure)
interface GeoDataFeature {
	type: string;
	properties: Record<string, number>;
	geometry: {
		type: string;
		coordinates: Array<number>;
	};
	rsmKey: string;
}

// Coordinates type (tuple of two numbers)
type Coordinates = [number, number];

// Flow interface with explicit types
interface Flow {
	country: string;
	count: number;
	coordinates: Coordinates;
}

// Curved Line Props with explicit types
interface CurvedLineProps {
	start: Coordinates;
	end: Coordinates;
	strokeWidth: number;
}

// CurvedLine Component with explicit typing
const CurvedLine: React.FC<CurvedLineProps> = ({ start, end, strokeWidth }) => {
	// Explicitly type the context and projection
	const { projection } = useMapContext() as {
		projection: (coords: Coordinates) => Coordinates | null;
	};

	const startProjection = projection(start);
	const endProjection = projection(end);

	if (!startProjection || !endProjection) {
		return null;
	}

	const [x1, y1] = startProjection;
	const [x2, y2] = endProjection;

	// Calculate the midpoint
	const midX = (x1 + x2) / 2;
	const midY = (y1 + y2) / 2;

	// Calculate the curve control point
	const curve = 0.45;
	const controlX = midX;
	const controlY = midY - Math.abs(x2 - x1) * curve;

	const path = `M ${x1} ${y1} Q ${controlX} ${controlY} ${x2} ${y2}`;

	return (
		<path
			className="opacity-50 hover:opacity-80 transition-all duration-500 [stroke-dasharray:6_6]"
			d={path}
			fill="none"
			stroke="#2563eb"
			strokeWidth={strokeWidth}
		/>
	);
};

// FlowMap Component with explicit typing
const FlowMap: React.FC = () => {
	// Explicitly type the flows array
	const flows: Array<Flow> = [
		{
			country: "Germany",
			count: 13,
			coordinates: [10.4515, 50.1657],
		},
		{
			country: "United Kingdom",
			count: 2,
			coordinates: [-3.4359, 55.3781],
		},
		{
			country: "Netherlands",
			count: 1,
			coordinates: [5.2913, 52.1326],
		},
		{
			country: "Norway",
			count: 1,
			coordinates: [8.4689, 60.472],
		},
		{
			country: "Sweden",
			count: 1,
			coordinates: [15.6435, 58.1282],
		},
	];

	// Explicitly type the origin coordinates
	const origin: Coordinates = [35.2433, 38.9637];

	return (
		<div className="flex-grow min-w-[400px] max-w-5xl">
			<ComposableMap
				projection="geoAzimuthalEqualArea"
				projectionConfig={{
					rotate: [-20.0, -52.0, 0],
					scale: 900,
				}}
			>
				<Geographies geography={geoData}>
					{({ geographies }: { geographies: Array<GeoDataFeature> }) =>
						geographies.map((geo) => (
							<Geography
								key={geo.rsmKey}
								className="hover:fill-gray-200 transition-colors duration-300"
								fill="#EAEAEC"
								geography={geo}
								stroke="#D6D6DA"
							/>
						))
					}
				</Geographies>

				{flows.map(({ coordinates, count, country }) => (
					<React.Fragment key={country}>
						<CurvedLine
							end={coordinates}
							start={origin}
							strokeWidth={Math.max(1, count * 0.5)}
						/>
						<Marker coordinates={coordinates}>
							<circle fill="#1e3a8a" r={4} />
							<text
								className="text-xs font-semibold text-blue-600"
								textAnchor="middle"
								y={-10}
							>
								{country} ({count})
							</text>
						</Marker>
					</React.Fragment>
				))}

				<Marker coordinates={origin}>
					<circle fill="#dc2626" r={5} />
					<text
						className="text-xs font-semibold text-gray-600"
						textAnchor="middle"
						y={15}
					>
						Türkiye
					</text>
				</Marker>
			</ComposableMap>
		</div>
	);
};

export default FlowMap;
