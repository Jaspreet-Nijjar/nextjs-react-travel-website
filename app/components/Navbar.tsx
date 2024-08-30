import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <Image
        src="/hilink-logo.svg"
        alt="travel camp"
        width={100}
        height={100}
      />
    </nav>
  );
};

export default Navbar;
