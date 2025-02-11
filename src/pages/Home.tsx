import { useState, type ReactElement } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import AgeGenderChart from "@/components/charts/bar/AgeGenderChart";
import NationalityPieChart from "@/components/charts/pie/NationalityPieChart";
import ProtectiveStatusChart from "@/components/charts/bar/ProtectiveStatusChart";
import SponsorRelationshipPie from "@/components/charts/pie/SponsorRelationshipPie";
import SponsorStatusPie from "@/components/charts/pie/SponsorStatusPie";
import BeneficiaryFlowSankey from "@/components/charts/sankey/BeneficiaryFlowSankey";
import { Blockquote } from "@/components/typography/Blockquote";
import FlowMap from "@/components/charts/maps/FlowMap";
import ApplicationStepper from "@/components/ui/ApplicationStepper";

export const Home = (): ReactElement => {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<article className="w-full max-w-6xl mx-auto mb-12 p-6">
			<div className="my-12">
				<h1 className="text-4xl font-bold mb-1">Reuniting Families</h1>
				<p className="text-xl text-gray-600">
					Opportunities and Challenges for Refugees in Türkiye
				</p>
			</div>
			<main className="text-lg/8">
				<section className="my-3 max-w-[80ch] space-y-8" id="introduction">
					<p>
						<span className="font-bold">Forced displacement</span> takes a heavy
						toll on families, frequently separating parents from their children,
						siblings from their siblings, and spouses from their loved ones.
						With refugee families often spread across various international
						borders, the difficulty and complexity of reuniting such families
						often inhibits advocates from offering assistance. However, family
						reunification plays a critical role in realizing and repairing the
						right to family unity, and oftentimes represents the only viable
						durable solution for refugees whose families have been separated.
					</p>
					<p>
						This report analyzes family reunification opportunities and
						practicalities in one of the world’s largest refugee hosting
						contexts: Türkiye. The report’s in-depth examination allows for the
						identification of a number of important observations and lessons
						learned, highlighting the complexities involved in providing support
						for such cases and illuminating opportunities to improve protection
						outcomes and reduce barriers to accessing the right to family
						reunification.
					</p>
				</section>
				<ChevronDown className="mx-auto my-8 animate-bounce" size={32} />
				<section className="max-w-6xl mx-auto space-y-10">
					<h2 className="text-2xl font-bold mb-4">
						The Right to Family Reunification
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[auto_1fr] gap-6">
						<div className="md:col-span-2 md:row-span-2">
							<div className="prose max-w-none space-y-6">
								<p>
									When people are forced to flee their homes, the most
									devastating impact often goes beyond the loss of property or
									leaving behind familiar surroundings. For many, the deepest
									heartbreak is becoming separated from family members, unsure
									when or if it will be possible to be with them again.
								</p>

								<p>
									Family reunification is not only a legal process, but also
									provides a crucial lifeline helping refugees rebuild their
									lives in a new country. Moreover, family reunification is a{" "}
									<strong>fundamental human right</strong> recognized by
									international law, based on the simple yet powerful idea that
									families should be able to stay together.
								</p>

								<p>
									Unfortunately, the challenges that displaced populations face
									are immense. Recent data from the United Nations Refugee
									Agency (UNHCR) paints a stark picture: while more than 1.47
									million people desperately need to be resettled,{" "}
									<em>
										the agency was only able to help about 5% of those in need.
									</em>{" "}
									This means the vast majority of refugees are unable to benefit
									from resettlement, leading to protracted displacement.
								</p>

								<p>
									Against this backdrop, family reunification does more than
									just bring loved ones back together. It provides a critical
									pathway to long-term protection for those who cannot access
									solutions like resettlement or safe return to their home
									country. Family reunification also helps refugees integrate
									into new communities by allowing refugees to benefit from the
									emotional support and stability provided by family during an
									incredibly challenging life change.
								</p>

								<p>
									When countries welcome and reunite refugee families, they not
									only uphold the right to family reunification, but also
									demonstrate global solidarity in sharing the responsibility of
									supporting people who have been forced to leave everything
									behind.
								</p>
							</div>
						</div>

						<div className="md:col-start-3 md:row-span-1 md:sticky md:top-6">
							<aside className="bg-slate-100 rounded-md py-4 px-6">
								<p className="text-lg md:text-3xl italic font-semibold text-gray-900">
									"Family reunification is a fundamental human right recognized
									by international law"
								</p>
							</aside>
						</div>
					</div>
				</section>
				<section className="my-10">
					<h2 className="text-2xl font-bold mb-4">
						Applying for Family Reunification as a UAM in Turkey
					</h2>
					<div className="max-w-[80ch] space-y-8">
						<p>
							For unaccompanied minors living in Türkiye, the procedures
							necessary to apply to be reunited with their family members in
							another country are complicated. The interactive family
							reunification walkthrough tool below will help you to understand
							the various steps and requirements.
						</p>
					</div>
					<Card className="mt-4">
						<CardHeader>
							<CardTitle>Application Process Walkthrough</CardTitle>
						</CardHeader>
						<CardContent>
							<ApplicationStepper />
						</CardContent>
					</Card>
				</section>
				<section className="my-10 text-lg/8">
					<h2 className="text-2xl font-bold mb-4">
						Unaccompanied Minors in Türkiye Face Complex Obstacles to Reuniting
						with Family
					</h2>
					<div className="max-w-[80ch] 2xl:max-w-none grid grid-cols-1 2xl:grid-cols-2 gap-12">
						<p className="">
							To better understand the multiple challenges that unaccompanied
							minors face in accessing their right to family reunification,
							we'll explore the process undertaken by Unaccompanied Minors
							(UAMs) in Türkiye to reunify with family members in other
							countries and analyze the outcomes of 48 such cases supported by
							the Turkish non-governmental organization Refugee Rights Turkey
							(RRT) between 2015 and 2022.
						</p>
						<p>
							First, let's take a look at the overall demographic profile of the
							individuals who received assistance with family reunification
							requests:
						</p>
					</div>
				</section>
				<section
					className={`grid grid-cols-1 2xl:grid-cols-2 gap-12 transition-opacity duration-500 mb-12`}
				>
					<Card className="w-full h-600px] 2xl:h-[400px]">
						<CardHeader>
							<CardTitle>Nationality Distribution</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="h-[600px] 2xl:h-[400px]">
								<NationalityPieChart />
							</div>
						</CardContent>
					</Card>

					<div className="max-w-[80ch] space-y-8">
						<p>
							The 48 UAMs supported by RRT came from six different countries,
							while one individual was stateless.
						</p>

						<p>
							Slightly more than half (52%) of beneficiaries RRT supported with
							FR were Afghan nationals, generally corresponding to the
							demographics of all unaccompanied minors who RRT has provided
							assistance to (including with matters other than family
							reunification), more than 60% of whom were Afghan nationals.
						</p>
					</div>

					<div className="max-w-[80ch] space-y-6">
						<p>
							The majority (34, or 71%) of beneficiaries were males, while 13
							female and 1 nonbinary beneficiary also received support from RRT.
						</p>
						<p>
							The average age of UAMs who received assistance with FR requests
							was 14.4; among male beneficiaries, the average age was skewed
							somewhat higher at 15, compared to 13 among female beneficiaries.
						</p>
					</div>
					<Card className="mb-8 w-full h-[700px] 2xl:h-[500px]">
						<CardHeader>
							<CardTitle>Age and Gender Distribution</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="h-[600px] 2xl:h-[400px]">
								<AgeGenderChart />
							</div>
						</CardContent>
					</Card>
				</section>
				<div className="max-w-[80ch] space-y-6">
					<p>
						Across all nationalities, the majority of UAM beneficiaries had not
						been registered under a protective regime in Turkey (whether
						Temporary Protection in the case of Syrians or International
						Protection among non-Syrians) at the time they initiated their
						family reunification requests.
					</p>
					<p>
						This may reflect the fact that a minor identified as an
						unaccompanied minor can benefit from all rights and services
						conferred under the Child Protection Law regardless of his or her
						registration status.
					</p>
					<p>
						In addition, migration authorities in some provinces withhold from
						registering until minors have they have turned 18, citing concerns
						that minors would be disadvantaged in communicating their
						well-founded fear of facing persecution prior to adulthood.
					</p>
					<p>
						Identification as an unaccompanied minor and being granted
						protection under the Child Protection Law does not automatically
						endow minors with any documentation, whereas registration under
						temporary protection or international protection does.
					</p>
					<p>
						As a result, unregistered unaccompanied minors often do not possess
						any documentation, whether issued by Turkish authorities or any
						other authority. From the other side, registration of the
						international protection application of an unaccompanied minor and
						the subsequent granting of a status upon individual processing does
						provide them with an ID document, specifically an International
						Protection Applicant ID or International Protection Status Holder
						ID, documents that could be vital for the submission of a family
						reunification application.
					</p>
				</div>
				<Card className="my-8 w-full">
					<CardHeader>
						<CardTitle>Protective Status of Beneficiaries</CardTitle>
					</CardHeader>
					<CardContent className="flex">
						<div className="flex-grow min-h-[400px]">
							<ProtectiveStatusChart />
						</div>
					</CardContent>
				</Card>

				<section className="my-10 text-lg/8">
					<h2 className="text-2xl font-bold mb-4">Procedural Issues</h2>
					<div className="my-3 space-y-8">
						<div className="max-w-[80ch] space-y-8">
							<p>
								The national origin, legal status, and available documentation
								of the FR beneficiary living in Turkey as well as the legal
								status and degree of relationship of their sponsor all play an
								important and interconnected role in determining which
								procedures must be followed to gather and submit the necessary
								documentation to complete an FR application.
							</p>
							<p>
								Most European countries follow similar rules and procedures
								regarding family reunification framed under the EU Directive on
								the Right to Family Reunification. However, these guiding
								documents only provide a set of basic principles, leaving the
								exact formulation and regulation of family reunification
								procedures up to each member state’s national legislation. Some
								of the most common procedural issues experienced by the UAMs
								covered in this report are elaborated in further detail below
							</p>
							<h3 className="text-xl font-bold my-4">
								Sponsor and Beneficiary Elegibility
							</h3>
							<div className="">
								<div className="border-collapse">
									<div className="flex">
										<button
											className={`p-3 mr-1 rounded-t-xl transition-colors duration-200 inset-shadow-sm
              ${
								activeTab === 0
									? "bg-slate-300 text-gray-600 border-neutral-200"
									: "text-gray-600 hover:text-gray-800 bg-gray-100 border-neutral-200 hover:bg-slate-200"
							}`}
											onClick={() => {
												setActiveTab(0);
											}}
										>
											Relationship to Sponsor
										</button>
										<button
											className={`p-3 rounded-t-xl transition-colors duration-200 inset-shadow-sm
								${
									activeTab === 1
										? "bg-slate-300 text-gray-600 border-neutral-200"
										: "text-gray-600 hover:text-gray-800 bg-gray-100 border-neutral-200 hover:bg-slate-200"
								}`}
											onClick={() => {
												setActiveTab(1);
											}}
										>
											Status of Sponsor in Destination Country
										</button>
									</div>
								</div>

								<div className="rounded-xl rounded-tl-none border border-neutral-200 bg-white text-neutral-950 shadow p-12">
									{activeTab === 0 && (
										<div className="flex-grow">
											<SponsorRelationshipPie />
										</div>
									)}
									{activeTab === 1 && (
										<div className="flex-grow">
											<SponsorStatusPie />
										</div>
									)}
								</div>
							</div>
							<p>
								Eligibility and requirements for sponsoring the reunification of
								family members depends on the sponsor’s country of residence,
								and must first be determined before pursuing an FR request.
							</p>
							<p>
								In some countries, individuals receiving subsidiary protection
								cannot bring family members other than spouses, children (and
								parents, in the case of an unaccompanied child being the
								sponsor) or may face additional requirements such as a specified
								waiting period, while recognized refugees are permitted to bring
								more distant family members are frequently exempt from such
								waiting periods. If the sponsor has not yet been granted
								permanent stay in their country of residence, state authorities
								may conclude that the sponsor’s future in the country is not
								guaranteed and that they are therefore ineligible to bring their
								family members to live with them.
							</p>
							<p>
								In some cases, the sponsor may also be required to demonstrate
								their ability to provide for themselves and their family
								members’ needs. Insufficient income, not having a permanent job
								or inadequate living space/ conditions may lead to an
								application being rejected.
							</p>
							<p>
								In a number of states, family reunification laws require that
								the minor beneficiary of a family reunification request be under
								18 at the time that the FR decision is issued (rather than when
								the application is lodged). Due to the prolonged waiting and
								processing times typically encountered during FR requests, RRT
								observed that many UAMs who were closer to 18 when they first
								initiated FR procedures ultimately "aged out" of eligibility for
								FR while others, knowing this fact, were dissuaded from pursuing
								their desire to be reunited with family.
							</p>
							<p>
								After turning 18, young adult beneficiaries are subsequently
								unable to qualify for family reunification unless they meet more
								restrictive eligibility requirements, frequently including that
								the family members they wish to be reunited with are
								psychologically and/or economically dependent on them or
								vice-versa.
							</p>
							<p>
								Some countries also impose restrictions based on the supposed
								capacity of beneficiaries to “successfully integrate” into the
								society of the country of destination.
							</p>
							<p>
								For example in some situations, children over the age of 16
								wishing to move to Germany to live with a parent are required to
								prove that they speak elementary German. Others, such as the
								United Kingdom, further restrict the eligibility of children
								applying to be reunited with their family member(s) in the UK,
								requiring that minors “not be leading an independent life” and
								that these minors “ha[d] been part of the family unit of the
								refugee or person with humanitarian protection at the time when
								the refugee fled.”
							</p>
						</div>
						<h3 className="text-xl font-bold my-4">
							Issued Faced Supporting Beneficiaries in Türkiye
						</h3>
						<div className="max-w-6xl mx-auto">
							<div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-[auto_1fr] gap-6">
								<div className="lg:col-span-2 lg:row-span-2">
									<div className="max-w-[80ch] space-y-8">
										<p>
											In some cases, authorities at youth shelters proactively
											facilitate UAMs' access to support for their family
											reunification requests and provide guidance to minors on
											this issue; however, other times authorities do not
											systematically inquire as to whether or not a minor has
											family with whom they might wish to be reunited, instead
											acting only after receiving such a request from either the
											minor, their relative wishing to sponsor their request
											abroad, or a civil societal organization acting on the
											minor's behalf.
										</p>

										<p>
											The requirement of having a valid passport or other
											accepted travel document in order to leave Turkey and join
											family members abroad also presents a set of common
											obstacles for unaccompanied minors, many of whom lack any
											official documentation from their country of origin. This
											may be because they never received documentation such as a
											birth certificate or national ID, or because these
											documents were damaged, lost or confiscated during their
											long journey to Turkey.
										</p>
									</div>
								</div>

								<div className="lg:col-start-3 lg:row-span-2">
									<Blockquote
										author="Afghan Male UAM, 15"
										text="The hardest part was waiting. As I got older, I was even
              more worried. They said I had to go before I turn 18. I was
              very depressed at that time. I couldn't work in the city where
              I was staying because I had trouble with my leg… when I turned
              18, I had to leave the shelter and find a home. My financial
              situation was already bad… I was looking for a house, but the
              rent was too high. Or I was about to find a house, but the
              landlords wouldn't rent to foreigners."
									/>
								</div>
							</div>
						</div>
						<div className="max-w-[80ch] space-y-8">
							<h3 className="text-xl font-bold mb-4">Applicant Attrition</h3>
							<p>
								One conclusion which can be drawn from RRT’s field observations
								in providing support for UAMs’ FR requests for more than six
								years is that the procedural complexity and drawn out nature of
								most applications for family reunification in a third country
								act as a barrier and deterrent to the practical realization of
								this right.
							</p>
							<p>
								In a number of cases, unaccompanied minors lost hope in their
								prospects of being able to reunite with their family members
								through legal channels and, as a result, opted instead to
								attempt to reunite via irregular crossings, decided to return to
								their country of origin, or simply lost interest in following up
								on their FR case file.
							</p>
							<p>
								This observation draws support from the fact that{" "}
								<strong>
									27% of beneficiaries who received support from RRT with
									regards to their FR application ultimately had their file
									closed without a final resolution.
								</strong>
							</p>
						</div>
					</div>
					<Card className="my-8 w-full h-[700px]">
						<CardHeader>
							<CardTitle>Case Outcomes</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="h-[800px] 2xl:h-[600px]">
								<BeneficiaryFlowSankey />
							</div>
						</CardContent>
					</Card>
					<div className="my-3 max-w-[80ch] space-y-8">
						<p>
							The most common reason for case closure was that RRT was no longer
							able to establish contact the beneficiary. Among such cases, all
							but one of these beneficiaries were Afghans, and all but two
							beneficiaries were between the ages of 16-17. There are a number
							of factors which contribute to this trend:
						</p>
						<ul className="list-disc list-inside my-8 space-y-8">
							<li>
								As UAMs living in state-operated shelters reach the ages of
								16-17, they receive counseling regarding the fact that this
								protective status will be terminated following their 18
								<sup>th</sup> birthday, and therefore that they must make
								preparations to independently fulfill their legal obligations
								and to meet their personal needs upon becoming a legal adult. It
								is therefore unsurprising that a number of UAMs in this age
								group appear to abandon requests to be reunited with family
								members in a third country, instead focusing on meeting their
								immediate needs in Turkey. Faced with this situation, many
								choose to remain in Turkey while others decide to return to
								their countries of origin in order to support family members
								living there, or to attempt to cross into another country
								irregularly to reunite with family members.
							</li>
							<li>
								In most cases, remaining in Turkey is not a simple “choice,” but
								rather requires that the young person in question make a number
								of difficult calculations. While Syrian UAMs in Turkey are
								eligible for Temporary Protective Status due to the group-based
								designation, this only grants legal stay within Turkey in a
								specific city, and being allowed to register in the province
								where the UAM’s shelter was located is not guaranteed.
							</li>
							<li>
								For non-Syrian UAMs, aging out of the protected legal status of
								‘minor’ means that the individual’s right to legal stay in
								Turkey hinges on the outcome of their application for
								International Protection, a process through which they will
								likewise be required to remain in their city of registration,
								which may or may not be the same city where they had been placed
								in a shelter as a minor.
							</li>
						</ul>
						<p>
							Facing these considerable challenges, a significant number of UAMs
							between the ages of 15-17 ultimately decide to depart from the
							shelters where they are housed, either continuing to live in
							Turkey without registering for a protective status, or attempting
							to make their own way to the countries where a family member
							lives.
						</p>
					</div>
				</section>
				<section>
					<h2 className="text-2xl font-bold mb-4">
						Summary of Family Reunification Support Outcomes
					</h2>
					<div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-6">
						<div
							className={`p-6 rounded-lg bg-blue-50 transform transition-transform duration-500`}
						>
							<h3 className="text-xl font-bold mb-2">48</h3>
							<p className="text-gray-600">Total Cases Supported</p>
						</div>
						<div
							className={`p-6 rounded-lg bg-green-50 transform transition-transform duration-500"}`}
						>
							<h3 className="text-xl font-bold mb-2">75%</h3>
							<p className="text-gray-600">Success Rate</p>
						</div>
						<div
							className={`p-6 rounded-lg bg-purple-50 transform transition-transform duration-500"}`}
						>
							<h3 className="text-xl font-bold mb-2">11 Months</h3>
							<p className="text-gray-600">Average Processing Time</p>
						</div>
					</div>
					<Card className="my-8 overflow-hidden">
						<CardHeader>
							<CardTitle>Family Reunication Destination Countries</CardTitle>
						</CardHeader>
						<CardContent className="flex justify-center">
							<FlowMap />
						</CardContent>
					</Card>
					<p className="max-w-[80ch]">
						Of 18 successfully-concluded cases, all countries of destination
						were located in Europe. Thirteen beneficiaries were reunited with
						sponsors living in Germany, two were reunited with sponsors living
						in the United Kingdom. The remaining three beneficiaries were
						reunited with sponsors in Norway, the Netherlands and Sweden.
					</p>
				</section>
			</main>
		</article>
	);
};

export default Home;
