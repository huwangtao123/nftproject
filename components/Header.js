import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import amazonLogo from '../assets/fashioNFT.svg';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const style = {
    wrapper: `bg-[#04111d] w-screen px-[1.5rem] py-[0.8rem] flex `,
    logoContainer: `flex items-center cursor-pointer`,
    logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
    extraSpace: `flex flex-1 mx-[0.8rem] w-max-[520px]`,
    headerItems: `flex flex-wrap items-center justify-end`,
    headerItem: `text-white px-6 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
    headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
};

const Header = () => {
    return (
      <div className={style.wrapper}>
        <Link href='/'>
          <div className={style.logoContainer}>
            <Image src={amazonLogo} height={40} width={80} />
            <div className={style.logoText}>Amazon Fashion</div>
          </div>
        </Link>

        <div className={style.extraSpace}></div>
        <div className={style.headerItems}>
          <Link href='/'>
            <div className={style.headerItem}> PaperDoll Mint </div>
          </Link>
          <Link href='/collectionPage'>
            <div className={style.headerItem}> Collection </div>
          </Link>
        </div>

        <ConnectButton />
      </div>
    );
};

export default Header;
