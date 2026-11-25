import HeaderLogo from "../../assets/image/HeaderLogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="w-full max-w-[1306px] h-[78px] flex items-center justify-between xl:mx-auto  md:px-5 lg:px-5 pr-4 xl:px-0 overflow-x-clip">
          <a
            href="#"
            className=" translate-x-[-22px] md:translate-x-0 flex items-center bg-white shadow-md xl:w-[254px] xl:h-[78px] md:w-[230px] w-[200px] h-[70px] gap-[5.64px] rounded-l-full pl-[36px] md:pl-0 md:justify-center rounded-r-full"
          >
            <img
              src={HeaderLogo}
              alt="HeaderLogo"
              className="w-[43px] xl:w-[44.66px] xl:h-[29.42px]"
            />
            <span className="text-[rgba(55,75,92,1)] font-[Forte] font-normal whitespace-nowrap xl:text-[25px] md:text-[20px] sm:text-[18px] text-[15px] leading-7">
              Online Learn
            </span>
          </a>
          <div className="flex items-center">
            <Link
              to={"#"}
              className="mt-[29px] mb-3 w-[141px] h-[46px] font-bold xl:text-lg text-md font-[Lato] bg-[rgba(255,145,0,1)] py-3 text-white pl-[38px] pr-[39px] leading-none rounded-lg"
            >
              Contact
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
