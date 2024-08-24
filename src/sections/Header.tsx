"use client"

import LogoIcon from '@/assets/logo.svg';
import MenuIcon from '@/assets/icon-menu.svg';
import CloseIcon from '@/assets/icon-close.svg';
import { NeonButton } from '@/components/NeonButton';
import { useState } from 'react';

export const Header = () => {

  const [showSideMenu, setShowSideMenu] = useState(false);

  return (
    <header className="sticky top-0 py-4 border-b border-white/15 md:border-none z-50">
      <div className='absolute inset-0 backdrop-blur -z-10 md:hidden bg-black/25'></div>
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto md:backdrop-blur-sm md:bg-black/25">
          <div>
            <div className="h-10 w-10 inline-flex items-center justify-center border border-white/15 rounded-md">
              <LogoIcon className="h-8 w-8" />
            </div>
          </div>
          <div className='hidden md:block'>
            <nav className='flex gap-8 text-sm'>
              <a href="#" className='text-white/70 hover:text-white transition'>Features</a>
              <a href="#" className='text-white/70 hover:text-white transition'>Developers</a>
              <a href="#" className='text-white/70 hover:text-white transition'>Pricing</a>
              <a href="#" className='text-white/70 hover:text-white transition'>Changelog</a>
            </nav>
          </div>

          <div className={`md:hidden flex justify-center absolute backdrop-blur h-screen border-l border-white/15 w-1/2 bg-black/25 pt-8 right-0 top-[74px] z-40 overflow-hidden transition-[max-width,padding] duration-300 ${!showSideMenu ? 'max-w-0 p-0' : 'max-w-full'}`}>
            <nav className='flex flex-col gap-6 items-center text-sm'>
              <a href="#" className='text-white/70 hover:text-white transition'>Features</a>
              <a href="#" className='text-white/70 hover:text-white transition'>Developers</a>
              <a href="#" className='text-white/70 hover:text-white transition'>Pricing</a>
              <a href="#" className='text-white/70 hover:text-white transition'>Changelog</a>
            </nav>
          </div>
          
          <div className='flex gap-4 items-center'>
            <NeonButton>Join waitlist</NeonButton>
            {!showSideMenu && <button onClick={() => setShowSideMenu(true)}><MenuIcon className="md:hidden" /></button>}
            {showSideMenu && <button onClick={() => setShowSideMenu(false)}><CloseIcon className="w-8 h-8 md:hidden" /></button>}
          </div>
        </div>
      </div>
    </header>
  );
};
