import type { ReactElement } from "react";
import { ResponsiveBar } from "@nivo/bar";

const ProtectiveStatusChart = (): ReactElement => {
	const data = [
		{
			country: "Afghanistan",
			Unregistered: 16,
			"IP Applicant/TP Status Holder": 9,
		},
		{
			country: "Syria",
			Unregistered: 6,
			"IP Applicant/TP Status Holder": 7,
		},
		{
			country: "Iran",
			Unregistered: 3,
			"IP Applicant/TP Status Holder": 0,
		},
		{
			country: "DRC",
			Unregistered: 2,
			"IP Applicant/TP Status Holder": 1,
		},
		{
			country: "Iraq",
			Unregistered: 2,
			"IP Applicant/TP Status Holder": 0,
		},
		{
			country: "Cameroon",
			Unregistered: 1,
			"IP Applicant/TP Status Holder": 0,
		},
		{
			country: "Stateless",
			Unregistered: 1,
			"IP Applicant/TP Status Holder": 0,
		},
	];

	return (
		<div className="w-full h-full">
			<ResponsiveBar
				ariaLabel="Protective Status by Country"
				axisRight={null}
				axisTop={null}
				borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
				colors={{ scheme: "tableau10" }}
				data={data}
				enableGridY={false}
				indexBy="country"
				indexScale={{ type: "band", round: true }}
				keys={["Unregistered", "IP Applicant/TP Status Holder"]}
				labelSkipHeight={12}
				labelSkipWidth={12}
				labelTextColor="#FFF"
				margin={{ top: 50, right: 20, bottom: 60, left: 60 }}
				padding={0.3}
				role="application"
				valueScale={{ type: "linear" }}
				// legends={[
				// 	{
				// 		dataFrom: "keys",
				// 		anchor: "bottom-right",
				// 		direction: "column",
				// 		justify: false,
				// 		translateX: 120,
				// 		translateY: 0,
				// 		itemsSpacing: 2,
				// 		itemWidth: 100,
				// 		itemHeight: 20,
				// 		itemDirection: "left-to-right",
				// 		itemOpacity: 0.85,
				// 		symbolSize: 20,
				// 		title: "Protective Status",
				// 	},
				// ]}
				axisBottom={{
					tickSize: 5,
					tickPadding: 5,
					legend: "Country",
					legendPosition: "middle",
					legendOffset: 45,
					tickRotation: -45,
				}}
				axisLeft={{
					tickSize: 0,
					tickPadding: 5,
					tickRotation: 0,
					legend: "Count",
					legendPosition: "middle",
					legendOffset: -40,
				}}
			/>
		</div>
	);
};

export default ProtectiveStatusChart;
