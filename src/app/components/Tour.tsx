import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Tour = () => {
  return (
    <>
      <div className="title-tour">
        <div className="text-liburan" id="tourbmt">
          MAU LIBURAN KEMANA?
        </div>
      </div>
      <div className="frame-domestik">
        <Link href="../domestik">
          <Image className="domestik-img" src="/assets/images/domestik.png" alt="domestik" width={800} height={600} quality={80} />
        </Link>
      </div>
      <div className="frame-international">
        <Link href="../internasional">
          <Image src="/assets/images/Internasional.png" alt="international" className="international-img" width={800} height={600} quality={80} />
        </Link>
      </div>
    </>
  );
};
