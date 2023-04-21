import React from "react";

export const Envelope = ({className, size}) => 
  <a className={className} href="#" title="Email">
    <div className="ir">
      <svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet" width={size} height={size}>
        <path d="M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z"></path>
      </svg>
    </div>
  </a>

