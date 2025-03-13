import Image from 'next/image';
import React from 'react';

export const Hero = () => {
  return (
    <div className="heroimg">
      <Image src="/assets/images/hero.png" alt="hero-img" width={1000} height={800} quality={80} />
    </div>
  );
};
