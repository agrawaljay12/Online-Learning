import Blog from "../component/common/Blog";
import Book from "../component/common/Books";
import OnlineLearning from "../component/common/OnlineLearning";
import Section from "../component/common/section";
import Subscribe from "../component/common/Subscribe";
import Testimonial from "../component/common/Testimonial";
import Footer from "../component/layout/Footer";
import Header from "../component/layout/Header";
import Wave from "../assets/image/Wave.png";

const HomePage = () => {
  return (
    <>
      <div
        className="relative overflow-x-clip bg-no-repeat bg-size-[auto_1668px]"
        style={{ backgroundImage: `url(${Wave})` }}
      >
        <Header />
        <Section />
        <div className="hidden lg:block absolute top-[512.89px] rotate-[10deg] overflow-hidden left-[-111.98px] 2xl:left-0  w-[186.88px] xl:h-[166.42px] lg:h-[100px]  rounded-l-full border-t-4 border-l-4 border-b-4 border-[rgba(245,145,0,1)] divide-y-1 divide-gray-300 bg-[rgba(246,245,241,1)]">
          <div className="h-1/5 w-[137.27px] ml-auto"></div>
          <div className="h-1/5 w-[137.27px] ml-auto"></div>
          <div className="h-1/5 w-[137.27px] ml-auto"></div>
          <div className="h-1/5 w-[137.27px] ml-auto"></div>
          <div className="h-1/5 w-[137.27px] ml-auto"></div>
        </div>
        <OnlineLearning />
        <Testimonial />
        <Book />
        <Subscribe />
        <div className="hidden lg:block absolute xl:top-[2263px] rotate-190 xl:left-[1243.06px] lg:left-[950px] lg:top-[2450px]  2xl:left-auto xl:right-0 w-[186.9px] xl:h-[166.42px] lg:h-[100px] rounded-l-full border-t-4 border-l-4 border-b-4 border-[rgba(245,145,0,1)] divide-y-1 divide-[rgba(204,204,204,1)] bg-[rgba(246,245,241,1)]">
          <div className="h-1/5 w-[137.27px] ml-auto"></div>
          <div className="h-1/5 w-[137.27px] ml-auto"></div>
          <div className="h-1/5 w-[137.27px] ml-auto"></div>
          <div className="h-1/5 w-[137.27px] ml-auto"></div>
          <div className="h-1/5 w-[137.27px] ml-auto"></div>
        </div>
        <Blog />
        <div className=" hidden lg:block 2xl:left-0 absolute lg:top-[3330px] lg:h-[100px] xl:top-[3138.67px] rotate-10 left-[-111.98px] w-[186.9px] xl:h-[166.42px] rounded-l-full border-t-4 border-l-4 border-b-4 border-[rgba(245,145,0,1)] divide-y-1 divide-[rgba(204,204,204,1)]  bg-[rgba(246,245,241,1)]">
          <div className="h-1/5 w-[137.27px] ml-auto"></div>
          <div className="h-1/5 w-[137.27px] ml-auto"></div>
          <div className="h-1/5 w-[137.27px] ml-auto"></div>
          <div className="h-1/5 w-[137.27px] ml-auto"></div>
          <div className="h-1/5 w-[137.27px] ml-auto"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
