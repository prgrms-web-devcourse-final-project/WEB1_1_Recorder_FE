import Image from "next/image";
import logo from "@/public/svg/logo-footer.svg";

const Footer = () => (
  <footer className="h-60 bg-gray-800 text-white">
    <div className="m-auto flex h-60 max-w flex-col items-start justify-center gap-8">
      <Image className="mb-[33px]" src={logo} alt="Revup" width={120} height={40} />
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
    </div>
  </footer>
);

export default Footer;
