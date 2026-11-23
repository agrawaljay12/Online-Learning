import FooterLogo from "../../assets/image/FooterLogo.png";
import Facebook from "../../assets/icon/Facebook.png";
import Instagram from "../../assets/icon/Instagram.png";
import Twitter from "../../assets/icon/Twitter.png";
import Linkedin from "../../assets/icon/Linkedin.png";
import FooterBackground from "../../assets/image/FooterBackground.svg";

const Footer = () => {
  return (
    <>
      <footer className="overflow-x-clip">
        <div
          style={{ backgroundImage: `url(${FooterBackground})` }}
          className="w-full max-w-[1843.79px] mx-auto bg-cover bg-top bg-no-repeat bg-center bg-size[length:(100%_auto)] bg-[rgba(0,0,0,0)] min-h-[395px] h-auto mt-16 sm:mt-20 xl:mt-[97.84px] pb-10 xl:pb-0 text-[rgba(255,255,255,1)]"
        >
          <div className="grid xl:grid-cols-[488.5px_197px_218.5px_183.79px] lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-8 xl:gap-y-0 min-h-0 lg:self-start xs:justify-items-center  px-6 sm:px-10 pt-14 sm:pt-16 xl:pt-0 2xl:pt-10 xl:px-0 xl:ml-[139px]">
            {/* logo section */}
            <div>
              <div className="flex items-center mt-0 xl:mt-[134.98px]">
                <img
                  src={FooterLogo}
                  alt=""
                  className="w-[61.94px] h-[40.8px]"
                />
                <span className="text-[rgba(251,251,251,1)] font-[Forte] font-normal text-[26px] sm:text-[32px]  leading-[43px]">
                  Online Learn
                </span>
              </div>
              <p className="mt-6 xl:mt-[47.29px] font-[Libre Baskerville] font-normal text-[14px] leading-[17px]">
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
                sed do <br /> eiusmod tempor
              </p>
              <p className="mt-6 xl:mt-[36.18px]  font-[Libre Baskerville] font-normal text-[14px] leading-[17px]">
                © Copyright 2022 Online
              </p>
            </div>

            {/* Information */}
            <div>
              <h4 className="mt-0 xl:mt-[154.86px] text-[rgba(255,255,255,1)] font-[Libre Baskerville] font-normal text-[16px] leading-5">
                Information
              </h4>
              <div className="mt-[14.32px] border-b-[2px] border-[rgba(0,219,208,1)] w-[54px]"></div>
              <ul className="list-none">
                <a href="">
                  <li className="mt-[18.68px] text-[rgba(255,255,255,1)] font-[Libre Baskerville] font-normal text-[14px] leading-[17px]">
                    About Us
                  </li>
                </a>
                <a href="">
                  <li className="mt-[18px] text-[rgba(255,255,255,1)] font-[Libre Baskerville] font-normal text-[14px] leading-[17px]">
                    Products
                  </li>
                </a>
                <a href="">
                  <li className="mt-[18px] text-[rgba(255,255,255,1)] font-[Libre Baskerville] font-normal text-[14px] leading-[17px]">
                    Contact Us
                  </li>
                </a>
                <a href="">
                  <li className="mt-[18px] text-[rgba(255,255,255,1)] font-[Libre Baskerville] font-normal text-[14px] leading-[17px]">
                    Term of Service
                  </li>
                </a>
              </ul>
            </div>

            {/* About us */}
            <div className="mt-0 xl:mt-[205.86px]">
              <ul className="list-none">
                <a href="">
                  <li className="mt-[18.68px] text-[rgba(255,255,255,1)] font-[Libre Baskerville] font-normal text-[14px] leading-[17px]">
                    About Us
                  </li>
                </a>
                <a href="">
                  <li className="mt-[18px] text-[rgba(255,255,255,1)] font-[Libre Baskerville] font-normal text-[14px] leading-[17px]">
                    Products
                  </li>
                </a>
              </ul>
            </div>

            {/* follow us */}
            <div>
              <h4 className="mt-0 xl:mt-[154.86px] text-[rgba(255,255,255,1)] font-[Libre Baskerville] font-normal text-[16px] leading-5">
                Follow Us
              </h4>
              <div className="mt-[14.32px] border-b-[2px] border-[rgba(0,219,208,1)] w-[54px]"></div>
              <div className="flex mt-[14.56px]">
                <img src={Facebook} alt="" />
                <img src={Linkedin} alt="" className="ml-[20.13px]" />
                <img src={Twitter} alt="" className="ml-[21.5px]" />
                <img src={Instagram} alt="" className="ml-[20.13px]" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
