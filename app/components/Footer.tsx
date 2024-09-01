import { FOOTER_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="p-6">
      <Link href="/">
        <Image
          src="hilink-logo.svg"
          alt="hilink"
          width={70}
          height={70}
          className="mb-4"
        />
      </Link>

      <div className="grid grid-cols-2">
        {FOOTER_LINKS.map((columns) => (
          <FooterColumn title={columns.title}>
            <ul className="flex flex-col gap-2">
              {columns.links.map((link) => (
                <Link key={link} href={link} className="text-gray-500 text-sm">
                  {link}
                </Link>
              ))}
            </ul>
          </FooterColumn>
        ))}
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div>
      <h4 className="font-bold text-lg">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
