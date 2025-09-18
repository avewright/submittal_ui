import { useState } from "react";

interface UploadAreaProps {
  onFileSelect?: (files: FileList) => void;
  className?: string;
}

export default function UploadArea({ onFileSelect, className }: UploadAreaProps) {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0 && onFileSelect) {
      onFileSelect(files);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0 && onFileSelect) {
      onFileSelect(files);
    }
  };

  const handleBrowseClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.onchange = (e) => {
      const target = e.target as HTMLInputElement;
      if (target.files && target.files.length > 0 && onFileSelect) {
        onFileSelect(target.files);
      }
    };
    input.click();
  };

  return (
    <div
      className={`
        relative flex flex-col items-center justify-center
        w-full max-w-[520px] mx-auto
        min-h-[275px] sm:h-[275px]
        px-4 py-10 sm:px-[151px] sm:py-10
        rounded-[13px]
        border border-dashed border-upload-border
        bg-upload-gradient
        transition-all duration-200
        cursor-pointer
        hover:border-opacity-20
        ${isDragOver ? 'border-opacity-30 bg-opacity-80' : ''}
        ${className || ''}
      `}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleBrowseClick}
    >
      {/* Upload Icon - exactly as in Figma */}
      <svg
        className="w-24 h-24 flex-shrink-0 mb-[22px]"
        width="96"
        height="96"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M84 60V76C84 78.1217 83.1571 80.1566 81.6569 81.6569C80.1566 83.1571 78.1217 84 76 84H20C17.8783 84 15.8434 83.1571 14.3431 81.6569C12.8429 80.1566 12 78.1217 12 76V60M68 32L48 12M48 12L28 32M48 12V60"
          stroke="black"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Text Content */}
      <div className="flex flex-col items-center gap-0 text-center">
        <div
          className="text-black font-inter text-2xl font-medium leading-normal"
          style={{ fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif' }}
        >
          drag and drop
        </div>
        <div
          className="text-black/60 font-inter text-2xl font-medium italic leading-normal mt-[3px]"
          style={{ fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif' }}
        >
          or
        </div>
        <div
          className="text-black font-inter text-2xl font-medium leading-normal mt-[3px]"
          style={{ fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif' }}
        >
          browse
        </div>
      </div>
    </div>
  );
}
