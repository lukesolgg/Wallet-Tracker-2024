import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  const exploreLinks: FooterSection = {
    title: "Explore",
    links: [
      { label: "My Portfolio", href: "#" },
      { label: "Crypto Portfolio Tracker", href: "#" },
      { label: "Swap", href: "#" },
      { label: "Stake", href: "#" }
    ]
  };

  const resourceLinks: FooterSection = {
    title: "Useful Resources",
    links: [
      { label: "DexScreener", href: "https://dexscreener.com" },
      { label: "CoinGecko", href: "https://www.coingecko.com" },
      { label: "CoinMarketCap", href: "https://coinmarketcap.com" },
      { label: "Phantom Wallet", href: "https://phantom.app" },
      { label: "Magic Eden", href: "https://magiceden.io" },
      { label: "Raydium", href: "https://raydium.io" }
    ]
  };

  const policyLinks: FooterSection = {
    title: "Policies",
    links: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Disclaimer", href: "#" }
    ]
  };

  const supportLinks: FooterSection = {
    title: "Support",
    links: [
      { label: "Contact Me", href: "#" },
      { label: "View Docs", href: "#" },
      { label: "How to use Crypto Portfolio Tracker", href: "#" }
    ]
  };

  const renderSection = (section: FooterSection) => (
    <div className="text-center md:text-left">
      <h2 className="text-lg font-semibold text-white mb-4">{section.title}</h2>
      <ul className="space-y-2">
        {section.links.map((link, index) => (
          <li key={index}>
            <a 
              href={link.href}
              className="text-gray-300 hover:text-purple-500 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-2xl font-bold">
                <span className="text-purple-600">LK</span>
                <span className="text-white"> SOL</span>
              </span>
              <p className="mt-4 text-gray-400 text-sm text-center md:text-left">
                Track your Solana portfolio with ease
              </p>
              <div className="mt-6 flex space-x-4">
                <a 
                  href="https://linkedin.com/in/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-500 transition-colors duration-200"
                >
                  <LinkedInIcon />
                </a>
                <a 
                  href="https://github.com/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-500 transition-colors duration-200"
                >
                  <GitHubIcon />
                </a>
                <a 
                  href="https://x.com/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-500 transition-colors duration-200"
                >
                  <XIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            {renderSection(exploreLinks)}
            {renderSection(resourceLinks)}
            {renderSection(policyLinks)}
            {renderSection(supportLinks)}
          </div>
        </div>

        <div className="mt-8 md:mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} LK SOL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;