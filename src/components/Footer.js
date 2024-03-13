import { footerData } from "../utils/FooterMockData";
import swiggyWhite from "../images/swiggyWhite.svg";
import { useState } from "react";
import { upArrow, downArrow } from "../utils/constants";

const Footer = ({ data }) => {
  const { title, cities } = data;
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="bg-black text-white">
      <div className="flex justify-center gap-24 max-md:gap-14 flex-wrap p-10 pb-20">
        <div>
          <div className="flex items-center gap-2 pb-2">
            <img className="h-10" src={swiggyWhite} />
            <b className="text-2xl">Swiggy</b>
          </div>
          <p className="text-gray-400">&#169; 2023 Bundl</p>
          <p className="text-gray-400">Technologies Pvt. Ltd</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold text-lg">{footerData[0].title}</p>
          {footerData[0].Items.map((item) => (
            <a key={item.name} href={item.Link} className="text-gray-400">
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-lg">{footerData[1].title}</p>
            {footerData[1].Items.map((item) => (
              <a key={item.name} href={item.Link} className="text-gray-400">
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-lg">{footerData[2].title}</p>
            {footerData[2].Items.map((item) => (
              <a key={item.name} href={item.Link} className="text-gray-400">
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-lg">We Deliver to:</p>
            {cities.slice(0, 5).map((item) => (
              <a key={item.text} href={item.Link} className="text-gray-400">
                {item.text}
              </a>
            ))}
            <button onClick={handleClick} className="text-gray-400 border border-gray-400 rounded-md p-1 flex items-center justify-evenly">
              {cities.length} Cities <span className="scale-90">{toggle ? upArrow : downArrow}</span>
            </button>
          </div>
        </div>
      </div>
      {toggle ? (
        <div className="border-t-[1px] border-gray-400 px-32">
          <p className="font-bold text-lg py-6">Other Cities that we deliver</p>
          <div className="text-gray-400 flex flex-wrap gap-2 justify-between">
            {cities.map((city) => (
              <a key={city.text} href={city.link} className="w-[250px]">
                {city.text}
              </a>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Footer;
