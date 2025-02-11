import type { ReactElement } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { toTitleCase } from "@/components/utils/typographyUtils";

const AgeGenderChart = (): ReactElement => (
	<ResponsiveBar
		ariaLabel="Age Gender Bar Chart"
		axisRight={null}
		axisTop={null}
		colors={{ scheme: "category10" }}
		enableGridY={false}
		groupMode="grouped"
		indexBy="ageGroup"
		indexScale={{ type: "band", round: true }}
		keys={["female", "male", "nonbinary"]}
		labelSkipHeight={12}
		labelSkipWidth={12}
		labelTextColor={"#FFF"}
		legendLabel={(d) => toTitleCase(String(d.id))}
		margin={{ top: 10, right: 45, bottom: 40, left: 45 }}
		padding={0.3}
		role="application"
		tooltipLabel={(d) => toTitleCase(String(d.id))}
		valueScale={{ type: "linear" }}
		axisBottom={{
			tickSize: 5,
			tickPadding: 5,
			tickRotation: 0,
			legend: "Age Group",
			legendPosition: "middle",
			legendOffset: 32,
		}}
		axisLeft={{
			tickSize: 0,
			tickPadding: 5,
			tickRotation: 0,
			legendPosition: "middle",
			legendOffset: -40,
			legend: "Count",
		}}
		barAriaLabel={(d) =>
			`${toTitleCase(String(d.id))}: ${d.formattedValue} in age group: ${d.indexValue}`
		}
		data={[
			{ ageGroup: "0-9", female: 3, male: 0, nonbinary: 0 },
			{ ageGroup: "10-15", female: 8, male: 17, nonbinary: 1 },
			{ ageGroup: "16-17", female: 2, male: 17, nonbinary: 0 },
		]}
		// legends={[
		// 	{
		// 		dataFrom: "keys",
		// 		anchor: "right",
		// 		direction: "column",
		// 		justify: false,
		// 		translateX: 90,
		// 		translateY: 0,
		// 		itemsSpacing: 2,
		// 		itemWidth: 80,
		// 		itemHeight: 20,
		// 		itemDirection: "left-to-right",
		// 		itemOpacity: 0.85,
		// 		symbolSize: 20,
		// 		itemTextColor: "#000",
		// 		effects: [
		// 			{
		// 				on: "hover",
		// 				style: {
		// 					itemTextColor: "#000",
		// 					itemOpacity: 1,
		// 				},
		// 			},
		// 		],
		// 	},
		// ]}
	/>
);

export default AgeGenderChart;
