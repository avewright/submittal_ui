export const SPACING = {
	// Page/content
	contentTop: "pt-36 sm:pt-40",
	pageX: "px-4 sm:px-6 lg:px-8",

	// Header row (back + file info + generate)
	fileRowGap: "gap-4",
	fileLeftGroupGap: "gap-3 sm:gap-4",
	alignInsetX: "px-[20px]", // align with table inner padding

	// Back arrow icon size (in px)
	backArrowPx: 24,

	// File info text
	fileNameText: "text-black text-xl sm:text-2xl font-medium",
	fileNameMaxWidth: "max-w-[65ch]",
	fileMetaText: "mt-1 text-black/70 text-sm font-medium",

	// Table container
	tableOuterY: "mt-8 pb-8",
	tableInnerPad: "px-5 py-5", // horizontal 20px

	// Table header/rows
	tableHeaderGap: "gap-6 md:gap-12",
	tableRowGap: "gap-6 md:gap-12",
	rowVerticalSpacing: "space-y-[44px]",

	// Column widths
	colWidth: {
		sectionId: "w-[144px]",
		section: "w-[220px]",
		title: "w-[520px]", // used only for header; body uses flex-1
	},

	// Inputs
	checkbox: "w-5 h-5 rounded border-2 border-[#1E1E1E] accent-current flex-shrink-0",
} as const; 