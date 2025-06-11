
import React from 'react';
import { ContactInfo } from '../types';

interface HeaderProps {
  name: string;
  title: string;
  contact: ContactInfo;
}

export const Header: React.FC<HeaderProps> = ({ name, title, contact }) => {
  return (
    <div className="text-center md:text-left flex-grow">
      <h1 className="text-4xl md:text-5xl font-bold text-sky-700 mb-2">{name}</h1>
      <h2 className="text-lg md:text-xl font-semibold text-slate-600 mb-4">{title}</h2>
      <div className="space-y-1 text-slate-700">
        <p className="flex items-center justify-center md:justify-start">
          <i className="fas fa-phone-alt mr-2 text-sky-600"></i>
          {contact.phone1} / {contact.phone2}
        </p>
        <p className="flex items-center justify-center md:justify-start">
          <i className="fas fa-envelope mr-2 text-sky-600"></i>
          <a href={`mailto:${contact.email}`} className="hover:text-sky-600 hover:underline">
            {contact.email}
          </a>
        </p>
        <p className="flex items-center justify-center md:justify-start">
          <i className="fab fa-linkedin mr-2 text-sky-600"></i>
          <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-sky-600 hover:underline">
            {contact.linkedin}
          </a>
        </p>
      </div>
    </div>
  );
};
    