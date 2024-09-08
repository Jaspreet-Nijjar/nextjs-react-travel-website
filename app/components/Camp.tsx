import Image from 'next/image';

const Camp = () => {
  return (
    <section>
      <div>
        <Image
          src="folded-map.svg"
          alt="map"
          width={50}
          height={100}
          className="bg-green-500 rounded-full p-2"
        />
      </div>
    </section>
  );
};

export default Camp;
