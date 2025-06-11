
import React from 'react';

interface ImagePlaceholderProps {
  altText: string;
  className?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ altText, className = 'w-full h-48' }) => {
  return (
    <div 
      className={`bg-slate-200 border-2 border-dashed border-slate-400 flex flex-col items-center justify-center text-slate-500 p-4 ${className}`}
      role="img"
      aria-label={altText}
    >
      <i className="fas fa-image fa-2x mb-2"></i>
      <p className="text-xs text-center">{altText}</p>
      <p className="text-xs text-center mt-1">(Espacio para imagen)</p>
    </div>
  );
};
    