import React from 'react';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  const quickLinks: FooterSection = {
    title: "Quick Links",
    links: [
      { label: "Home", href: "#" },
      { label: "Track", href: "#" },
      { label: "Contact", href: "#" }
    ]
  };

  const portfolioLinks: FooterSection = {
    title: "Portfolio",
    links: [
      { label: "My Portfolio", href: "#" },
      { label: "Other Projects", href: "#" }
    ]
  };

  const contactLinks: FooterSection = {
    title: "Contact",
    links: [
      { label: "Email", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "GitHub", href: "#" }
    ]
  };

  const renderSection = (section: FooterSection) => (
    <div>
      <h2 className="text-lg font-semibold text-white">{section.title}</h2>
      <ul className="mt-2 space-y-2">
        {section.links.map((link, index) => (
          <li 
            key={index} 
            className="hover:text-gray-300 text-white cursor-pointer"
          >
            {link.label}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="bg-gray-950 bg-opacity-80 border-t-gray-100 border-t-2 border-opacity-60 w-full">
      <div className="p-8 flex flex-col items-center mx-auto max-w-screen-xl">
        <div className="w-full flex justify-between items-start">
          <div>
            <h1 className="text-xl font-bold text-purple-600">LK SOL</h1>
          </div>

          <div className="flex space-x-16">
            {renderSection(quickLinks)}
            {renderSection(portfolioLinks)}
            {renderSection(contactLinks)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;