import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Galih. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="lama facebook"
        />
        <Image
          src="/2.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="lamania ig"
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="lamania twitter"
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="lamania ytb"
        />
      </div>
    </div>
  );
};

export default Footer;
