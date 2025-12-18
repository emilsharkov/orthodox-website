import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full h-[70vh] relative">
      <img
        className="w-full h-full object-cover"
        src="/more-spacious-than-the-heavens.jpg"
        alt="Hero"
      />
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <div className="bg-black/40 text-white px-6 py-4 text-center">
          Welcome message or CTA can go here
        </div>
      </div>
    </div>
  );
};

export default Hero;
