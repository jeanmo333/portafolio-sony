import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Web developer",
      "Estudiante",
      "Autodidacta",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <img 
      className="relative rounded-full h-32 w-32 mx-auto object-cover"
      src="https://res.cloudinary.com/dcdr9quag/image/upload/v1667424752/photo1_uakhdy.jpg" 
      alt=""
      />
      <div className="z-20">
      <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[5px] pt-12">Soy Moril Jean-francois</h2>
      <h1 className="text-3xl lg:text-4xl font-semibold scroll-px-10 pt-5">
        <span className="mr-3">{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>

      <div className="pt-5">

        <Link href="#about"><button className="heroButton">About</button></Link>
    
        <Link href="#experience"><button className="heroButton">Experience</button></Link>
        
        <Link href="#skills"> <button className="heroButton">Skills</button></Link>
       
        <Link href="#projects"> <button className="heroButton">Projects</button></Link>
       
      </div>
      </div>
    </div>
  );
}
