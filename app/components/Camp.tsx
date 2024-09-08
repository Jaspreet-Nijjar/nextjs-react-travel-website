import Image from 'next/image';

const Camp = () => {
  return (
    <section className="bg-[url('/img-1.png')] bg-no-repeat bg-top-right py-32 text-white">
      <div className="flex gap-6 px-6">
        <Image
          src="folded-map.svg"
          alt="map"
          width={50}
          height={100}
          className="bg-green-500 rounded-full p-2"
        />

        <div>
          <h3 className="font-bold">Putuk Truno Camp</h3>
          <p className="text-sm">Prigen, Pasuruan</p>
        </div>
      </div>
    </section>
  );
};

export default Camp;
