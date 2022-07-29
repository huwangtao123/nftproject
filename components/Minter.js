import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import people0 from '../public/people0.png';
import people1 from '../public/people1.png';
import people2 from '../public/people2.png';
import people3 from '../public/people3.png';
import people4 from '../public/people4.png';
import people5 from '../public/people5.png';
import asin0 from '../public/asin0.png';
import asin1 from '../public/asin1.png';
import asin2 from '../public/asin2.png';
import result0 from '../public/result0.png';
import result1 from '../public/result1.png';
import result2 from '../public/result2.png';
import result4 from '../public/result4.png';
import { MintNFT } from 'components/contract/MintNFT';

const style = {
  wrapper: `px-20 place-content-center`,
  form: `flex flex-col space-y-16 px-10 pt-6 pb-8 mb-6 justify-evenly`,
  title: `text-center text-2xl w-full`,
  menu: `pt-1`,
  button: `mx-auto text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`,
  image: `pt-1 mx-auto`,
  collections: `flex flex-row justify-evenly`,
};

const Minter = () => {
  const [people, setPeople] = useState(0);
  const [asin, setAsin] = useState(0);
  const [isResultActive, setIsResultActive] = useState(false);

  const handleOnChange = (e) => {
    setPeople(e.target.value);
  };

  const handleOnAsinChange = (e) => {
    setAsin(e.target.value);
  };

  function getPeopleImage() {
    switch (people) {
      case '1':
        return people1;
      case '2':
        return people2;
      case '3':
        return people3;
      case '4':
        return people4;
      case '5':
        return people5;
      default:
        return people0;
    }
  }

  function getAsinImage() {
    switch (asin) {
      case '1':
        return asin1;
      case '2':
        return asin2;
      default:
        return asin0;
    }
  }

  function tryon() {
    setTimeout(() => {
      setIsResultActive(true);
    }, 5000);
  }

  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>🧙‍♂️ PaperDoll NFT Minter</h1>
      <div className={style.form}>
        <div className={style.menu}>
          <select
            className='form-select'
            value={people}
            onChange={handleOnChange}
          >
            <option value='0'>Select People To Try On</option>
            <option value='1'>QianQian Gao</option>
            <option value='2'>Gabe Moy</option>
            <option value='3'>Tao Wang</option>
            <option value='4'>Anthony Gracey Wright</option>
            <option value='5'>Sean Hall</option>
          </select>
        </div>
        <div className={style.menu}>
          <select
            className='form-select'
            value={asin}
            onChange={handleOnAsinChange}
          >
            <option value='0'>Select ASIN To Try On</option>
            <option value='1'>Adidas Tshirt</option>
            <option value='2'>Colorful Shirt</option>
          </select>
        </div>
        <div>
          <button type='button' className={style.button} onClick={tryon}>
            Try on
          </button>
        </div>
        <div className={style.collections}>
          <div className={style.image}>
            <Image
              alt='test image'
              src={getPeopleImage()}
              width={250}
              height={400}
            />
          </div>
          <div className={style.image}>
            <Image
              alt='test image'
              src={getAsinImage()}
              width={250}
              height={400}
            />
          </div>
          <div className={style.image}>
            {isResultActive && (
              <Image alt='test image' src={result1} width={250} height={400} />
            )}
          </div>
        </div>
        <MintNFT />
      </div>
    </div>
  );
};;

export default Minter;
