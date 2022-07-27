import React from 'react';
import SelectMenu from './SelectMenu';
import SelectAsinMenu from './SelectAsinMenu';
import Image from 'next/image';
import emptyPerson from '../public/Empty Person.png';
import emptyAsin from '../public/Empty ASIN.png';
import emptyResult from '../public/Empty Result.png';

const style = {
  wrapper: `px-20 place-content-center`,
  form: `flex flex-col space-y-16 px-8 pt-6 pb-8 mb-6 justify-evenly`,
  title: `text-center text-2xl w-full`,
  menu: `pt-1`,
  button: `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`,
  image: `pt-1 mx-auto`,
  collections: `flex flex-row justify-evenly`,
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
          <SelectAsinMenu />
        </div>
        <button type='button' className={style.button}>
          Try on
        </button>
        <div className={style.collections}>
          <div className={style.image}>
            <Image alt='test image' src={emptyPerson} width={250} height={400} />
          </div>
          <div className={style.image}>
            <Image alt='test image' src={emptyAsin} width={250} height={400} />
          </div>
          <div className={style.image}>
            <Image alt='test image' src={emptyResult} width={250} height={400} />
          </div>
        </div>
        <button type='button' className={style.button}>
          Mint to NFT
        </button>
      </div>
    </div>
  );
};

export default Minter;
