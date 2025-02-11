import { ResponsivePie } from "@nivo/pie";

const SponsorStatusPie = () => {
	const data = [
		{
			id: "refugee",
			label: "Recognized Refugee",
			value: 62.5,
			count: 30,
		},
		{
			id: "unknown",
			label: "Status Unknown",
			value: 23,
			count: 11,
		},
		{
			id: "applicant",
			label: "Asylum Applicant",
			value: 6.3,
			count: 3,
		},
		{
			id: "nonprotective",
			label: "Non-Protective Status",
			value: 4.2,
			count: 2,
		},
		{
			id: "subsidiary",
			label: "Subsidiary Protection",
			value: 4.2,
			count: 2,
		},
	];

	return (
		<div className="h-96 w-full">
			<ResponsivePie
				activeOuterRadiusOffset={8}
				arcLabel={(d) => `${d.data.count}`}
				arcLabelsSkipAngle={10}
				arcLabelsTextColor="white"
				arcLinkLabel={(d) => `${d.label} ${d.value}%`}
				arcLinkLabelsColor={{ from: "color" }}
				arcLinkLabelsDiagonalLength={20}
				arcLinkLabelsSkipAngle={10}
				arcLinkLabelsStraightLength={20}
				arcLinkLabelsTextColor="#333333"
				arcLinkLabelsTextOffset={12}
				arcLinkLabelsThickness={2}
				borderWidth={0}
				colors={{ scheme: "tableau10" }}
				cornerRadius={0}
				data={data}
				innerRadius={0}
				margin={{ top: 40, right: 80, bottom: 40, left: 80 }}
				padAngle={0}
				tooltip={({ datum }) => (
					<div
						style={{
							background: "white",
							padding: "9px 12px",
							border: "1px solid #ccc",
							borderRadius: "4px",
						}}
					>
						<strong>{datum.label}</strong>
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

export default SponsorStatusPie;
