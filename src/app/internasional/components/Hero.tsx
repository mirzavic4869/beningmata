import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';

export const Hero = () => {
  return (
    <div className={styles.herointernasional}>
      <Image src="/assets/images/international-hero.png" alt="internasional" width={1000} height={800} quality={80} />
    </div>
  );
};
