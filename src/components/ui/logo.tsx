import Image from "next/image";
import Link from "next/link";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className="flex gap-2 items-center">
      <Image src={"/mobiius-logo.png"} alt="logo" height={40} width={40} />
      <p className={`uppercase ${className}`}>mobiius</p>
    </Link>
  );
};

export default Logo;
