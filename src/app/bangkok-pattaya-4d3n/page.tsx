import React from 'react';
import styles from './styles.module.css';
export default function Page() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.imgContainer}>
        <img src="img/internasional/bangkok-pattaya-4d3n.png" alt="bangkok-pataya" />
      </div>
      <div className={styles.textContainer}>
        {['Day 1', 'Day 2', 'Day 3', 'Day 4'].map((day, index) => (
          <div key={index} className={styles.itineraryContainer}>
            <div className={styles.textWrapper}>{day}</div>
            <p>
              {index === 0 && 'Arrive Bangkok - Check In'}
              {index === 1 && 'Bangkok - Pattaya, Honey Bee Farm, Great and Grand Sweet, Nongnooch Village, Laser Budha Hill, Pattaya Beach'}
              {index === 2 && 'Pattaya - Bangkok, Gems Gallery, Dried Food, Platinum Fashion Mall, Sungai Chaophraya, Wat Arun, Siam Mall & Sook Siam, Asiatique Night Market'}
              {index === 3 && 'Departure'}
            </p>
          </div>
        ))}
        <a href="pdf/bkk1.pdf" target="_blank" download>
          <div className={styles.btnDownloadContainer}>
            <div className={styles.textDownloadBtn}>Download Itinerary</div>
          </div>
        </a>
      </div>
      <div className={styles.termsContainer}>
        <div className={styles.textContainer2}>
          <div className={styles.textWrapper2}>Include</div>
          <div className={styles.flexContainer2}>
            <p>Asuransi Wisatawan</p>
            <p>Tour Guide/Pemandu</p>
            <p>Hotel Bintang 3</p>
            <p>Makan Sesuai Program</p>
          </div>
        </div>
        <div className={styles.textContainer2}>
          <div className={styles.textWrapper2}>Exclude</div>
          <div className={styles.flexContainer3}>
            <p>Tips Supir/Pemandu</p>
            <p>Tiket Pesawat PP</p>
          </div>
        </div>
        <a href="https://wa.me/628112602999" target="_blank">
          <div className={styles.btnInfoContainer}>
            <div className={styles.textWrapperBtn}>More Information</div>
          </div>
        </a>
      </div>
    </div>
  );
}
