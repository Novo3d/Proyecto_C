
import React, { useState, ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
  initiallyOpen?: boolean;
}

export const Section: React.FC<SectionProps> = ({ title, children, initiallyOpen = false }) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-6 bg-white rounded-lg ">
      <button
        onClick={toggleOpen}
        className="w-full flex justify-between items-center p-4 bg-slate-100 hover:bg-slate-200 transition-colors duration-200 rounded-t-lg focus:outline-none"
        aria-expanded={isOpen}
      >
        <h2 className="text-2xl font-semibold text-sky-800">{title}</h2>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <i className="fas fa-chevron-down text-sky-700"></i>
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
        style={{
          // max-h-[2000px] is a hack for unknown content height. A more robust solution might use JS to calculate height if needed.
          // For most text content, a large enough max-height will suffice.
        }}
      >
        <div className="p-4 border border-t-0 border-slate-200 rounded-b-lg">
          {children}
        </div>
      </div>
    </div>
  );
};
    