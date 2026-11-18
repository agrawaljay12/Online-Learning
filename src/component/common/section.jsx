import OnlineLearning from "../../assets/image/OnlineLearning.png";
import LearningAnalysis from "../../assets/image/LearningAnalysis.png";

const Section = () => {
  return (
    <>
      <section>
        <div className="w-full max-w-[1114px] h-[423px] ml-[126px] mt-[88px]">
          <div className="flex gap-[66px]">
            {/* left content */}
            <div className="w-[499px] mt-[73px] mb-[54px] ">
              <h1 className=" w-[402px] block leading-none h-[43px] text-[rgba(55,75,92,1)] font-normal text-4xl">
                New Learning Experience
              </h1>
              <span className="block font-normal text-[56px] leading-none h-[67px] w-[314px] text-[rgba(55,75,92,1)]">
                Online Learn
              </span>
              <p className="font-[Libre Baskerville] text-[rgba(55,75,92,1)] text-[20px] font-normal leading-none h-[50px] pt-[13px]">
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit, sed do eiusmod tempor
              </p>
              <button className="w-[220px] h-[54px] font-bold text-lg font-[Libre Baskerville] bg-[rgba(255,145,0,1)] pt-[15px] pb-[17px] text-white pl-[48px] pr-[51px] rounded-lg ml-[2px] mt-[38px] mb-0">
                Explore Now
              </button>
            </div>
            {/* right content */}
            <div className="w-[549px] relative">
              <img src={OnlineLearning} alt="" />
              <img
                src={LearningAnalysis}
                alt=""
                className="absolute top-[40px] left-[196px] bottom-[10px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
