import HeaderLogo from "../../assets/image/HeaderLogo.png";
import Library from "../../assets/image/Library.png";

const Blog = () => {
  return (
    <>
      <article className="overflow-x-clip">
        <div className="w-full max-w-[1015px] xl:ml-[188px] 2xl:mx-auto lg:w-auto xl:w-full lg:ml-[120px] xl:mr-[163px] lg:ml-[120px] mt-16 sm:mt-24 lg:mt-[153px] mx-auto px-4 sm:px-6 lg:px-0 pb-10 lg:pb-0">
          <img src={HeaderLogo} alt="" className="block mx-auto" />
          <div className="mx-auto">
            <span className="w-full max-w-[273px] block mx-auto text-center font-[Libre Baskerville] text-[rgba(55,75,92,1)] text-[28px] sm:text-[34px] xl:text-[36px] font-normal leading-[45px] pt-[17.18px]">
              Read Our Blog
            </span>
            <p className="w-full max-w-[450px] mx-auto lg:ml-[247px] lg:mr-[240px] text-center font-[Libre Baskerville] text-[rgba(55,75,92,1)] text-[14px] sm:text-[16px] font-normal leading-[20px] pt-[19.53px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br />
              elit sed do eiusmod tempor incididunt ut labore et <br /> dolore
              magna aliqua.
            </p>
            {/* grid */}
            <div className="grid lg:grid-cols-[328px_328px_328px] md:grid-cols-2 grid-cols-1 gap-y-6 xl:gap-y-0 mt-[60px]">
              {/* 1st */}
              <div className="w-full max-w-[278px] mx-auto xl:ml-[25px] xl:mr-[25px] mt-[11.53px] bg-white shadow-lg rounded-xl border-[2px] border-white">
                <img src={Library} alt="" className="w-[278px] h-[195px]" />
                <span className="block font-[Libre Baskerville] text-[rgba(214,126,9,1)] text-[18px] font-normal leading-[22px] pt-[21.47px] pl-[73.67px] pr-[73.33px]">
                  Blog Post One
                </span>
                <p className="text-center font-[Libre Baskerville] text-[rgba(55,75,92,1)] text-[14px] font-normal leading-[17px] pt-[10.53px] pl-[35px] pr-[25px]">
                  Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit
                  sed <br />
                  do eiusmod.
                </p>
                <span className=" w-[79px] text-center font-[Libre Baskerville] text-[rgba(55,75,92,1)] text-[14px] font-normal leading-[17px] pt-[17.47px] pl-[99.62px] pr-[99.38px]">
                  Read More
                </span>
                <div className="border-t-2 mt-[11.5px] mb-[16.5px] ml-[121.5px] mr-[120.5px] border-[rgba(0,219,208,1)]"></div>
              </div>

              {/* 2nd */}
              <div className="w-full max-w-[278px] mx-auto xl:ml-[27px] xl:mr-[23px] mt-[12.53px] bg-white shadow-lg rounded-xl border-[2px] border-white">
                <img src={Library} alt="" className="max-w-full" />
                <span className="block font-[Libre Baskerville] text-[rgba(214,126,9,1)] text-[18px] font-normal leading-[22px] pt-[21.47px] pl-[73.67px] pr-[73.33px]">
                  Blog Post One
                </span>
                <p className="text-center font-[Libre Baskerville] text-[rgba(55,75,92,1)] text-[14px] font-normal leading-[17px] pt-[10.53px] pl-[35px] pr-[25px]">
                  Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit
                  sed <br />
                  do eiusmod.
                </p>
                <span className=" w-[79px] text-center font-[Libre Baskerville] text-[rgba(55,75,92,1)] text-[14px] font-normal leading-[17px] pt-[17.47px] pl-[99.62px] pr-[99.38px]">
                  Read More
                </span>
                <div className="border-t-2 mt-[11.5px] mb-[16.5px] ml-[121.5px] mr-[120.5px] border-[rgba(0,219,208,1)]"></div>
              </div>

              {/* 3rd */}
              <div className="w-full max-w-[278px] mx-auto xl:ml-[27px] xl:mr-[23px] mt-[12.53px] bg-white shadow-lg rounded-xl border-[2px] border-white">
                <img src={Library} alt="" className="max-w-full" />
                <span className="block font-[Libre Baskerville] text-[rgba(214,126,9,1)] text-[18px] font-normal leading-[22px] pt-[21.47px] pl-[73.67px] pr-[73.33px]">
                  Blog Post One
                </span>
                <p className="text-center font-[Libre Baskerville] text-[rgba(55,75,92,1)] text-[14px] font-normal leading-[17px] pt-[10.53px] pl-[35px] pr-[25px]">
                  Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit
                  sed <br />
                  do eiusmod.
                </p>
                <span className=" w-[79px] text-center font-[Libre Baskerville] text-[rgba(55,75,92,1)] text-[14px] font-normal leading-[17px] pt-[17.47px] pl-[99.62px] pr-[99.38px]">
                  Read More
                </span>
                <div className="border-t-2 mt-[11.5px] mb-[16.5px] ml-[121.5px] mr-[120.5px] border-[rgba(0,219,208,1)]"></div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Blog;
