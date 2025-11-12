import Image from "next/image";
import Umbra from "../assets/umbra.svg";

export default function Logo() {
  return (
    <Image
      src={Umbra}
      alt="Umbra"
      width={240}
      height={240}
      priority
      className="logo-image"
      style={{
        filter:
          "drop-shadow(0 0 30px rgba(100, 100, 100, 0.5)) drop-shadow(0 20px 60px rgba(0, 0, 0, 0.8))",
        animation: "glow 6s ease-in-out infinite",
      }}
    />
  );
}
