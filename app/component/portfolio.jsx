import React from "react";

const Portfolio = ({ portfolio }) => {
  return (
    <section>
      {portfolio && (
        <div className="mt-8">
          <h2 className="mb-6 font-extrabold text-turquoise">Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map(({ name, description, image, url, buttonUrls }) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer">
                <div className="p-6 drop-shadow-md rounded-lg cursor-pointer">
                  <img
                    src={image}
                    alt={name}
                    className="mb-4 rounded-lg w-full h-40 object-cover"
                  />
                  <h3 className="mb-2">{name}</h3>
                  <p>{description}</p>
                </div>
                <div className="flex flex-row space-x-3">
                  {buttonUrls.map(({label, url}, index) => (
                    <a
                      key={`${name}-button-${index}`}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-gradient-to-r from-turquoise to-blue hover:bg-blue text-white font-bold py-2 px-4 rounded-full">
                        {label} 
                      </button>
                    </a>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};


export default Portfolio;
