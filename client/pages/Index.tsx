import { useState } from "react";
import UploadArea from "@/components/UploadArea";

export default function Index() {
  const [uploadedFiles, setUploadedFiles] = useState<FileList | null>(null);

  const handleFileSelect = (files: FileList) => {
    setUploadedFiles(files);
    console.log("Files selected:", Array.from(files).map(f => f.name));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Logo and Title Section */}
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
      </div>

      {/* Main Upload Area - Centered */}
      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <UploadArea
          onFileSelect={handleFileSelect}
          className="w-full max-w-[520px]"
        />
      </div>

      {/* Debug: Show uploaded files (remove in production) */}
      {uploadedFiles && uploadedFiles.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg max-w-sm">
          <h4 className="font-medium mb-2">Uploaded Files:</h4>
          <ul className="text-sm space-y-1">
            {Array.from(uploadedFiles).map((file, index) => (
              <li key={index} className="truncate">
                {file.name} ({(file.size / 1024).toFixed(1)} KB)
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
