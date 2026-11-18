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
        <div className="absolute top-[638px] rotate-10 left-[-111.98px]  w-[186.9px] h-[166.42px] rounded-l-full border-t-3 border-l-3 border-b-3 border-[rgba(245,145,0,1)] divide-y-4 divide-gray-500 bg-[rgba(204,204,204,1)]">
          <div className="py-3"></div>
          <div className="py-4"></div>
          <div className="py-4"></div>
          <div className="py-4"></div>
          <div className="py-4"></div>
        </div>
      </div>

      <div className="relative">
        <OnlineLearning />
        <Testimonial />
        <Book />
        <Subscribe />
        <Blog />
        <div className="absolute top-[2381.27px] rotate-10 left-[-111.98px]  w-[186.9px] h-[166.42px] rounded-l-full border-t-3 border-l-3 border-b-3 border-[rgba(245,145,0,1)] divide-y-4 divide-gray-500 bg-[rgba(204,204,204,1)]">
          <div className="py-3"></div>
          <div className="py-4"></div>
          <div className="py-4"></div>
          <div className="py-4"></div>
          <div className="py-4"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
