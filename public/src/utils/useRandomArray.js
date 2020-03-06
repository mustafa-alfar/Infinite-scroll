import { useState, useEffect } from 'react';
import generateRandomNumber from './generateRandomNumber';

const random = generateRandomNumber();

export default function useRandomArray(length = 0) {
  const [ads, setAds] = useState([random]);
  useEffect(() => {
    // if round data list length / 20 is larger than zero add more ads.
    let counter = length - ads.length;
    while (counter > 0) {
      const newValue = generateRandomNumber();

      if (ads.indexOf(newValue) === -1) {
        setAds([...ads, newValue]);
        // decrement counter and not count on react state (ads) because it will change its value in the next render
        // and that will cause infinite loop;
        counter--;
      }
    }
  }, [length]);

  return ads;
}
