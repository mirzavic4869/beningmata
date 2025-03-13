import React from 'react';
import styles from './styles.module.css';

export default function Bkk8() {
  return (
    <div>
      {/* Itinerary Start */}
      <div className={styles.pageContainer}>
        <div className={styles.imgContainer}>
          <img src="img/internasional/bkk8.png" alt="explore-bangkok" />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.intenaryContainer}>
            <div className={styles.textWrapper}>Day 1</div>
            <p>Arrive Bangkok - Check In</p>
          </div>
          <div className={styles.intenaryContainer}>
            <div className={styles.textWrapper}>Day 2</div>
            <div className={styles.flexContainer}>
              <p>
                <span>Mae Khachan Hot Spring</span>
              </p>
              <p>
                <span>White Temple (Wat Rong Khun)</span>
              </p>
              <p>
                <span>Blue Temple (Wat Rong Sue Ten)</span>
              </p>
              <p>
                <span>Black House Art Museum</span>
              </p>
              <p>
                <span>Long Neck Village</span>
              </p>
            </div>
          </div>
          <div className={styles.intenaryContainer}>
            <div className={styles.textWrapper}>Day 3</div>
            <div className={styles.flexContainer}>
              <p>
                <span>King - Queen Pagoda</span>
              </p>
              <p>
                <span>Kew Mea Pan</span>
              </p>
              <p>
                <span>Wachiratharn Waterfall</span>
              </p>
              <p>
                <span>Hmong Hill Market</span>
              </p>
            </div>
          </div>
          <div className={styles.intenaryContainer}>
            <div className={styles.textWrapper}>Day 4</div>
            <p>Departure</p>
          </div>
          <a href="pdf/bkk8.pdf" target="_blank" download>
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
