import Blog from "../component/common/Blog";
import Book from "../component/common/Books";
import OnlineLearning from "../component/common/OnlineLearning";
import Section from "../component/common/section";
import Subscribe from "../component/common/Subscribe";
import Testimonial from "../component/common/Testimonial";
import Footer from "../component/layout/Footer";
import Header from "../component/layout/Header";

const HomePage = () => {
  return (
    <>
      <div className="relative">
        <Header />
        <Section />
        <div className="hidden lg:block absolute top-[512.89px] rotate-10 left-[-111.98px] 2xl:left-0  w-[186.9px] lg:h-[100px] xl:h-[166.42px]  rounded-l-full border-t-4 border-l-4 border-b-4 border-[rgba(245,145,0,1)] divide-y-1 divide-gray-300">
          <div className="xl:py-4 lg:py-2.5"></div>
          <div className="xl:py-4 lg:py-2.5"></div>
          <div className="xl:py-4 lg:py-2.5"></div>
          <div className="xl:py-4 lg:py-2.5"></div>
          <div className="xl:py-4 lg:py-2.5"></div>
        </div>
      </div>

      <div className="relative">
        <OnlineLearning />
        <Testimonial />
        <Book />
        <Subscribe />
        <div className="hidden lg:block 2xl:hidden absolute top-[1500.09px] rotate-190 left-[1243.06px] w-[186.9px] h-[166.42px] rounded-l-full border-t-4 border-l-4 border-b-4 border-[rgba(245,145,0,1)] divide-y-1 divide-[rgba(204,204,204,1)]">
          <div className="py-4"></div>
          <div className="py-4"></div>
          <div className="py-4"></div>
          <div className="py-4"></div>
          <div className="py-4"></div>
        </div>
        <Blog />
        <div className=" hidden lg:block 2xl:left-0 absolute lg:top-[2800px] lg:h-[100px] xl:top-[2400px] rotate-10 left-[-111.98px] w-[186.9px] xl:h-[166.42px] rounded-l-full border-t-4 border-l-4 border-b-4 border-[rgba(245,145,0,1)] divide-y-1 divide-[rgba(204,204,204,1)]">
          <div className="xl:py-4 lg:py-2.5"></div>
          <div className="xl:py-4 lg:py-2.5"></div>
          <div className="xl:py-4 lg:py-2.5"></div>
          <div className="xl:py-4 lg:py-2.5"></div>
          <div className="xl:py-4 lg:py-2.5"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
