import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <Link href="/">
        <Image src="hilink-logo.svg" alt="hilink" width={50} height={50} />
      </Link>
    </footer>
  );
};

export default Footer;
