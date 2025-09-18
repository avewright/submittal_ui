import { SPACING } from "@/lib/spacing";

interface ResultData {
  id: number;
  sectionId: string;
  section: string;
  title: string;
  page: number;
  checked?: boolean;
}

interface ResultsScreenProps {
  fileName?: string;
  fileSize?: string;
  pageCount?: string;
  onBack?: () => void;
  onGenerate?: () => void;
  results?: ResultData[];
}

const defaultResults: ResultData[] = [
  {
    id: 1,
    sectionId: "1",
    section: "06-06-2006",
    title: "Submittal Requirements and Process",
    page: 1,
    checked: false
  },
  {
    id: 2,
    sectionId: "2", 
    section: "07-06-2230",
    title: "Construction Materials",
    page: 4,
    checked: false
  },
  {
    id: 3,
    sectionId: "2",
    section: "07-06-2230", 
    title: "Construction Materials",
    page: 4,
    checked: false
  }
];

export default function ResultsScreen({ 
  fileName = "Florida - Specs_searchable.pdf",
  fileSize = "10.1 MB", 
  pageCount = "73 pages",
  onBack,
  onGenerate,
  results = defaultResults
}: ResultsScreenProps) {
  
  return (
    <div className="min-h-screen bg-white">
      {/* Logo and Title Section */}
      <div className="absolute top-0 left-0 sm:p-6 lg:p-8 flex flex-col items-center">
        <img
          src="/kahua-logo.webp"
          alt="Kahua Logo"
          className="w-[177px] h-[89px] object-contain"
        />
        <div
          className="text-black text-2xl font-medium text-center ml-2"
          style={{
            fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
            letterSpacing: '-0.96px'
          }}
        >
          Submittal Wizard
        </div>
      </div>

      {/* Content */}
      <div className="pt-44 sm:pt-100 ml-2 mt-10">
        {/* File row with Back, info, and Generate aligned */}
              <div className={`mt-6 ${SPACING.alignInsetX} flex items-center justify-between ${SPACING.fileRowGap}`}>
        <div className={`flex items-center ${SPACING.fileLeftGroupGap} min-w-0`}>
          {/* Back Arrow */}
          <button 
            onClick={onBack}
            className="flex-shrink-0 hover:opacity-66 transition-opacity"
            aria-label="Back"
          >
            <svg
              width={`${SPACING.backArrowPx}`}
              height={`${SPACING.backArrowPx}`}
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 36L18 24L30 12"
                stroke="#1E1E1E"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="flex flex-col min-w-0 leading-tight">
            <div
              className="text-black text-xl sm:text-2xl font-medium truncate max-w-[65ch]"
              style={{
                fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
                letterSpacing: '-0.96px'
              }}
              title={fileName}
            >
              {fileName}
            </div>
            <div
              className={`${SPACING.fileMetaText}`}
              style={{
                fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
                letterSpacing: '-0.64px'
              }}
            >
              {pageCount}, {fileSize}
            </div>
          </div>
        </div>

        {/* Generate Button */}
        <div className="flex items-center">
          <button
            onClick={onGenerate}
            className="flex items-center gap-2 px-[7px] py-[7px] pr-4 rounded-[13px] bg-gradient-to-r from-[rgba(245,134,18,0.20)] to-[rgba(224,27,46,0.40)] hover:from-[rgba(245,134,18,0.30)] hover:to-[rgba(224,27,46,0.50)] transition-all"
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/90510796a40d9a1218c5dff199cbce5438fd9b1e?width=58"
              alt=""
              className="w-[29px] h-[29px] object-contain"
            />
            <span
              className="text-black/77 text-2xl font-medium"
              style={{
                fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif'
              }}
            >
              Generate
            </span>
          </button>
        </div>
      </div>

      {/* Results Table */}
      <div className="mt-4 pb-8 px-4">
        <div className={`w-full rounded-[13px] bg-gradient-to-r from-[rgba(245,134,18,0.05)] to-[rgba(224,27,46,0.10)] ${SPACING.tableInnerPad}`}>
          
          {/* Table Header */}
          <div className={`flex items-center ${SPACING.tableHeaderGap} mb-6`}>
            <input type="checkbox" className="w-5 h-5 rounded-md border-2 border-[#1E1E1E]/60 bg-white/70 shadow-sm transition-all duration-150 ease-out accent-[rgb(224,27,46)] hover:scale-[1.05] hover:border-[#1E1E1E]/80 focus:outline-none focus:ring-2 focus:ring-[rgba(224,27,46,0.35)] focus:ring-offset-2 focus:ring-offset-white" />
            <div className={`flex items-center ${SPACING.tableHeaderGap} flex-1 min-w-0`}>
              <div
                className={`${SPACING.colWidth.sectionId} text-black text-2xl font-bold`}
                style={{
                  fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
                  letterSpacing: '-0.96px'
                }}
              >
                Section ID
              </div>
              <div
                className={`${SPACING.colWidth.section} text-black text-2xl font-bold`}
                style={{
                  fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
                  letterSpacing: '-0.96px'
                }}
              >
                Section
              </div>
              <div
                className={`${SPACING.colWidth.title} text-black text-2xl font-bold`}
                style={{
                  fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
                  letterSpacing: '-0.96px'
                }}
              >
                Title
              </div>
              <div
                className="ml-auto text-black text-2xl font-bold text-right"
                style={{
                  fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
                  letterSpacing: '-0.96px'
                }}
              >
                Page
              </div>
            </div>
          </div>

          {/* Table Rows */}
          <div className="space-y-[44px]">
            {results.map((result, index) => (
              <div key={result.id + index} className="flex items-center gap-6 md:gap-12">
                <input
                  type="checkbox"
                  defaultChecked={result.checked}
                  className="w-5 h-5 rounded-md border-2 border-[#1E1E1E]/60 bg-white/70 shadow-sm transition-all duration-150 ease-out accent-[rgb(224,27,46)] hover:scale-[1.05] hover:border-[#1E1E1E]/80 focus:outline-none focus:ring-2 focus:ring-[rgba(224,27,46,0.35)] focus:ring-offset-2 focus:ring-offset-white flex-shrink-0"
                />
                
                <div className={`flex items-center ${SPACING.tableRowGap} flex-1 min-w-0`}>
                  <div
                    className="w-[144px] text-black/77 text-2xl font-medium"
                    style={{
                      fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif'
                    }}
                  >
                    {result.sectionId}
                  </div>
                  <div
                    className="w-[220px] text-black/77 text-2xl font-medium"
                    style={{
                      fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif'
                    }}
                  >
                    {result.section}
                  </div>
                  <div
                    className="flex-1 min-w-0 text-black/77 text-2xl font-medium truncate"
                    style={{
                      fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif'
                    }}
                    title={result.title}
                  >
                    {result.title}
                  </div>
                  <div
                    className="ml-auto text-black/77 text-2xl font-medium text-right"
                    style={{
                      fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif'
                    }}
                  >
                    {result.page}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
