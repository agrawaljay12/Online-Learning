import OnlineLearning from "../../assets/image/OnlineLearning.png";
import LearningAnalysis from "../../assets/image/LearningAnalysis.png";

const Section = () => {
  return (
    <>
      <section>
        <div className="w-full max-w-[1114px] h-[423px] xl:ml-[126px] lg:ml-[100px] mt-[88px] flex lg:flex-row md:flex-col xl:gap-[66px] lg:gap-[56px]">
          {/* left content */}
          <div className="md:mx-auto lg:mx-0 xl:w-[499px] mt-[33px] lg:mt-[73px] mb-[54px]">
            <h1 className=" w-[402px] block leading-none h-[43px] text-[rgba(55,75,92,1)] font-normal xl:text-4xl md:text-3xl sm:text-2xl text-xl">
              New Learning Experience
            </h1>
            <span className="whitespace-nowrap block font-normal xl:text-[56px] md:text-5xl sm:text-4xl text-3xl leading-none h-[67px] w-[314px] text-[rgba(55,75,92,1)]">
              Online Learn
            </span>
            <p className="font-[Libre Baskerville] text-[rgba(55,75,92,1)] xl:text-[20px] md:text-lg sm:text-[16px] text-[14px] font-normal leading-none h-[50px] pt-[13px]">
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit, sed do eiusmod tempor
            </p>
            <button className="w-[220px] h-[54px] font-bold text-lg font-[Libre Baskerville] bg-[rgba(255,145,0,1)] pt-[15px] pb-[17px] text-white pl-[48px] pr-[51px] rounded-lg ml-[2px] mt-[38px] mb-0">
              Explore Now
            </button>
          </div>
          {/* right content */}
          <div className="xl:w-[549px] md:mx-auto lg:mx-0 relative lg:mt-0 mt-[74px]">
            <img
              src={OnlineLearning}
              alt=""
              className="xl:w-[393px] xl:h-[392px] lg:w-[370px] lg:h-[371px] sm:w-[385px] sm:h-[384]"
            />
            <img
              src={LearningAnalysis}
              alt=""
              className="xl:w-[393px] xl:h-[393px] lg:w-[371px] h-[371px] absolute top-[40px] left-[196px] bottom-[10px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
