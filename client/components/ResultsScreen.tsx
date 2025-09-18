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
      {/* Header - Logo and Title */}
      <div className="absolute top-0 left-0 p-4 sm:p-6 lg:p-8">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/0cad4c1e162e1748039394e2dd4f37455b196782?width=354"
          alt="Kahua Logo"
          className="w-[177px] h-[89px] object-contain"
        />
        <div
          className="mt-6 text-black text-2xl font-medium"
          style={{
            fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
            letterSpacing: '-0.96px'
          }}
        >
          Submittal Wizard
        </div>

        {/* File Information with Back Button */}
        <div className="mt-[39px] flex items-center gap-4">
          {/* Back Arrow */}
          <button 
            onClick={onBack}
            className="flex-shrink-0 hover:opacity-70 transition-opacity"
          >
            <svg
              width="48"
              height="48"
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

          <div className="flex flex-col">
            <div
              className="text-black text-2xl font-medium"
              style={{
                fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
                letterSpacing: '-0.96px'
              }}
            >
              {fileName}
            </div>
            <div
              className="text-black text-base font-medium opacity-70"
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
        <div className="absolute right-4 sm:right-6 lg:right-8 top-[151px]">
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
      <div className="pt-[209px] px-4 sm:px-6 lg:px-8 pb-8">
        <div className="w-full max-w-[1385px] mx-auto rounded-[13px] bg-gradient-to-r from-[rgba(245,134,18,0.05)] to-[rgba(224,27,46,0.10)] p-5">
          
          {/* Table Header */}
          <div className="flex items-center gap-[81px] mb-[38px] px-[19px]">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
            >
              <path
                d="M22.1667 3.5H5.83333C4.54467 3.5 3.5 4.54467 3.5 5.83333V22.1667C3.5 23.4553 4.54467 24.5 5.83333 24.5H22.1667C23.4553 24.5 24.5 23.4553 24.5 22.1667V5.83333C24.5 4.54467 23.4553 3.5 22.1667 3.5Z"
                stroke="#1E1E1E"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            
            <div className="flex items-center gap-[81px] flex-1">
              <div
                className="w-[144px] text-black text-2xl font-bold"
                style={{
                  fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
                  letterSpacing: '-0.96px'
                }}
              >
                Section ID
              </div>
              <div
                className="w-[220px] text-black text-2xl font-bold"
                style={{
                  fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
                  letterSpacing: '-0.96px'
                }}
              >
                Section
              </div>
              <div
                className="w-[520px] text-black text-2xl font-bold"
                style={{
                  fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
                  letterSpacing: '-0.96px'
                }}
              >
                Title
              </div>
              <div
                className="text-black text-2xl font-bold"
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
              <div key={result.id + index} className="flex items-center gap-[81px] px-[19px]">
                <input
                  type="checkbox"
                  defaultChecked={result.checked}
                  className="w-7 h-7 rounded border-4 border-[#1E1E1E] accent-current flex-shrink-0"
                />
                
                <div className="flex items-center gap-[81px] flex-1">
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
                    className="w-[520px] text-black/77 text-2xl font-medium"
                    style={{
                      fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif'
                    }}
                  >
                    {result.title}
                  </div>
                  <div
                    className="text-black/77 text-2xl font-medium"
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
  );
}
