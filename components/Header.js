import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";
import Link from "next/link";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left */}
      <div className="relative flex items-center h-10 hover:cursor-pointer my-auto">
        <Link href="/">
          <Image
            src="https://links.papareact.com/qd3"
            layout="fill"
            alt=""
            objectFit="contain"
            objectPosition="left"
          />
        </Link>
      </div>
      {/* completed */}
      {/* Middle */}
      <div className="flex items-center space-x-4 md:border-2 rounded-full py-2 md:shadow-sm ">
        <input
          placeholder="Start your search"
          className="flex-grow pl-5 bg-transparent border-none outline-none rounded-lg text-sm text-gray-600 placeholder-red-400"
          type="text"
        />
        <SearchIcon className="h-8 hidden md:inline-flex md:mx-2 text-white bg-red-400 rounded-full p-2 cursor-pointer  " />
      </div>

      {/* Right */}
      <div className="flex items-center justify-end text-gray-600 cursor-pointer">
        <div className="items-center flex p-2 space-x-2">
          <p className="hidden md:inline-flex font-semibold ">Become a host</p>
          <GlobeAltIcon className="h-6 " />
        </div>
        <div className="flex border-2 rounded-full p-2 space-x-2">
          <MenuIcon className="h-6" />
          {/* Profile icon */}
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
