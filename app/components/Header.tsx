// components/Header.tsx

import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-yellow-400 p-8">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between gap-12">

          <Link href="/">Home</Link>
          <Link href="">Speisekarte</Link>
          <Link href="">Hotel</Link>
          <Link href="">Gallerie</Link>
          <Link href="">Kontakt</Link>
          
        </nav>
      </div>
    </header>
  );
};

export default Header;
