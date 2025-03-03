import Image from 'next/image';
import ShipBackground from '../../../public/assets/ShipBackground.png';

export default function Ship() {
  return (
    <section className="w-full h-auto flex items-center justify-center overflow-hidden relative z-10">
      <div className="w-full h-auto max-h-screen relative">
        <Image
          src={ShipBackground}
          alt="Ship"
          width={1920}
          height={1080}
          className="w-full h-auto max-h-screen object-cover object-center animate-bounce"
          placeholder="blur"
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deepNavyBlue to-transparent"></div>
      </div>
    </section>
  );
}