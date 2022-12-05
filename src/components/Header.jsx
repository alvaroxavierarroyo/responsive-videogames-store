import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="h-[7.5vh] lg:h-[10vh] text-[#F9FAFB] py-4 px-10 flex items-center justify-between bg-[#161b23] z-40">
      {/*Mobile*/}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden text-2xl"
      >
        <AiOutlineMenu />
      </button>
      <div
        className={`fixed left-0 bg-[#161b23] w-full h-full z-50 transition-all ${
          showMenu ? "top-0" : "-top-full"
        }`}
      >
        <button onClick={() => setShowMenu(!showMenu)} className="text-3xl p-4">
          <AiOutlineClose />
        </button>
        <ul className="mt-20">
          <li>
            <a href="#" className="text-3xl block text-center p-4">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-3xl block text-center p-4">
              Streams
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-3xl text-[#E58D27] block text-center p-4"
            >
              Game Store
            </a>
          </li>
          <li>
            <a href="#" className="text-3xl block text-center p-4">
              News
            </a>
          </li>
        </ul>
      </div>

      <ul className=" hidden lg:flex items-center gap-6">
        <li>
          <a href="#" className="hover:text-[#ed9c3e] transition-colors">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#ed9c3e] transition-colors">
            Streams
          </a>
        </li>
        <li>
          <a href="#" className="text-[#E58D27] transition-colors">
            Game Store
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#ed9c3e] transition-colors">
            News
          </a>
        </li>
      </ul>
      {/*User Menu*/}
      <ul className="flex item-center gap-6 text-xl">
        <li>
          <button className="hover:text-[#ed9c3e] transition-colors">
            <ion-icon name="cart-outline"></ion-icon>
          </button>
        </li>
        <li>
          <button className="hover:text-[#ed9c3e] transition-colors">
            <ion-icon name="heart-outline"></ion-icon>
          </button>
        </li>
        <li>
          <button>
            <img
              src="https://img.freepik.com/foto-gratis/retrato-joven-confiado-gafas_171337-4841.jpg"
              className="w-8 h-8 object-cover rounded-full ring-2 ring-[#E58D27]"
            />
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
