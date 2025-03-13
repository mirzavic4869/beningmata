import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
export default function Bkk3() {
  return (
    <div>
      {/* <!-- Iternary Start --> */}
      <div className={styles.pagecontainer}>
        <div className={styles.imgcontainer}>
          <img src="/assets/images/internasional/bkk3.png" alt="explore-bangkok" />
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
                  Gems Gallery Museum of Stone <br />
                </span>
              </p>
              <p>
                <span>
                  {' '}
                  Dried Food <br />
                </span>
              </p>
              <p>
                <span>
                  {' '}
                  Platinum shopping Mall <br />
                </span>
              </p>
              <p>
                <span>
                  Asiatique Riverfront Night Market <br />
                </span>
              </p>
            </div>
          </div>
          <div className={styles.intenarycontainer}>
            <div className={styles.textwrapper}>Day 3</div>
            <div className={styles.flexcontainer}>
              <p>
                <span>
                  Erawadee Herb shop <br />
                </span>
              </p>
              <p>
                <span>
                  {' '}
                  Siam Premium Outlet
                  <br />
                </span>
              </p>
              <p>
                <span>
                  Central World <br />
                </span>
              </p>
              <p>
                <span>
                  Big C Supermarket <br />
                </span>
              </p>
              <p>
                <span>
                  Siam Square Walking Street <br />
                </span>
              </p>
            </div>
          </div>
          <div className={styles.intenarycontainer}>
            <div className={styles.textwrapper}>Day 4</div>
            <p>Depature</p>
          </div>
          <Link href="/assets/pdf/bkk3.docx" target="_blank" download>
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
        <a href="https://wa.me/628112602999" target="_blank">
          <div className={styles.btninfocontainer}>
            <div className={styles.textwrapperbtn}>More Information</div>
          </div>
        </a>
      </div>
      {/* <!-- Terms Ends --> */}
    </div>
  );
}
