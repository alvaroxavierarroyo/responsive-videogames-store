import React, { useState } from "react";
import "./index.css";
import { BiFilter } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

export const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <div
        className={`w-[80%] md:w-[40%] fixed lg:static top-0 ${
          showSidebar ? "left-0" : "-left-full"
        } lg:w-80 h-full overflow-y-hidden text-gray-400 transition-all bg-[#161b23] p-4 lg:p-0 shadow-2xl l`}
      >
        {/*Search*/}
        <div className="bg-[#362C29]/50 rounded-xl p-4 mb-4">
          <h4 className="mb-1 text-white text-lg">Categories</h4>
          <div className="flex flex-col gap-2">
            <div className="flex-items-center gap-2">
              <input type="checkbox" id="Indie" className="accent-[#E58D27]" />
              <label htmlFor="Indie"> Indie</label>
            </div>
            <div className="flex-items-center gap-2">
              <input
                type="checkbox"
                id="Adventure"
                className="accent-[#E58D27]"
              />
              <label htmlFor="Adventure"> Adventure</label>
            </div>
            <div className="flex-items-center gap-2">
              <input type="checkbox" id="MMO" className="accent-[#E58D27]" />
              <label htmlFor="MMO"> MMO</label>
            </div>
            <div className="flex-items-center gap-2">
              <input
                type="checkbox"
                id="Casual Game"
                className="accent-[#E58D27]"
              />
              <label htmlFor="Casual Game"> Casual Game</label>
            </div>
            <div className="flex-items-center gap-2">
              <input
                type="checkbox"
                id="Strategy"
                className="accent-[#E58D27]"
              />
              <label htmlFor="Strategy"> Strategy</label>
            </div>
            <div className="flex-items-center gap-2">
              <input
                type="checkbox"
                id="Game Simulator"
                className="accent-[#E58D27]"
              />
              <label htmlFor="Game Simulator"> Game Simulator</label>
            </div>
            <div className="flex-items-center gap-2">
              <input
                type="checkbox"
                id="Sports Games"
                className="accent-[#E58D27]"
              />
              <label htmlFor="Sports Game"> Sports Game</label>
            </div>
            <div className="flex-items-center gap-2">
              <input
                type="checkbox"
                id="Action Game"
                className="accent-[#E58D27]"
              />
              <label htmlFor="Action Game"> Action Game</label>
            </div>
          </div>
          <h4 className="my-1 text-white text-lg">Platforms</h4>
          <div className="flex flex-col gap-2">
            <div className="flex-items-center gap-2">
              <input type="checkbox" id="PC" className="accent-[#E58D27]" />
              <label htmlFor="PC"> PC</label>
            </div>
            <div className="flex-items-center gap-2">
              <input
                type="checkbox"
                id="Playstation 5"
                className="accent-[#E58D27]"
              />
              <label htmlFor="Playstation 5"> Playstation 5</label>
            </div>
            <div className="flex-items-center gap-2">
              <input
                type="checkbox"
                id="Playstation 4"
                className="accent-[#E58D27]"
              />
              <label htmlFor="Playstatio 4"> Playstation 4</label>
            </div>
            <div className="flex-items-center gap-2">
              <input
                type="checkbox"
                id="Xbox Series"
                className="accent-[#E58D27]"
              />
              <label htmlFor="Xbox Series"> Xbox Series</label>
            </div>
            <div className="flex-items-center gap-2">
              <input
                type="checkbox"
                id="Nintendo Switch"
                className="accent-[#E58D27]"
              />
              <label htmlFor="Nintendo Switch"> Nintendo Switch</label>
            </div>
          </div>
          <h4 className="my-1 text-white text-lg">Price</h4>
          <form className="flex flex-col gap-8">
            <div className="flex items-center justify-between gap-4">
              <div className="relative">
                <ion-icon name="pricetags-outline" id="pricetag"></ion-icon>
                <input
                  type="number"
                  className="bg-[#161b23] py-2 pl-8 pr-4 rounded-xl outline-none w-full appearance-none"
                />
              </div>
              <span>-</span>
              <div className="relative">
                <ion-icon name="pricetags-outline" id="pricetag"></ion-icon>
                <input
                  type="number"
                  className="bg-[#161b23] py-2 pl-8 pr-4 rounded-xl outline-none w-full"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#E58D27] font-bold text-black rounded-full w-full p-2.5 hover:translate-x-2.5 transition:all duration-200"
            >
              Apply Filters
            </button>
          </form>
        </div>

        {/*Social Media*/}
        <ul className="flex items-center justify between bg-[#362V]">
          <li>
            <a href="https://facebook.com/" target="_blank">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="https://youtube.com" target="_blank">
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
            <a href="https://twitter.com/" target="_blank">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
      {/*Mobile Button*/}
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="fixed bottom-4 right-4 bg-[#ed9c3e] p-4 rounded-full text-xl z-40 lg:hidden"
      >
        {showSidebar ? <AiOutlineClose /> : <BiFilter />}
      </button>
    </>
  );
};
