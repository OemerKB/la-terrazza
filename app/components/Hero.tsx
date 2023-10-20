import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex">
      <div className="w-1/2 p-4">
      <h1 className="bold-52 lg:bold-88">Willkommen bei La Terrazza Naunheim</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
        Es erwartet Sie in edlem Ambiente mit Wohlfühlatmosphäre eine perfekte Symbiose von köstlichen Speisen und edlen Tropfen– Genuss in Vollendung!        </p>
      </div>

      <div className="w-1/2 p-4">
        <img src="/restlat.jpg" alt="Bildbeschreibung" width={600} height={400}/>
      </div>
    </div>
  );
};

export default Hero;
