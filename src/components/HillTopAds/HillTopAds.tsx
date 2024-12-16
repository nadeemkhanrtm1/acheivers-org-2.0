/* eslint-disable no-useless-escape */
import Script from 'next/script';
import React from 'react';

const HillTopAds = () => {
  return (
    <div>
      <Script id='hilltopads-script'>
        {`(function(dhl){
    var d = document,
        s = d.createElement('script'),
        l = d.scripts[d.scripts.length - 1];
    s.settings = dhl || {};
    s.src = "\/\/achingborder.com\/bvXzVcsTd.Gvli0SYfWTdAi\/YIWT5\/u\/ZkXZIi\/veomJ9auFZ\/UdlnksPlTrUP5\/MdDFgzwqMBDgkgtjNFTfkcwCOED\/AsxNMwAW";
    s.async = true;
    s.referrerPolicy = 'no-referrer-when-downgrade';
    l.parentNode.insertBefore(s, l);
    })({})`}
      </Script>
    </div>
  );
};

export default HillTopAds;
