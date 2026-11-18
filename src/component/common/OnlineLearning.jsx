import HeaderLogo from "../../assets/image/HeaderLogo.png";
import Girl from "../../assets/image/Girl.png";
import Girl1 from "../../assets/image/Girl1.png";

const OnlineLearning = () => {
  return (
    <>
      <article>
        <div className="w-full max-w-[1205px] ml-[90px] mt-[127px]">
          {/* top content */}
          <img
            src={HeaderLogo}
            alt=""
            className="ml-[552px] mr-[571.01px] w-[82.44px] h-[54.3px]"
          />
          <h1 className="font-[Libre Baskerville] font-normal text-[39px] leading-none w-[578px] h-[48px] text-[rgba(55,75,92,1)] ml-[299px] mr-[328.51px] mt-[17.48px]">
            Welcome to On line learning
          </h1>
          <p className="text-center mt-[17.23px] ml-[147px] font-normal text-[22px] leading-none w-[819px] h-[67px] text-[rgba(55,75,92,1)]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* grid card */}
          <div className="grid grid-cols-4 w-full max-w-[1205.51px] mt-[67px]">
            {/* first */}
            <div className="w-[262.51px] h-[304.8px] border-dashed border-[rgba(55,75,92,1)] border-[0.5px] rounded-4xl">
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
            <div className="w-[262.51px] h-[304.8px] ml-[51.49px] bg-[rgba(255,145,0,1)] border-dashed border-[rgba(55,75,92,1)] border-[0.5px] rounded-4xl">
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
            <div className="w-[262.51px] h-[304.8px] ml-[52.49px] border-dashed border-[rgba(55,75,92,1)] border-[0.5px] rounded-4xl">
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
            <div className="w-[262.51px] h-[304.8px] ml-[51.49px] border-dashed border-[rgba(55,75,92,1)] border-[0.5px] rounded-4xl">
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
