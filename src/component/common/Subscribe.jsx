const Subscribe = () => {
  return (
    <>
      <section className="overflow-x-clip">
        <div className="w-full max-w-[569px] px-4 sm:px-6 xl:px-0 xl:ml-[391px] xl:mr-[406px] 2xl:mx-auto mt-12 lg:mt-[132.58px] sm:mt-[100px] mb-10 lg:mb-0 mx-auto">
          <h1 className="w-full lg:w-[519px] h-auto lg:h-[45px] xl:text-[36px] md:text-[32px] sm:text-[28px] text-[24px] text font-[Libre Baskerville] leading-tight lg:leading-none text-center lg:text-left text-[rgba(55,75,92,1)] font-normal ml-0 lg:ml-[33px] mr-0 lg:mr-[17px]">
            Subscribe to Our Newsletter
          </h1>
          <p className="text-center text-[14px] sm:text-[16px] xl:mt-[20px] md:mt-[16px] sm:mt-[14px] mt-[12px] font-[Libre Baskerville] leading-normal lg:leading-none w-full lg:w-[518px] h-auto lg:h-[40px] text-[rgba(55,75,92,1)] font-normal lg:mr-[1px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <form
            action=""
            className="flex md:flex-row flex-col mt-8 sm:mt-[54px] h-[52px] sm:h-[69px] relative"
          >
            <input
              type="text"
              placeholder="Enter your email address"
              className="pt-0 pb-0 sm:pt-[22px] sm:pb-[25px] pl-5 sm:pl-[39.68px] pr-[110px] sm:pr-[180px] xl:pr-[299.32px] text-[14px] sm:text-[18px] font-[Libre Baskerville] leading-none text-[rgba(55,75,92,1)] font-normal w-full h-[52px] sm:h-[69px] bg-[rgba(246,245,241,1)] rounded-l-full rounded-r-full"
            />
            <button className="w-[100px] sm:w-[167px] h-[52px] sm:h-[69px] absolute top-0 pt-0 pb-0 sm:pt-[22px] sm:pb-[25px] px-0 sm:pl-[39.68px] sm:pr-[37.54px] text-[14px] sm:text-[18px] font-[Libre Baskerville] leading-5 text-white right-0 xl:right-auto xl:left-[402px] font-normal bg-[rgba(255,145,0,1)] rounded-l-full rounded-r-full">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
