import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

export default function Bkk4() {
  return (
    <div>
      {/* Iternary Start */}
      <div className={styles.pageContainer}>
        <div className={styles.imgContainer}>
          <img src="img/internasional/bkk4.png" alt="explore-bangkok" />
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
                <span>Wat Muang</span>
              </p>
              <p>
                <span>Baan Hun Lek Transformers Museum</span>
              </p>
              <p>
                <span>Ayuthaya</span>
              </p>
              <p>
                <span>Wat Phramahathat Buddha in the Tree</span>
              </p>
              <p>
                <span>Jodd Fairs Night Market</span>
              </p>
            </div>
          </div>
          <div className={styles.intenaryContainer}>
            <div className={styles.textWrapper}>Day 3</div>
            <div className={styles.flexContainer}>
              <p>
                <span>Honey Bee Farm</span>
              </p>
              <p>
                <span>Sungai Chaophraya</span>
              </p>
              <p>
                <span>Wat Arun (Temple of Dawn)</span>
              </p>
              <p>
                <span>Lilith Bang Lam Phu Restaurant</span>
              </p>
              <p>
                <span>Gems Gallery Museum of Stone</span>
              </p>
              <p>
                <span>Platinum Fashion Mall</span>
              </p>
              <p>
                <span>Asiatique Night Market</span>
              </p>
            </div>
          </div>
          <div className={styles.intenaryContainer}>
            <div className={styles.textWrapper}>Day 4</div>
            <p>Departure</p>
          </div>
          <a href="pdf/bkk4.pdf" target="_blank" download>
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
