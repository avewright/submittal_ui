import ResultsScreen from "@/components/ResultsScreen";

export default function TestResults() {
  const handleBack = () => {
    console.log("Back clicked");
  };

  const handleGenerate = () => {
    console.log("Generate clicked");
  };

  return (
    <ResultsScreen
      fileName="Florida - Specs_searchable.pdf"
      fileSize="10.1 MB"
      pageCount="73 pages"
      onBack={handleBack}
      onGenerate={handleGenerate}
    />
  );
}
