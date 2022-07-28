import React from 'react';
import SelectMenu from './SelectMenu';
import Image from 'next/image';
import testimage from '../public/QianqianVTO.png';
import testimage2 from '../public/test2.png';
import testimage3 from '../public/gmoy_B07J2YCKTF.png';


const style = {
  wrapper: `px-10 place-content-center`,
  form: `flex flex-col space-y-16 px-8 pt-6 pb-8 mb-6 justify-evenly`,
  title: `text-center text-2xl w-full`,
  walletHeader: `text-center text-xl font-black w-full`,
  walletInfo: `text-center text-l w-full`,
  menu: `pt-1`,
  collections: `flex flex-row justify-evenly`,
  buttons: `flex items-center justify-between`,
  button: `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`,
  image: `pt-1 mx-auto`,
  info: `text-left text-base`
};

const Collections = () => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>PaperDoll NFT Collection</h1>
      <h1 className={style.walletHeader}>Wallet Address</h1>
      <h1 className={style.walletInfo}>0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13</h1>
      <div className={style.form}>
        <div className={style.collections}>
          <div className={style.image}>
            <Image alt='test image' src={testimage} width={200} height={400} />
            <div className={style.buttons}>
              <button type='button' className={style.button}>Buy</button>
              <button type='button' className={style.button}>Like</button>
            </div>
            <div className={style.info}>
              <div>Cost: 0.001 ETH</div>
              <div>Likes: 105</div>
            </div>
          </div>
          <div className={style.image}>
            <Image alt='test image' src={testimage2} width={200} height={400} />
            <div className={style.buttons}>
              <button type='button' className={style.button}>Buy</button>
              <button type='button' className={style.button}>Like</button>
            </div>
            <div className={style.info}>
              <div>Cost: 0.001 ETH</div>
              <div>Likes: 93</div>
            </div>
          </div>
          <div className={style.image}>
            <Image alt='test image' src={testimage3} width={200} height={400} />
            <div className={style.buttons}>
              <button type='button' className={style.button}>Buy</button>
              <button type='button' className={style.button}>Like</button>
            </div>
            <div className={style.info}>
              <div>Cost: 0.001 ETH</div>
              <div>Likes: 102</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
