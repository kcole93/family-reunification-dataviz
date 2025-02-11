import type { ReactElement } from "react";
import { ResponsivePie } from "@nivo/pie";

const NationalityPieChart = (): ReactElement => {
	const data = [
		{ id: "Afghanistan", value: 25 },
		{ id: "Syria", value: 13 },
		{ id: "Iran", value: 3 },
		{ id: "DRC", value: 3 },
		{ id: "Iraq", value: 2 },
		{ id: "Cameroon", value: 1 },
		{ id: "Stateless", value: 1 },
	];

	return (
		<ResponsivePie
			activeOuterRadiusOffset={8}
			arcLabel="value"
			arcLabelsSkipAngle={10}
			arcLabelsTextColor="#FFF"
			arcLinkLabelsColor={{ from: "color" }}
			arcLinkLabelsSkipAngle={10}
			arcLinkLabelsTextColor="#333333"
			arcLinkLabelsThickness={2}
			borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
			borderWidth={1}
			colors={{ scheme: "tableau10" }}
			cornerRadius={3}
			data={data}
			innerRadius={0.5}
			margin={{ top: 40, right: 150, bottom: 80, left: 80 }}
			padAngle={0.7}
			role="application"
			tooltip={({ datum }) => (
				<div className="bg-white px-2 py-3 border border-slate-200 rounded-md">
					<strong>{datum.id}</strong>
					<br />
					Beneficiaries: {datum.value}
					<br />
					Percent Share: {datum.formattedValue}
				</div>
			)}
			// legends={[
			// 	{
			// 		anchor: "bottom",
			// 		direction: "row",
			// 		justify: false,
			// 		translateX: 0,
			// 		translateY: 56,
			// 		itemsSpacing: 0,
			// 		itemWidth: 100,
			// 		itemHeight: 18,
			// 		itemTextColor: "#999",
			// 		itemDirection: "left-to-right",
			// 		itemOpacity: 1,
			// 		symbolSize: 18,
			// 		symbolShape: "circle",
			// 	},
			// ]}
			valueFormat={(value) => {
				const total = data.reduce((sum, item) => sum + item.value, 0);
				const percentage = (value / total) * 100;
				return `${percentage.toFixed(1)}%`;
			}}
		/>
	);
};

export default NationalityPieChart;
