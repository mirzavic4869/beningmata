import React from 'react';
import styles from './styles.module.css';
export default function Bkk2() {
  return (
    <div>
      {/* <!-- Iternary Start --> */}
      <div className={styles.pageContainer}>
        <div className={styles.imgContainer}>
          <img src="/assets/images/internasional/bkk2.png" alt="explore-bangkok" />
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
                <span>
                  Bangkok
                  <br />
                </span>
              </p>
              <p>
                <span>
                  Honey Bee Farm <br />
                </span>
              </p>
              <p>
                <span>
                  Sungai Chaophraya <br />
                </span>
              </p>
              <p>
                <span>
                  Wat Arun <br />
                </span>
              </p>
              <p>
                <span>
                  Gems Galery Museum of Stone <br />
                </span>
              </p>
              <p>
                <span>
                  Platinum Shopping Mall <br />
                </span>
              </p>
              <p>
                <span>
                  Asiatique Night Market <br />
                </span>
              </p>
            </div>
          </div>
          <div className={styles.intenaryContainer}>
            <div className={styles.textWrapper}>Day 3</div>
            <div className={styles.flexContainer}>
              <p>
                <span>
                  Depature
                  <br />
                </span>
              </p>
            </div>
          </div>
          <a href="/assets/pdf/bkk2.pdf" target="_blank" download>
            <div className={styles.btnDownloadContainer}>
              <div className={styles.textDownloadBtn}>Download Itinerary</div>
            </div>
          </a>
        </div>
      </div>
      {/* <!-- Iternary Ends --> */}
      {/* <!-- Terms Start --> */}
      <div className={styles.termsContainer}>
        <div className={styles.textContainer2}>
          <div className={styles.textWrapper2}>Include</div>
          <div className={styles.flexContainer2}>
            <p>
              Asuransi Wisatawan <br />
            </p>
            <p>
              Tour Guide/Pemandu <br />
            </p>
            <p>
              Hotel Bintang 3 <br />
            </p>
            <p>
              Makan Sesuai Program <br />
            </p>
          </div>
        </div>
        <div className={styles.textContainer2}>
          <div className={styles.textWrapper2}>Exclude</div>
          <div className={styles.flexContainer3}>
            <p>
              Tips Supir/Pemandu <br />
            </p>
            <p>
              Tiket Pesawat PP <br />
            </p>
          </div>
        </div>
        <a href="https://wa.me/6285117289188" target="_blank">
          <div className={styles.btnInfoContainer}>
            <div className={styles.textWrapperBtn}>More Information</div>
          </div>
        </a>
      </div>
      {/* <!-- Terms Ends --> */}
    </div>
  );
}
