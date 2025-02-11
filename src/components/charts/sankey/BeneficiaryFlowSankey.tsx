import { ResponsiveSankey } from "@nivo/sankey";

const BeneficiaryFlowSankey = () => {
	const data = {
		nodes: [
			{ id: "Total", label: "All Cases" },
			{ id: "Closed", label: "Closed" },
			{ id: "Reunited", label: "Reunited with Family" },
			{ id: "Pending", label: "Pending)" },
			{ id: "Lost Contact", label: "Lost Contact" },
			{ id: "Left Country", label: "Left Türkiye" },
			{ id: "Withdrew", label: "Withdrew Application" },
			{ id: "Criminal Accusation", label: "Accused of Crime" },
		],
		links: [
			{ source: "Total", target: "Closed", value: 13 },
			{ source: "Total", target: "Reunited", value: 18 },
			{ source: "Total", target: "Pending", value: 17 },
			{ source: "Closed", target: "Lost Contact", value: 6 },
			{ source: "Closed", target: "Left Country", value: 4 },
			{ source: "Closed", target: "Withdrew", value: 2 },
			{ source: "Closed", target: "Criminal Accusation", value: 1 },
		],
	};

	return (
		<div className="h-[600px] w-full">
			<ResponsiveSankey
				enableLinkGradient
				align="justify"
				colors={{ scheme: "category10" }}
				data={data}
				labelOrientation="horizontal"
				labelPadding={16}
				labelPosition="outside"
				linkContract={3}
				linkHoverOthersOpacity={0.1}
				linkOpacity={0.5}
				margin={{ top: 40, right: 160, bottom: 40, left: 90 }}
				nodeBorderWidth={0}
				nodeHoverOthersOpacity={0.35}
				nodeOpacity={1}
				nodeSpacing={24}
				nodeThickness={18}
				labelTextColor={{
					from: "color",
					modifiers: [["darker", 1]],
				}}
				nodeBorderColor={{
					from: "color",
					modifiers: [["darker", 0.8]],
				}}
			/>
		</div>
	);
};

export default BeneficiaryFlowSankey;
