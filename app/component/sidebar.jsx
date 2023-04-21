import React from "react";
import Image from "next/image";

import { Envelope, Instagram, Github, Twitter } from "./icons/index";

const Sidebar = ({ data }) => {
  const { name, role, education, contactLinks } = data;

  return (
    <div className="bg-dark-gray flex flex-col  content-between w-full h-auto sm:h-screen sm:justify-around sm:w-1/3 sm:fixed">
      <div className="text-white flex flex-col p-10 items-center">
        <Image
            priority
            width={300}
            height={300}
            className='rounded-full h-full mb-6'            src="/images/David.png"
            alt="David Raigoza.png"
            aria-label="David Raigoza"    
        />   
        <div>
        <h1 className='mb-2'>{name}</h1>
				<h2 className='mb-8'>{role}</h2>
				<p className='mb-2'>{education[0]}</p>
				<p className='mb-2'>{education[1]}</p>
        </div> 
        
        <div className='text-white text-center mb-4 mt-4 sm:mt-8'>
					<h3 className='mb-2'> CONTACT ME</h3>
          <div className='flex flex-row justify-center gap-2'>
            <a 
                href={contactLinks?.[0]} 
                aria-label="twitter link">
                  <Twitter className="TwIcon" size={32} />
                </a>
                <a href={contactLinks?.[1]} aria-label="instagram link">
                  <Instagram className="InstaIcon" size={32} />
                </a>
                <a href={contactLinks?.[2]} aria-label="github link">
                  <Github className="GitIcon" size={32} />
                </a>
                <a href={contactLinks?.[3]} aria-label="envelope link">
                  <Envelope className="icon-8" size={32} />
                </a>
            </div>      
        </div>
      </div>
    </div>
      

   
  );
};

export default Sidebar;
