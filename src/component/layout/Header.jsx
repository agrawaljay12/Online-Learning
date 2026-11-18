import HeaderLogo from "../../assets/image/HeaderLogo.png";
import OnlineLearn from "../../assets/image/OnlineLearn.png";

const Header = () => {
  return (
    <>
      <header>
        <div className="w-full max-w-[1306px] flex items-center">
          {/* logo */}
          <div className="flex items-center bg-white shadow-md w-[254px] h-[78px] gap-[5.64px] rounded-l-full pl-[36px] rounded-r-full">
            <img
              src={HeaderLogo}
              alt=""
              className="xl:w-[44.66px] xl:h-[29.42px]"
            />
            <span className="text-[rgba(55,75,92,1)] font-[Forte] font-normal lg:text-[25px] md:text-[20px] sm:text-[18px] text-[15px] leading-7">
              Online Learn
            </span>
          </div>
          {/* contact button */}
          <button className="font-bold text-lg font-[Lato] bg-[rgba(255,145,0,1)] py-3 text-white pl-[38px] pr-[39px] rounded-lg ml-[911px]">
            Contact
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
