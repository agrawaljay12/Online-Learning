import HeaderLogo from "../../assets/image/HeaderLogo.png";
import Library from "../../assets/image/Library.png";

const Blog = () => {
  return (
    <>
      <article>
        <div className="w-full max-w-[1015px] ml-[188px] mr-[163px] mt-[153px]">
          <img src={HeaderLogo} alt="" className="mx-auto" />
          <div className="mx-auto">
            <span className="block text-center font-[Libre Baskerville] text-[rgba(55,75,92,1)] text-[36px] font-normal leading-7 pt-[17.18px]">
              Read Our Blog
            </span>
            <p className="text-center font-[Libre Baskerville] text-[rgba(55,75,92,1)] text-[16px] font-normal leading-none pt-[19.53px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br />
              elit sed do eiusmod tempor incididunt ut labore et <br /> dolore
              magna aliqua.
            </p>
            {/* grid */}
            <div className="grid grid-cols-[328px_328px_328px] mt-[60px]">
              <div className="ml-[25px] mr-[25px] bg-white shadow-xl rounded-xl border-[2px] border-white">
                <img src={Library} alt="" />
                <span className="block text-center font-[Libre Baskerville] text-[rgba(214,126,9,1)] text-[18px] font-normal leading-7 pt-[21.47px] pl-[73.67px] pr-[73.33px]">
                  Blog Post One
                </span>
                <p className="text-center font-[Libre Baskerville] text-[rgba(55,75,92,1)] text-[14px] font-normal leading-none pt-[19.53px] pl-[35px] pr-[25px]">
                  Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit
                  sed <br />
                  do eiusmod.
                </p>
                <span className="text-center font-[Libre Baskerville] text-[rgba(55,75,92,1)] text-[14px] font-normal leading-7 pt-[19.53px] pl-[99.62px] pr-[99.38px]">
                  Read More
                </span>
                <div className="border-t-2 mt-[11.5px] mb-[16.5px] ml-[121.5px] mr-[120.5px] border-[rgba(0,219,208,1)]"></div>
              </div>
              <div className="ml-[25px]  mr-[25px] bg-white shadow-xl rounded-xl border-[2px] border-white">
                <img src={Library} alt="" />
                <span className="block text-center font-[Libre Baskerville] text-[rgba(214,126,9,1)] text-[18px] font-normal leading-7 pt-[21.47px] pl-[73.67px] pr-[73.33px]">
                  Blog Post One
                </span>
                <p className="text-center font-[Libre Baskerville] text-[rgba(55,75,92,1)] text-[14px] font-normal leading-none pt-[19.53px] pl-[35px] pr-[25px]">
                  Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit
                  sed <br />
                  do eiusmod.
                </p>
                <span className="text-center font-[Libre Baskerville] text-[rgba(55,75,92,1)] text-[14px] font-normal leading-7 pt-[19.53px] pl-[99.62px] pr-[99.38px]">
                  Read More
                </span>
                <div className="border-t-2 mt-[11.5px] mb-[16.5px] ml-[121.5px] mr-[120.5px] border-[rgba(0,219,208,1)]"></div>
              </div>
              <div className="ml-[25px]  mr-[25px] bg-white shadow-xl rounded-xl border-[2px] border-white">
                <img src={Library} alt="" />
                <span className="block text-center font-[Libre Baskerville] text-[rgba(214,126,9,1)] text-[18px] font-normal leading-7 pt-[21.47px] pl-[73.67px] pr-[73.33px]">
                  Blog Post One
                </span>
                <p className="text-center font-[Libre Baskerville] text-[rgba(55,75,92,1)] text-[14px] font-normal leading-none pt-[19.53px] pl-[35px] pr-[25px]">
                  Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit
                  sed <br />
                  do eiusmod.
                </p>
                <span className="font-[Libre Baskerville] text-[rgba(55,75,92,1)] text-[14px] font-normal leading-7 pt-[19.53px] pl-[99.62px] pr-[99.38px]">
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
