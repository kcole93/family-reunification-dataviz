// ApplicationStepper.tsx
import { useState, useEffect } from "react";
import { Check, X, ArrowRight, ListRestart, ArrowDown } from "lucide-react";
import { useMachine } from "@xstate/react";
import { machine } from "./ApplicationMachine";

interface Step {
	id: string;
	title: string;
	description: string;
	decision: boolean;
	options: Array<string>;
	final: boolean;
	success: boolean;
}

const ApplicationStepper: React.FC = () => {
	const [history, setHistory] = useState<Array<string>>([]);
	const [state, send] = useMachine(machine);

	useEffect(() => {
		setHistory((previous) => {
			const newStateValue: string =
				(typeof state.value === "string" ? state.value : undefined) ||
				"initial";

			if (previous[previous.length - 1] === newStateValue) {
				return previous;
			}

			return [...previous, newStateValue];
		});
	}, [state]);

	const steps: Step[] = Object.entries(machine.states).map(
		([id, stateConfig]) => {
			const decisionOptions = stateConfig.on
				? Object.keys(stateConfig.on).filter(
						(key) =>
							!["next", "reset"].includes(key) && !key.startsWith("xstate")
					)
				: [];

			return {
				id,
				title: id
					.split(" ")
					.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
					.join(" "),
				description: stateConfig.description || "",
				decision: decisionOptions.length > 0,
				options: decisionOptions,
				final: stateConfig.tags?.includes("final") || false,
				success: id === "departure approved",
			};
		}
	);

	const handleNext = (option?: string): void => {
		if (option) {
			const eventType = option.toLowerCase().replace(/\s+/g, " ") as
				| "next"
				| "no valid documentation"
				| "has valid documentation"
				| "application successful"
				| "application denied"
				| "appeal successful"
				| "appeal unsuccessful"
				| "reset";
			send({ type: eventType });
		} else {
			send({ type: "next" });
		}
	};

	const handleReset = (): void => {
		setHistory(history[0] !== undefined ? [history[0]] : []);
		send({ type: "reset" });
	};

	const getStepIcon = (step: Step) => {
		if (step.final) {
			return step.success ? (
				<Check className="w-6 h-6 text-green-600" />
			) : (
				<X className="w-6 h-6 text-red-600" />
			);
		}
		return <ArrowDown className="w-6 h-6 text-blue-600" />;
	};

	const currentSteps: Step[] = history
		.map((historyStepId) => steps.find((step) => step.id === historyStepId))
		.filter((step): step is Step => step !== undefined);

	const currentStep: Step | undefined = steps.find(
		(step) =>
			step.id ===
			(typeof state.value === "string"
				? state.value
				: Object.keys(state.value)[0])
	);

	return (
		<div className="mx-auto transition-all duration-300 ease-in-out">
			<div className="space-y-8">
				{currentSteps.map((step, index) => (
					<div
						key={step.id}
						className="relative transition-all duration-300 ease-in-out"
					>
						<div className="flex items-start gap-4">
							<div className="relative">
								<div
									className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center
                    ${
											index < currentSteps.length - 1
												? "bg-blue-100 text-blue-600"
												: "bg-gray-100 text-gray-500"
										}`}
								>
									{index + 1}
								</div>
								{index < currentSteps.length - 1 && (
									<div className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-gray-200 top-8 h-28 md:h-20 transition-all duration-300 ease-in-out" />
								)}
							</div>

							<div className="flex-1 pt-1">
								<h3 className="font-semibold text-sm md:text-base text-gray-900">
									{step.title}
								</h3>
								<p className="mt-1 max-w-[20ch] md:max-w-[80ch] text-xs md:text-sm text-gray-600">
									{step.description}
								</p>

								{step.decision &&
									state.matches(
										step.id as
											| "documentation gathering"
											| "document processing"
											| "passport application"
											| "application review"
											| "travel documentation"
											| "additional assessment"
											| "departure approved"
											| "appeal process"
											| "final decision"
									) &&
									step.options && (
										<div className="mt-4 flex gap-1">
											{step.options.map((option) => (
												<button
													key={option}
													className="px-2 py-2 text-xs md:text-sm font-medium rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all duration-300 ease-in-out"
													onClick={() => {
														handleNext(option);
													}}
												>
													{option}
												</button>
											))}
										</div>
									)}
							</div>

							<div className="shrink-1 pt-1">{getStepIcon(step)}</div>
						</div>
					</div>
				))}
			</div>

			<div className="mt-6 flex gap-4">
				{currentStep && !currentStep.final && !currentStep.decision && (
					<button
						className="text-sm px-4 py-2 flex items-center gap-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300 ease-in-out"
						onClick={() => {
							handleNext();
						}}
					>
						Continue
						<ArrowRight className="w-4 h-4" />
					</button>
				)}
				{currentSteps.length >= 2 && (
					<button
						className="text-sm px-4 py-2 flex items-center gap-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all duration-300 ease-in-out"
						onClick={handleReset}
					>
						Restart
						<ListRestart className="w-4 h-4" />
					</button>
				)}
			</div>
		</div>
	);
};

export default ApplicationStepper;
