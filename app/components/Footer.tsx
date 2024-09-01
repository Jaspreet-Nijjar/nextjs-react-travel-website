import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row md:flex-wrap md:justify-around md:gap-12 p-6">
      <Link href="/">
        <Image
          src="hilink-logo.svg"
          alt="hilink"
          width={70}
          height={70}
          className="mb-4"
        />
      </Link>

      <div className="flex flex-col md:flex-row md:gap-14">
        {FOOTER_LINKS.map((columns) => (
          <FooterColumn title={columns.title}>
            <ul className="flex flex-col gap-2 mb-4">
              {columns.links.map((link) => (
                <Link key={link} href={link} className="text-gray-500 text-sm">
                  {link}
                </Link>
              ))}
            </ul>
          </FooterColumn>
        ))}
      </div>

      <div>
        <FooterColumn title={FOOTER_CONTACT_INFO.title}>
          <ul>
            {FOOTER_CONTACT_INFO.links.map((contact) => (
              <p className="mb-2">
                {contact.label}:{' '}
                <span className="font-bold">{contact.value}</span>
              </p>
            ))}
          </ul>
        </FooterColumn>
      </div>

      <div>
        <FooterColumn title={SOCIALS.title}>
          <ul className="flex gap-2">
            {SOCIALS.links.map((link) => (
              <Link href="/">
                <Image src={link} alt={link} width={24} height={24} />
              </Link>
            ))}
          </ul>
        </FooterColumn>
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
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
