import { ResponsivePie } from "@nivo/pie";

const SponsorRelationshipPie = () => {
	const data = [
		{
			id: "Parent",
			label: "Parent",
			value: 50,
			count: 24,
		},
		{
			id: "Sibling",
			label: "Sibling",
			value: 37.5,
			count: 18,
		},
		{
			id: "Aunt/Uncle",
			label: "Aunt/Uncle",
			value: 6.3,
			count: 3,
		},
		{
			id: "Grandparent",
			label: "Grandparent",
			value: 4.2,
			count: 2,
		},
		{
			id: "Other",
			label: "Other",
			value: 2.1,
			count: 1,
		},
	];

	return (
		<div className="h-96 w-full">
			<ResponsivePie
				activeOuterRadiusOffset={8}
				arcLabel={(d) => `${d.data.count}`}
				arcLabelsSkipAngle={10}
				arcLabelsTextColor="#FFF"
				arcLinkLabelsColor={{ from: "color" }}
				arcLinkLabelsSkipAngle={10}
				arcLinkLabelsStraightLength={4}
				arcLinkLabelsTextColor="#333333"
				arcLinkLabelsThickness={2}
				arcLinkLabel={(d) => `${d.label} ${d.value}%`}
				arcLinkLabelsDiagonalLength={6}
				arcLinkLabelsTextOffset={6}
				borderWidth={0}
				colors={{ scheme: "tableau10" }}
				cornerRadius={3}
				data={data}
				innerRadius={0.5}
				margin={{ top: 20, right: 90, bottom: 20, left: 90 }}
				padAngle={1.5}
				tooltip={({ datum }) => (
					<div className="bg-white px-2 py-3 border border-slate-200 rounded-md">
						<strong>{datum.id}</strong>
						<br />
						Count: {datum.data.count}
						<br />
						Percent Share: {datum.value}%
					</div>
				)}
				// legends={[
				// 	{
				// 		anchor: "right",
				// 		direction: "column",
				// 		justify: false,
				// 		translateX: 70,
				// 		translateY: 0,
				// 		itemsSpacing: 5,
				// 		itemWidth: 100,
				// 		itemHeight: 18,
				// 		itemTextColor: "#333",
				// 		itemDirection: "left-to-right",
				// 		itemOpacity: 1,
				// 		symbolSize: 18,
				// 		symbolShape: "circle",
				// 	},
				// ]}
			/>
		</div>
	);
};

export default SponsorRelationshipPie;
