import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Navbar = () => {
  return (
    <div className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Image src="/assets/images/Logo BMT New Landscape.png" alt="bmt-logo" width={100} height={80} />
      </div>

      {/* Menu Navigation */}
      <div className="navbar-dir">
        <Link href="#">HOME</Link>
        <Link href="#tourbmt">TOUR</Link>
        <Link href="https://wa.me/6285117289188" target="_blank">
          FLIGHT
        </Link>
        <Link href="https://wa.me/6285117289188" target="_blank">
          HOTELS
        </Link>
        <Link href="https://wa.me/6285117289188" target="_blank">
          MORE
        </Link>
      </div>

      {/* Login & Register Buttons */}
      <div className="btn-login">
        <div className="btn-container">
          <Link href="/login" className="login-wrapper">
            <div className="login">Log In</div>
          </Link>
          <Link href="/register" className="signup-wrapper">
            <div className="signup">Sign Up</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
