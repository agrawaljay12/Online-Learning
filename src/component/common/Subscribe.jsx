const Subscribe = () => {
  return (
    <>
      <section>
        <div className="w-full max-w-[569px] ml-[391px] mr-[406px] mt-[132.58px]">
          <h1 className="w-[519px] h-[45px] text-[36px] font-[Libre Baskerville] leading-none text-[rgba(55,75,92,1)] font-normal ml-[33px] mr-[17px]">
            Subscribe to Our Newsletter
          </h1>
          <p className="text-center mt-[20px] text-[16px] font-[Libre Baskerville] leading-none w-[518px] h-[40px] text-[rgba(55,75,92,1)] font-normal mr-[1px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <form action="" className="flex mt-[54px] h-[69px] relative">
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
