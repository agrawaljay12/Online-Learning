import OnlineLearning from "../../assets/image/OnlineLearning.png";
import LearningAnalysis from "../../assets/image/LearningAnalysis.png";

const Section = () => {
  return (
    <>
      <section className="overflow-x-clip">
        <div className="w-full max-w-[1114px] mx-auto lg:h-auto xl:h-[433px] h-auto xl:ml-[126px] xl:mt-[88px] md:mt-[70px] mt-[50px] flex lg:flex-row flex-col lg:items-start xl:gap-[66px] lg:gap-6 sm:gap-y-[50px] gap-y-10 xl:px-0 lg:px-5 sm:px-6 px-4 2xl:mx-auto">
          {/* left content */}
          <div className="mx-auto lg:mx-0 w-full text-center lg:text-left max-w-[499px] lg:max-w-none lg:w-auto lg:flex-1 lg:min-w-0 xl:flex-none xl:w-[499px] mt-[33px] lg:mt-[73px]">
            <h1 className="font-[Lato] w-full xl:w-[402px] block xl:leading-[43px] md:leading-[39px] leading-[34px] text-[rgba(55,75,92,1)] font-normal xl:text-4xl md:text-3xl sm:text-2xl text-xl">
              New Learning Experience
            </h1>
            <span className="font-[Lato] whitespace-nowrap block font-normal xl:text-[56px] md:text-5xl sm:text-4xl text-3xl xl:leading-[67px] md:leading-[63px] leading-[59px] w-full xl:w-[314px] text-[rgba(55,75,92,1)]">
              Online Learn
            </span>
            <p className="font-['LibreBaskerville'] text-[rgba(55,75,92,1)] xl:text-[20px] md:text-lg sm:text-[16px] text-[14px] font-normal leading-[25px] pt-[13px]">
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit, sed do eiusmod tempor
            </p>
            <button className="w-full sm:w-[220px] h-[54px] font-bold text-lg font-[LibreBaskerville] bg-[rgba(255,145,0,1)] pt-[15px] pb-[17px] text-white pl-[48px] pr-[51px] rounded-lg ml-[2px] mt-[38px] mb-0">
              Explore Now
            </button>
          </div>

          {/* right content */}
          <div className="w-full max-w-[420px] sm:max-w-[549px] h-[300px] sm:h-[430px] lg:h-auto lg:w-auto lg:max-w-[589px] lg:aspect-[589/433] lg:flex-1 lg:min-w-0 xl:flex-none xl:aspect-auto xl:w-[589px] mx-auto lg:mx-0 relative lg:mt-[6px] mt-0">
            <img
              src={OnlineLearning}
              alt=""
              className="w-[220px] h-[220px] sm:w-[385px] sm:h-[384px] lg:w-[66.7%] lg:h-auto lg:aspect-square xl:w-[393px] xl:h-[392px] xl:aspect-auto"
            />
            <img
              src={LearningAnalysis}
              alt=""
              className="w-[220px] h-[220px] sm:w-[385px] sm:h-[384px] lg:w-[66.7%] lg:h-auto lg:aspect-square xl:w-[393px] xl:h-[393px] xl:aspect-auto absolute top-[24px] sm:top-[40px] left-[100px] sm:left-[196px] lg:top-[9.2%] lg:left-[33.3%] lg:bottom-auto xl:top-[40px] xl:left-[196px] bottom-[10px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
