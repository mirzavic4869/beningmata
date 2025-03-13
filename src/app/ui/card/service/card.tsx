import Link from 'next/link';
import React from 'react';

export const CardService = () => {
  return (
    <div>
      <Link href="#tourbmt" className="card-frame-tour">
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <div className="rectangle-card"></div>
            <div className="text-container">
              <div className="search-wrapper">
                <p>Search Tour & Places Hire our most popular destination</p>
              </div>
              <div className="text-wrapper">Show</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
