import React from 'react';
import styles from './styles.module.css';
export default function Page() {
  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.imgContainer}>
          <img src="img/internasional/beijing-shanghai.png" alt="bangkok-pataya" />
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
                <span>
                  Bangkok - Pattaya <br />
                </span>
              </p>
              <p>
                <span>
                  Honey Bee Farm <br />
                </span>
              </p>
              <p>
                <span>
                  Great and Grand Sweet <br />
                </span>
              </p>
              <p>
                <span>
                  Nongnooch Village <br />
                </span>
              </p>
              <p>
                <span>
                  Laser Budha Hill <br />
                </span>
              </p>
              <p>
                <span>
                  Pattaya Beach <br />
                </span>
              </p>
            </div>
          </div>
          <div className={styles.itineraryContainer}>
            <div className={styles.textWrapper}>Day 3</div>
            <div className={styles.flexContainer}>
              <p>
                <span>
                  Pattaya - Bangkok <br />
                </span>
              </p>
              <p>
                <span>
                  Gems Gallery <br />
                </span>
              </p>
              <p>
                <span>
                  Dried Food <br />
                </span>
              </p>
              <p>
                <span>
                  Platinum Fashion Mall <br />
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
                  Siam Mall & Sook Siam <br />
                </span>
              </p>
              <p>
                <span>
                  Asiatique Night Market <br />
                </span>
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

        {/* Terms Section */}
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
          <a href="https://wa.me/628112602999" target="_blank" rel="noopener noreferrer">
            <div className={styles.btnInfoContainer}>
              <div className={styles.textWrapperBtn}>More Information</div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
