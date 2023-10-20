import Image from 'next/image'
import Button from './button'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
       
        <h1 className="bold-52 lg:bold-88">Willkommen bei La Terrazza Naunheim</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
        Es erwartet Sie in edlem Ambiente mit Wohlfühlatmosphäre eine perfekte Symbiose von köstlichen Speisen und edlen Tropfen– Genuss in Vollendung!        </p>

        <div className="my-11 flex flex-wrap gap-5">

          <p className="bold-16 lg:bold-20 text-blue-70">

          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="Über Uns" 
            variant="btn_green" 
          />
          <Button 
            type="button" 
            title="Speisekarte" 
            variant="btn_white_text" 
          />
        </div>
      </div>


    </section>
  )
}

export default Hero