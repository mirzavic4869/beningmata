import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

export default function Bkk1() {
  return (
    <>
      {/* <!-- Iternary Start --> */}
      <div className={styles.pagecontainer}>
        <div className={styles.imgcontainer}>
          <img src="/assets/images/internasional/bkk1.png" alt="bangkok-pataya" />
        </div>
        <div className={styles.textcontainer}>
          <div className={styles.intenarycontainer}>
            <div className={styles.textwrapper}>Day 1</div>
            <p>Arrive Bangkok - Check In</p>
          </div>
          <div className={styles.intenarycontainer}>
            <div className={styles.textwrapper}>Day 2</div>
            <div className={styles.flexcontainer}>
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
          <div className={styles.intenarycontainer}>
            <div className={styles.textwrapper}>Day 3</div>
            <div className={styles.flexcontainer}>
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
          <div className={styles.intenarycontainer}>
            <div className={styles.textwrapper}>Day 4</div>
            <p>Depature</p>
          </div>
          <Link href="/assets/pdf/bkk1.pdf" target="_blank" download>
            <div className={styles.btndownloadcontainer}>
              <div className={styles.textdownloadbtn}>Download Itinerary</div>
            </div>
          </Link>
        </div>
      </div>
      {/* <!-- Iternary Ends --> */}
      {/* <!-- Terms Start --> */}
      <div className={styles.termscontainer}>
        <div className={styles.textcontainer2}>
          <div className={styles.textwrapper2}>Include</div>
          <div className={styles.flexcontainer2}>
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
        <div className={styles.textcontainer2}>
          <div className={styles.textwrapper2}>Exclude</div>
          <div className={styles.flexcontainer3}>
            <p>
              Tips Supir/Pemandu <br />
            </p>
            <p>
              Tiket Pesawat PP <br />
            </p>
          </div>
        </div>
        <a href="https://wa.me/6285117289188" target="_blank">
          <div className={styles.btninfocontainer}>
            <div className={styles.textwrapperbtn}>More Information</div>
          </div>
        </a>
      </div>
      {/* <!-- Terms Ends --> */}
    </>
  );
}
