import Image from "next/image";
import logo from "@/public/svg/logo.svg";
import SearchInput from "@/components/reviews/searchInput";
import Link from "next/link";
import UserMenu from "@/components/userMenu";

const Header = () => {
  return (
    <header className="fixed z-50 h-20 w-full bg-white shadow-md">
      <div className="m-auto flex h-20 max-w justify-between p-4">
        <div className="flex items-center gap-4">
          <Link href="/">
            <h1 className="cursor-pointer">
              <Image src={logo} alt="logo" width={150} />
            </h1>
          </Link>
          <Link href="/reviews" className="transition-colors hover:text-primary">
            코드리뷰
          </Link>
          <Link href="/mentors" className="transition-colors hover:text-primary">
            라이브 피드백
          </Link>
          <Link href="/detail/livefeedback" className="transition-colors hover:text-primary">
            나에게온 요청
          </Link>
          <Link href="/request/review" className="transition-colors hover:text-primary">
            질문하기
          </Link>
        </div>
        <div className="flex gap-2">
          <SearchInput />
          <UserMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
