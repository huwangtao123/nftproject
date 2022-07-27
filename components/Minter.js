import React from 'react';
import SelectMenu from './SelectMenu';
import Image from 'next/image';
import testimage from '../public/test.png';

const style = {
  wrapper: `px-20 place-content-center`,
  form: `flex flex-col space-y-16 px-8 pt-6 pb-8 mb-6 justify-evenly`,
  title: `text-center text-2xl w-full`,
  menu: `pt-6`,
  button: `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`,
  image: `pt-6`,
};

const Minter = () => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>🧙‍♂️ PaperDoll NFT Minter</h1>
      <div className={style.form}>
        <div className={style.menu}>
          <SelectMenu />
        </div>
        <div className={style.menu}>
          <SelectMenu className={style.menu} />
        </div>
        <button type='button' className={style.button}>
          Try on
        </button>
        <div className={style.image}>
          <Image alt='test image' src={testimage} />
        </div>
      </div>
    </div>
  );
};

export default Minter;
