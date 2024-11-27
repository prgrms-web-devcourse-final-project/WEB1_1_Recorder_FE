import Image from 'next/image';

const Footer = () => (
  <footer className="items-center justify-between p-[40px] border-t-2 border-[#1A202C] bg-gray-800 text-white">
    <Image className="mb-[33px]" src="/logo.png" alt="Revup" width={120} height={40} />
    <div className="flex justify-between">
      <p>© 2024 Revup. All rights reserved.</p>
      <div className="flex">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#A0ABC0] cursor-pointer"
        >
          github
        </a>
        <a
          href="#contact"
          className="text-[#A0ABC0] ml-[32px] cursor-pointer"
        >
          Contact
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
