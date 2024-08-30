import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between p-8">
      <Image src="/hilink-logo.svg" alt="travel camp" width={70} height={70} />

      <div className="hidden lg:flex gap-12">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className="text-gray-500 hover:font-bold transition-all"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Image
        src="/menu.svg"
        alt="hamburger menu"
        width={30}
        height={30}
        className="max-lg:block hidden cursor-pointer"
      />
    </nav>
  );
};

export default Navbar;
