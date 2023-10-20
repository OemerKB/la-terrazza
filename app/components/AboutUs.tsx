// components/AboutUs.tsx

import Link from 'next/link';

const AboutUs: React.FC = () => {
  return (
    <div className="about-us">
      <img
        src="../assets/restlat.jpg" 
        alt="AboutUs"
      />
      <p>
        Willkommen!
      </p>
    </div>
  );
};

export default AboutUs;
