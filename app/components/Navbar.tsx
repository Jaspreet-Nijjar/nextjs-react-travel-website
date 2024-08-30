import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <Image src="/hilink-logo.svg" alt="travel camp" width={70} height={70} />

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
