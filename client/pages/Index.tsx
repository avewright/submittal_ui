import { useState, useEffect } from "react";
import UploadArea from "@/components/UploadArea";
import LoadingScreen from "@/components/LoadingScreen";
import ResultsScreen from "@/components/ResultsScreen";

type WorkflowStep = "upload" | "loading" | "results";

interface FileInfo {
  name: string;
  size: string;
  pageCount: string;
}

export default function Index() {
  const [currentStep, setCurrentStep] = useState<WorkflowStep>("upload");
  const [fileInfo, setFileInfo] = useState<FileInfo | null>(null);

  const handleFileSelect = (files: FileList) => {
    if (files.length > 0) {
      const file = files[0];

      // Extract file info and simulate page count
      const sizeInMB = (file.size / (1024 * 1024)).toFixed(1);
      const simulatedPageCount = Math.floor(Math.random() * 100) + 20; // Random 20-120 pages

      setFileInfo({
        name: file.name,
        size: `${sizeInMB} MB`,
        pageCount: `${simulatedPageCount} pages`
      });

      // Transition to loading
      setCurrentStep("loading");
    }
  };

  // Auto-transition from loading to results after 3 seconds
  useEffect(() => {
    if (currentStep === "loading") {
      const timer = setTimeout(() => {
        setCurrentStep("results");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  const handleBack = () => {
    setCurrentStep("upload");
    setFileInfo(null);
  };

  const handleGenerate = () => {
    console.log("Generate button clicked - integrate with your submittal generation logic");
    // Here you would integrate with your actual submittal generation system
  };

  // Render based on current step
  if (currentStep === "loading") {
    return (
      <LoadingScreen
        fileName={fileInfo?.name}
        fileSize={fileInfo?.size}
        pageCount={fileInfo?.pageCount}
      />
    );
  }

  if (currentStep === "results") {
    return (
      <ResultsScreen
        fileName={fileInfo?.name}
        fileSize={fileInfo?.size}
        pageCount={fileInfo?.pageCount}
        onBack={handleBack}
        onGenerate={handleGenerate}
      />
    );
  }

  // Default: Upload screen
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

      {/* Main Upload Area - Centered */}
      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <UploadArea
          onFileSelect={handleFileSelect}
          className="w-full max-w-[520px]"
        />
      </div>
    </div>
  );
}
