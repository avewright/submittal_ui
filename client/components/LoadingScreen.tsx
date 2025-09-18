interface LoadingScreenProps {
  fileName?: string;
  fileSize?: string;
  pageCount?: string;
}

export default function LoadingScreen({ 
  fileName = "Florida - Specs_searchable.pdf",
  fileSize = "10.1 MB", 
  pageCount = "73 pages" 
}: LoadingScreenProps) {
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

        {/* File Information */}
        <div className="mt-[39px]">
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
            className="text-black text-right text-base font-medium opacity-70 mt-1"
            style={{
              fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
              letterSpacing: '-0.64px'
            }}
          >
            {pageCount}, {fileSize}
          </div>
        </div>
      </div>

      {/* Loading Animation - Centered */}
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/f67fbc3c41b918e07d6654de52a7db74becba2e8?width=512"
            alt="Loading..."
            className="w-64 h-64 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
