import FooterLogo from "../../assets/image/FooterLogo.png";
import Facebook from "../../assets/icon/Facebook.png";
import Instagram from "../../assets/icon/Instagram.png";
import Twitter from "../../assets/icon/Twitter.png";
import Linkedin from "../../assets/icon/Linkedin.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="w-full max-w-[1843.79px] mt-[97.84px] bg-[rgba(238,135,0,1)] text-[rgba(255,255,255,1)]">
          <div className="grid grid-cols-[488.5px_197px_218.5px_183.79px] self-start">
            {/* logo section */}
            <div>
              <div className="flex items-center mt-[134.98px] ml-[135.96px]">
                <img
                  src={FooterLogo}
                  alt=""
                  className="w-[61.94px] h-[40.8px]"
                />
                <span className="text-[rgba(251,251,251,1)] font-[Forte] font-normal text-[32px] leading-7">
                  Online Learn
                </span>
              </div>
              <p className="ml-[139px] mt-[47.29px] font-[Libre Baskerville] font-normal text-[14px] leading-none">
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
                sed do <br /> eiusmod tempor
              </p>
              <p className="ml-[139px] mb-[386.1px] mt-[36.18px] font-[Libre Baskerville] font-normal text-[14px] leading-none">
                © Copyright 2022 Online
              </p>
            </div>

            {/* Information */}
            <div>
              <h4 className="mt-[154.86px] text-[rgba(255,255,255,1)] font-[Libre Baskerville] font-normal text-[16px] leading-none">
                Information
              </h4>
              <div className="mt-[14.32px] border-b-[2px] border-[rgba(0,219,208,1)] w-[54px]"></div>
              <ul className="list-none">
                <a href="">
                  <li className="mt-[18.68px] text-[rgba(255,255,255,1)] font-[Libre Baskerville] font-normal text-[14px] leading-none">
                    About Us
                  </li>
                </a>
                <a href="">
                  <li className="mt-[18px] text-[rgba(255,255,255,1)] font-[Libre Baskerville] font-normal text-[14px] leading-none">
                    Products
                  </li>
                </a>
                <a href="">
                  <li className="mt-[18px] text-[rgba(255,255,255,1)] font-[Libre Baskerville] font-normal text-[14px] leading-none">
                    Contact Us
                  </li>
                </a>
                <a href="">
                  <li className="mt-[18px] text-[rgba(255,255,255,1)] font-[Libre Baskerville] font-normal text-[14px] leading-none">
                    Term of Service
                  </li>
                </a>
              </ul>
            </div>

            {/* About us */}
            <div className="mt-[205.86px]">
              <ul className="list-none">
                <a href="">
                  <li className="mt-[18.68px] text-[rgba(255,255,255,1)] font-[Libre Baskerville] font-normal text-[14px] leading-none">
                    About Us
                  </li>
                </a>
                <a href="">
                  <li className="mt-[18px] text-[rgba(255,255,255,1)] font-[Libre Baskerville] font-normal text-[14px] leading-none">
                    Products
                  </li>
                </a>
              </ul>
            </div>

            {/* follow us */}
            <div>
              <h4 className="mt-[154.86px] text-[rgba(255,255,255,1)] font-[Libre Baskerville] font-normal text-[16px] leading-none">
                Information
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
