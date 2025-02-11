import { setup } from "xstate";

type MachineEvents =
	| { type: "next" }
	| { type: "no valid documentation" }
	| { type: "has valid documentation" }
	| { type: "application successful" }
	| { type: "application denied" }
	| { type: "appeal successful" }
	| { type: "appeal unsuccessful" }
	| { type: "reset" };

export const machine = setup({
	types: {
		context: {} as object,
		events: {} as MachineEvents,
	},
	guards: {},
}).createMachine({
	context: {},
	id: "travelProcess",
	initial: "documentation gathering",
	on: {
		reset: {
			target: ".documentation gathering",
		},
	},
	states: {
		"documentation gathering": {
			on: {
				next: {
					target: "document processing",
				},
			},
			description:
				"Gathering/validation/issuance of personal identification documentation, documentation demonstrating familial links.",
		},
		"document processing": {
			on: {
				"no valid documentation": {
					target: "passport application",
				},
				"has valid documentation": {
					target: "application review",
				},
			},
			description:
				"Based on travel documentation status, proceed with either passport renewal or visa application.",
		},
		"passport application": {
			on: {
				next: {
					target: "application review",
				},
			},
			description:
				"Apply for/renew passport, or document why a passport cannot be issued and request alternative resolution.",
		},
		"application review": {
			on: {
				"application successful": {
					target: "travel documentation",
				},
				"application denied": {
					target: "additional assessment",
				},
			},
			description: "Application processing and initial decision.",
		},
		"travel documentation": {
			on: {
				next: {
					target: "departure approved",
				},
			},
			description:
				"Receiving travel documentation and/or visa, ending protection injunction and requesting an exit permit.",
		},
		"additional assessment": {
			on: {
				next: {
					target: "appeal process",
				},
			},
			description:
				"Age Assessment, DNA Test or other supporting assessment/documentation (e.g., to demonstrate the beneficiary's psychological dependence on the sponsor).",
		},
		"departure approved": {
			on: {
				reset: {
					target: "documentation gathering",
				},
			},
			tags: ["final"],
			description: "Positively finalized; Departure from Turkey.",
		},
		"appeal process": {
			on: {
				"appeal successful": {
					target: "travel documentation",
				},
				"appeal unsuccessful": {
					target: "final decision",
				},
			},
			description: "Appealing decision with additional supporting evidence.",
		},
		"final decision": {
			tags: ["final"],
			on: {
				reset: {
					target: "documentation gathering",
				},
			},
			description: "Negatively finalized.",
		},
	},
});
