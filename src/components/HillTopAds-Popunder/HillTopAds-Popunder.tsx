/* eslint-disable no-useless-escape */
import Script from 'next/script';
import React from 'react';

const HillTopAdsPopunder = () => {
  return (
    <div>
      <Script id='hilltopads-popunder'>
        {`
      (function(vcnbh){
      var d = document,
          s = d.createElement('script'),
          l = d.scripts[d.scripts.length - 1];
      s.settings = vcnbh || {};
      s.src = "\/\/rusty-platform.com\/cqDR9.6obb2W5ul\/SpWdQp9aNDTYkVwUOQDQAty-OoCa0\/1oOhTUA-4\/MIDqIU5O";
      s.async = true;
      s.referrerPolicy = 'no-referrer-when-downgrade';
      l.parentNode.insertBefore(s, l);
      })({})
      
      `}
      </Script>
    </div>
  );
};

export default HillTopAdsPopunder;
