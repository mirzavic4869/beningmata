import Image from 'next/image';
import React from 'react';

export const Footer = () => {
  return (
    <div className="footer-container">
      <Image src="/assets/images/Logo BMT New Landscape Putih.png" alt="bmt-logo" width={100} height={80} />
      <div className="text-footer">
        <p className="office-solo">
          <span className="text-head-footer">
            Office Solo <br />
          </span>
          <span className="text-p-footer">
            Jl Adi Sumarmo, Ruko Galeria Blok B.09 - 10 <br />
            Ngemplak, Solo, Jawa Tengah - 57375 <br />
            Telp : 0811 2602 999
          </span>
        </p>
        <p className="office-jakarta">
          <span className="text-head-footer">
            Office Jakarta <br />
          </span>
          <span className="text-p-footer">
            Jl H. Nahwi Raya No.3B, Gandaria Selatan <br />
            Cilandak, Jakarta Selatan - 12420 <br />
            Telp : 0811 2959 588
          </span>
        </p>
      </div>
      <div className="social-container">
        <a href="https://www.facebook.com/beningmatatour/" target="_blank">
          <Image src="/assets/images/facebook.png" alt="" className="social-icon" width={40} height={40} />
        </a>
        <a href="https://www.instagram.com/beningmata.tourandtravel/" target="_blank">
          <Image src="/assets/images/instagram.png" alt="" className="social-icon" width={40} height={40} />
        </a>
        <a href="https://www.tiktok.com/@beningmata.tourandtravel" target="_blank">
          <Image src="/assets/images/tiktok.png" alt="" className="social-icon" width={40} height={40} />
        </a>
        <a href="https://id.linkedin.com/company/bening-mata-tour-and-travel" target="_blank">
          <Image src="/assets/images/linkedin.png" alt="" className="social-icon" width={40} height={40} />
        </a>
      </div>
    </div>
  );
};
