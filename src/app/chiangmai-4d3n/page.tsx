import React from 'react';
import styles from './styles.module.css';

export default function Chiangmai() {
  return (
    <div>
      {/* Itinerary Start */}
      <div className={styles.pageContainer}>
        <div className={styles.imgContainer}>
          <img src="img/internasional/chiangmai-4d3n.png" alt="bangkok-pattaya" />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.itineraryContainer}>
            <div className={styles.textWrapper}>Day 1</div>
            <p>Arrive Bangkok - Check In</p>
          </div>
          <div className={styles.itineraryContainer}>
            <div className={styles.textWrapper}>Day 2</div>
            <div className={styles.flexContainer}>
              <p>
                <span>Bangkok - Pattaya</span>
              </p>
              <p>
                <span>Honey Bee Farm</span>
              </p>
              <p>
                <span>Great and Grand Sweet</span>
              </p>
              <p>
                <span>Nongnooch Village</span>
              </p>
              <p>
                <span>Laser Buddha Hill</span>
              </p>
              <p>
                <span>Pattaya Beach</span>
              </p>
            </div>
          </div>
          <div className={styles.itineraryContainer}>
            <div className={styles.textWrapper}>Day 3</div>
            <div className={styles.flexContainer}>
              <p>
                <span>Pattaya - Bangkok</span>
              </p>
              <p>
                <span>Gems Gallery</span>
              </p>
              <p>
                <span>Dried Food</span>
              </p>
              <p>
                <span>Platinum Fashion Mall</span>
              </p>
              <p>
                <span>Sungai Chao Phraya</span>
              </p>
              <p>
                <span>Wat Arun</span>
              </p>
              <p>
                <span>Siam Mall & Sook Siam</span>
              </p>
              <p>
                <span>Asiatique Night Market</span>
              </p>
            </div>
          </div>
          <div className={styles.itineraryContainer}>
            <div className={styles.textWrapper}>Day 4</div>
            <p>Departure</p>
          </div>
          <a href="pdf/bkk1.pdf" target="_blank" download>
            <div className={styles.btnDownloadContainer}>
              <div className={styles.textDownloadBtn}>Download Itinerary</div>
            </div>
          </a>
        </div>
      </div>

      {/* Terms Start */}
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
