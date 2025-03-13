import React from 'react';
import styles from './styles.module.css';
export default function Page() {
  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.imgContainer}>
          <img src="img/internasional/eropa-9days.png" alt="eropa-9days" />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.intenaryContainer}>
            <div className={styles.textWrapper}>Day 1</div>
            <p>Arrive in Europe - Check In</p>
          </div>
          <div className={styles.intenaryContainer}>
            <div className={styles.textWrapper}>Day 2</div>
            <div className={styles.flexContainer}>
              <p>
                <span>
                  City Tour Paris <br />
                </span>
              </p>
              <p>
                <span>
                  Eiffel Tower Visit <br />
                </span>
              </p>
              <p>
                <span>
                  Louvre Museum <br />
                </span>
              </p>
              <p>
                <span>
                  Seine River Cruise <br />
                </span>
              </p>
            </div>
          </div>
          <div className={styles.intenaryContainer}>
            <div className={styles.textWrapper}>Day 3</div>
            <div className={styles.flexContainer}>
              <p>
                <span>
                  Travel to Amsterdam <br />
                </span>
              </p>
              <p>
                <span>
                  Canal Tour <br />
                </span>
              </p>
              <p>
                <span>
                  Anne Frank House <br />
                </span>
              </p>
            </div>
          </div>
          <div className={styles.intenaryContainer}>
            <div className={styles.textWrapper}>Day 4</div>
            <p>Departure</p>
          </div>
          <a href="pdf/eropa9days.pdf" target="_blank" download>
            <div className={styles.btnDownloadContainer}>
              <div className={styles.textDownloadBtn}>Download Itinerary</div>
            </div>
          </a>
        </div>
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
          <a href="https://wa.me/628112602999" target="_blank">
            <div className={styles.btnInfoContainer}>
              <div className={styles.textWrapperBtn}>More Information</div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
