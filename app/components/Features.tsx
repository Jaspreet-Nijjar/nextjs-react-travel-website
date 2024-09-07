import Image from 'next/image';

const Features = () => {
  return (
    <section>
      <Image src="/camp.svg" alt="camp" width={50} height={100} />
      <h1 className="text-4xl font-bold">Our Features</h1>
    </section>
  );
};

export default Features;
