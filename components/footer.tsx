import Image from "next/image";

const Footer = () => (
  <footer className="flex h-60 flex-col items-start justify-center gap-8 bg-gray-800 p-12 text-white">
    <Image className="mb-[33px]" src="/img/logo.png" alt="Revup" width={120} height={40} />
    <div className="flex w-full justify-between">
      <p>© 2024 Revup. All rights reserved.</p>
      <div className="flex">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-[#A0ABC0]"
        >
          github
        </a>
        <a href="#contact" className="ml-[32px] cursor-pointer text-[#A0ABC0]">
          Contact
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
