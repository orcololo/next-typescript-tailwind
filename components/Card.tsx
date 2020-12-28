import Image from "next/image";
import Link from "next/link";

interface CardProps {
  href: string;
  imgSrc: string;
}

const Card: React.FC<CardProps> = ({ href, imgSrc }) => {
  return (
    <Link href={href}>
      <div className="relative h-20 md:h-40 bg-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition">
        <Image src={imgSrc} layout="fill" />
      </div>
    </Link>
  );
};

export default Card;
