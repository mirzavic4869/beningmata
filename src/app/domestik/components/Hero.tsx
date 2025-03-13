import Image from 'next/image';
import React from 'react';
import styles from './styles.module.css';

export const Hero = () => {
  return (
    <div className={styles.herointernasional}>
      <Image src="/assets/images/domestik-hero.png" alt="domestik" width={1000} height={800} quality={80} />
    </div>
  );
};
