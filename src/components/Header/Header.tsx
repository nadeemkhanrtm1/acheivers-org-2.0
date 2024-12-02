'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import CrossIcon from '~/icons/cross.svg';
import HamburgerIcon from '~/icons/hamburger-menu.svg';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const listItems = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About Us',
      href: '/about',
    },
    {
      name: 'Contact Us',
      href: '/contact-us',
    },
    {
      name: 'Privacy and Terms',
      href: '/privacy-and-terms',
    },
  ];

  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className='h-12 flex items-center justify-between'>
      <div className='relative h-full flex items-center'>
        {/* Hamburger Button */}
        <span className='h-5 w-5 inline-block' onClick={handleClick}>
          {!isOpen ? <HamburgerIcon /> : <CrossIcon />}

          <div ref={menuRef}>
            {isOpen && (
              <div className='fixed top-0 w-10/12 bg-white-50 h-screen p-4 left-0 z-50'>
                <ul>
                  {listItems?.map((item, index) => {
                    return (
                      <li key={index} className='py-2'>
                        <Link
                          href={item?.href}
                          className='text-lg font-semibold'
                        >
                          {item?.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </span>
      </div>
      <div className='bg-black p-1.5 rounded-md text-white-50 text-xs'>
        Be Acheivers -&gt;
      </div>
    </header>
  );
};

export default Header;
