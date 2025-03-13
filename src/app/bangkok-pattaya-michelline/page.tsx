import React from 'react';
import styles from './styles.module.css';
export default function Page() {
  return (
    <>
      {/* Itinerary Start */}
      <div className={styles.pageContainer}>
        <div className={styles.imgContainer}>
          <img src="img/internasional/bangkok-pattaya-micheline.png" alt="bangkok-pataya" />
        </div>
        <div className={styles.textContainer}>
          {[
            { day: 'Day 1', activities: ['Arrive Bangkok - Check In'] },
            {
              day: 'Day 2',
              activities: ['Bangkok - Pattaya', 'Honey Bee Farm', 'Great and Grand Sweet', 'Nongnooch Village', 'Laser Budha Hill', 'Pattaya Beach'],
            },
            {
              day: 'Day 3',
              activities: ['Pattaya - Bangkok', 'Gems Gallery', 'Dried Food', 'Platinum Fashion Mall', 'Sungai Chaophraya', 'Wat Arun', 'Siam Mall & Sook Siam', 'Asiatique Night Market'],
            },
            { day: 'Day 4', activities: ['Departure'] },
          ].map((item, index) => (
            <div key={index} className={styles.intenaryContainer}>
              <div className={styles.textWrapper}>{item.day}</div>
              <div className={styles.flexContainer}>
                {item.activities.map((activity, i) => (
                  <p key={i}>
                    <span>
                      {activity} <br />
                    </span>
                  </p>
                ))}
              </div>
            </div>
          ))}
          <a href="pdf/bkk1.pdf" target="_blank" download>
            <div className={styles.btnDownloadContainer}>
              <div className={styles.textDownloadBtn}>Download Itinerary</div>
            </div>
          </a>
        </div>
      </div>
      {/* Itinerary Ends */}

      {/* Terms Start */}
      <div className={styles.termsContainer}>
        {[
          {
            title: 'Include',
            items: ['Asuransi Wisatawan', 'Tour Guide/Pemandu', 'Hotel Bintang 3', 'Makan Sesuai Program'],
          },
          {
            title: 'Exclude',
            items: ['Tips Supir/Pemandu', 'Tiket Pesawat PP'],
          },
        ].map((section, index) => (
          <div key={index} className={styles.textContainer2}>
            <div className={styles.textWrapper2}>{section.title}</div>
            <div className={styles.flexContainer2}>
              {section.items.map((item, i) => (
                <p key={i}>
                  {item} <br />
                </p>
              ))}
            </div>
          </div>
        ))}
        <a href="https://wa.me/628112602999" target="_blank">
          <div className={styles.btnInfoContainer}>
            <div className={styles.textWrapperBtn}>More Information</div>
          </div>
        </a>
      </div>
      {/* Terms Ends */}
    </>
  );
}
