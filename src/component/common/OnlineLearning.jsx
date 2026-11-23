import HeaderLogo from "../../assets/image/HeaderLogo.png";
import Girl from "../../assets/image/Girl.png";
import Girl1 from "../../assets/image/Girl1.png";

const OnlineLearning = () => {
  return (
    <>
      <article className="overflow-x-clip">
        <div className="w-full max-w-[1205px] xl:ml-[90px] md:mx-auto 2xl:mx-auto px-4 sm:px-6 xl:px-0 pb-10 xl:pb-0 mt-16 sm:mt-24 lg:mt-[127px]">
          {/* top content */}
          <img
            src={HeaderLogo}
            alt=""
            className="block mx-auto xl:ml-[552px] xl:mr-[571.01px] md:mx-auto w-[82.44px] h-[54.3px]"
          />
          <h1 className="text-center font-[Libre Baskerville] font-normal text-[28px] sm:text-[30px] md:text-[34px] xl:text-[39px] leading-tight xl:leading-none w-full max-w-[578px] xl:w-[578px] h-auto xl:h-[48px] text-[rgba(55,75,92,1)] mx-auto xl:ml-[299px] xl:mr-[328.51px] mt-[17.48px]">
            Welcome to On line learning
          </h1>
          <p className="text-center mt-[17.23px] mx-auto xl:ml-[147px] font-normal xl:text-[22px] md:text-[18px] sm:text-[14px] text-[12px] leading-normal xl:leading-none w-full max-w-[819px] xl:w-[819px] h-auto xl:h-[67px] text-[rgba(55,75,92,1)]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* grid card */}
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 sm:gap-y-8 gap-y-6 gap-x-4 xl:gap-x-0 grid-cols-1 justify-between justify-items-center xl:justify-items-start xl:mt-[67px] md:mt-[63px] sm:mt-[58px] mt-[54px]">
            {/* first */}
            <div className="w-[262.51px] max-w-full h-[304.8px] border-dashed  border-[rgba(55,75,92,1)] border-[0.5px] rounded-4xl">
              <img
                src={Girl}
                alt=""
                className="ml-[82px] mt-[24px] mr-[82.04px] mb-[20.68px]"
              />
              <span className="w-[162.73px] font-normal text-[19px] leading-none h-[24px] text-[rgba(55,75,92,1)] ml-[50px] mr-[49.78px]">
                Online Learning
              </span>
              <p className="w-[189px] h-[38px] ml-[37px] mr-[36.51px] mb-[50.06px] text-center mt-[18.67px] font-normal text-[15px] leading-none text-[rgba(55,75,92,1)]">
                Lorem ipsum dolor sit <br /> amet, consectetur
              </p>
            </div>

            {/* second */}
            <div className="w-[262.51px] max-w-full h-[304.8px] bg-[rgba(255,145,0,1)] border-dashed border-[rgba(55,75,92,1)] border-[0.5px] rounded-4xl">
              <img
                src={Girl1}
                alt=""
                className="ml-[82px] mt-[24px] mr-[82.04px] mb-[20.68px]"
              />
              <span className="w-[162.73px] font-normal text-white text-[19px] leading-none h-[24px] text-[rgba(55,75,92,1)] ml-[50px] mr-[49.78px]">
                Online Learning
              </span>
              <p className="w-[189px] h-[38px] ml-[42px] mr-[44.51px] mb-[46.3px] text-center mt-[16.67px] font-normal text-[15px] text-white leading-none text-[rgba(55,75,92,1)]">
                Lorem ipsum dolor sit <br /> amet, consectetur
              </p>
            </div>

            {/* third */}
            <div className="w-[262.51px] max-w-full h-[304.8px]  border-dashed border-[rgba(55,75,92,1)] border-[0.5px] rounded-4xl">
              <img
                src={Girl}
                alt=""
                className="ml-[82px] mt-[24px] mr-[82.04px] mb-[20.68px]"
              />
              <span className="w-[162.73px] font-normal text-[19px] leading-none h-[24px] text-[rgba(55,75,92,1)] ml-[50px] mr-[49.78px]">
                Online Learning
              </span>
              <p className="w-[189px] h-[38px] ml-[33px] mr-[40.51px] mb-[50.3px] text-center mt-[18.67px] font-normal text-[15px] leading-none text-[rgba(55,75,92,1)]">
                Lorem ipsum dolor sit <br /> amet, consectetur
              </p>
            </div>

            {/* four */}
            <div className="w-[262.51px] max-w-full h-[304.8px]  border-dashed border-[rgba(55,75,92,1)] border-[0.5px] rounded-4xl">
              <img
                src={Girl}
                alt=""
                className="ml-[82px] mt-[24px] mr-[82.04px] mb-[20.68px]"
              />
              <span className="w-[162.73px] font-normal text-[19px] leading-none h-[24px] text-[rgba(55,75,92,1)] ml-[50px] mr-[49.78px]">
                Online Learning
              </span>
              <p className="w-[189px] h-[38px] ml-[37px] mr-[36.51px] mb-[50.3px] text-center mt-[18.67px] font-normal text-[15px] leading-none text-[rgba(55,75,92,1)]">
                Lorem ipsum dolor sit <br /> amet, consectetur
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default OnlineLearning;
