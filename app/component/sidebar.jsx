import React from "react";
import Image from "next/image";

import { Envelope, Instagram, Github, Twitter, Camera, Newspaper } from "./icons/index";

const Sidebar = ({ data }) => {
  const { name, role, education, contactLinks } = data;

  return (
    <div className="bg-black flex-col  content-between w-full h-auto sm:h-screen sm:justify-around sm:w-1/3 sm:fixed">
      <div className="text-white flex flex-col p-10 items-center">
        <Image
            priority
            width={120}
            height={120}
            className='rounded-full w-15 h-15 mb-1'            
            src="/images/David.png"
            alt="David Raigoza.png"
            aria-label="David Raigoza"    
        />  
<div className="flex flex-rox space-x-3">
<a href="https://www.websiteA.com">
  <button className="bg-gradient-to-r from-turquoise to-blue hover:bg-blue text-white font-bold py-4 px-4 rounded-full flex items-center space-x-2">
    <Camera/>
  </button>
</a>

<a href="https://www.eafit.edu.co/agencia-noticias/historico-noticias/2013/noticias-junio/Paginas/egresados-david-raigoza-lapiz-acero.aspx">
  <button className="bg-gradient-to-r from-turquoise to-blue hover:bg-blue text-white font-bold py-4 px-4 rounded-full flex items-center space-x-2">
    <Newspaper/>
  </button>
</a>
</div>
 
        <div>
        <h1 className='mb-2 font-extrabold text-5xl text-white'>{name}</h1>
				<h2 className='mb-8'>{role}</h2>
				<p className='mb-2'>{education[0]}</p>
				<p className='mb-2'>{education[1]}</p>
        </div> 

        
        <div className='text-white text-center mb-4 mt-4 sm:mt-8'>
					<h3 className='mb-2'>Contact Me</h3>
          <div className=' flex flex-row justify-center gap-2'>            
            <a 
                href={contactLinks?.[0]} 
                aria-label="twitter link">
                  
                  <Twitter className="TwIcon fill-blue" size={32} />
                </a>
                <a href={contactLinks?.[1]} aria-label="instagram link">
                  <Instagram className="InstaIcon fill-blue" size={32} />
                </a>
                <a href={contactLinks?.[2]} aria-label="github link">
                  <Github className="GitIcon fill-blue" size={32} />
                </a>
                <a href={contactLinks?.[3]} aria-label="envelope link">
                  <Envelope className="icon-8 fill-blue" size={32} />
                </a>
            </div>      
        </div>
      </div>
    </div>
      

   
  );
};

export default Sidebar;
