const Subscribe = () => {
  return (
    <>
      <section>
        <div className="w-full max-w-[569px] xl:ml-[391px] xl:mr-[406px] lg:mt-[132.58px] sm:mt-[100px] mx-auto">
          <h1 className="w-[519px] h-[45px] xl:text-[36px] md:text-[32px] sm:text-[28px] text-[24px] text font-[Libre Baskerville] leading-none text-[rgba(55,75,92,1)] font-normal ml-[33px] mr-[17px]">
            Subscribe to Our Newsletter
          </h1>
          <p className="text-center xl:mt-[20px] md:mt-[16px] sm:mt-[14px] mt-[12px] font-[Libre Baskerville] leading-none w-[518px] h-[40px] text-[rgba(55,75,92,1)] font-normal mr-[1px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <form
            action=""
            className="flex md:flex-row flex-col mt-[54px] h-[69px] relative"
          >
            <input
              type="text"
              placeholder="Enter your email address"
              className="pt-[22px] pb-[25px] pl-[39.68px] pr-[299.32px] text-[18px] font-[Libre Baskerville] leading-none text-[rgba(55,75,92,1)] font-normal w-[569px] h-[69pxs] bg-[rgba(246,245,241,1)] rounded-l-full rounded-r-full"
            />
            <button className=" w-[167px] h-[69px] absolute pt-[22px] pb-[25px] pl-[39.68px] pr-[37.54px] text-[18px] font-[Libre Baskerville] leading-5 text-white left-[402px] font-normal bg-[rgba(255,145,0,1)] rounded-l-full rounded-r-full">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
