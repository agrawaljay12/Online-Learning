import HeaderLogo from "../../assets/image/HeaderLogo.png";
import Girl from "../../assets/image/Girl.png";
import Girl1 from "../../assets/image/Girl1.png";

const OnlineLearning = () => {
  return (
    <>
      <article>
        <div className="w-full max-w-[1205px] xl:ml-[90px] mt-[127px] ml-[45px]">
          {/* top content */}
          <img
            src={HeaderLogo}
            alt=""
            className="xl:ml-[552px] xl:mr-[571.01px] md:mx-auto w-[82.44px] h-[54.3px]"
          />
          <h1 className="text-center font-[Libre Baskerville] font-normal text-[39px] md:text-[34px] sm:text-[30px] text-[28px] leading-none w-[578px] h-[48px] text-[rgba(55,75,92,1)] md:ml-[269px] md:mr-[300px] xl:ml-[299px] xl:mr-[328.51px] mt-[17.48px]">
            Welcome to On line learning
          </h1>
          <p className="text-center mt-[17.23px] ml-[147px] font-normal xl:text-[22px] md:text-[18px] sm:text-[text-14px] text-[12px]  leading-none w-[819px] h-[67px] text-[rgba(55,75,92,1)]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* grid card */}
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 sm:gap-y-8 gap-y-6 grid-cols-1 justify-between xl:mt-[67px] md:mt-[63px] sm:mt-[58px] mt-[54px]">
            {/* first */}
            <div className="w-[262.51px] h-[304.8px] border-dashed  border-[rgba(55,75,92,1)] border-[0.5px] rounded-4xl">
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
            <div className="w-[262.51px] h-[304.8px] bg-[rgba(255,145,0,1)] border-dashed border-[rgba(55,75,92,1)] border-[0.5px] rounded-4xl">
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

            {/* third */}
            <div className="w-[262.51px] h-[304.8px]  border-dashed border-[rgba(55,75,92,1)] border-[0.5px] rounded-4xl">
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

            {/* four */}
            <div className="w-[262.51px] h-[304.8px]  border-dashed border-[rgba(55,75,92,1)] border-[0.5px] rounded-4xl">
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
          </div>
        </div>
      </article>
    </>
  );
};

export default OnlineLearning;
