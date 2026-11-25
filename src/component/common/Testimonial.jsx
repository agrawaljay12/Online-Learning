import InvertedComma from "../../assets/image/InvertedComma.png";
import Client from "../../assets/image/Client.png";

const Testimonial = () => {
  return (
    <>
      <section className="overflow-x-clip">
        <div className="w-full max-w-[1187px] lg:w-[905px] lg:h-[500px] xl:h-[520px] xl:w-auto h-auto xl:ml-[90px] xl:mr-[89px] mt-16 sm:mt-20 lg:mt-[92.7px] md:mx-auto 2xl:mx-auto relative md:px-0 px-4">
          <div className=" absolute xl:w-[203px] xl:h-[203px] lg:w-[183px] lg:h-[183px] top-[35px] border-t-30 border-l-30 opacity-25 border-[rgba(255,145,0,1)] hidden lg:block"></div>
          <div className="xl:ml-[203px] mt-[16.93px] w-full max-w-[759px] lg:w-[650px] xl:w-[759px] mx-auto lg:mx-0 lg:ml-[60px]">
            <img
              src={InvertedComma}
              alt="Inverted Comma"
              className="block mx-auto lg:mx-0 lg:ml-[350px] "
            />
            <img
              src={Client}
              alt="Client"
              className="block mx-auto lg:mx-0 lg:ml-[321px] mt-[23.74px]"
            />
            <h3 className="text-center font-[LibreBaskerville] font-normal xl:text-[26px] md:text-[22px] sm:text-[20px] text-[18px] leading-none h-[32px] h-auto w-full lg:text-left lg:ml-[329px] mt-[16.93px] lg:w-[119px] mt-[16.93px]">
              Jane Doe
            </h3>
            <div className="flex justify-center lg:justify-start lg:ml-[315.85px] lg:mr-[317.27px] mt-[17.07px] w-full lg:w-[125.89px] h-[19.89px]">
              <div className="w-[19.89px] h-[19.89] text-[rgba(0,219,208,1)]">
                ☆
              </div>
              <div className="ml-[7.11px] w-[19.89px] h-[19.89px] text-[rgba(0,219,208,1)]">
                ☆
              </div>
              <div className="ml-[6.11px] w-[19.89px] h-[19.89px] text-[rgba(0,219,208,1)]">
                ☆
              </div>
              <div className="ml-[6.11px] w-[19.89px] h-[19.89px] text-[rgba(0,219,208,1)]">
                ☆
              </div>
              <div className="ml-[6.11px] w-[19.89px] h-[19.89px] text-[rgba(0,219,208,1)]">
                ☆
              </div>
            </div>
            <p className=" mt-[23px] text-center text-[rgba(55,75,92,1)] font-[LibreBaskerville] font-normal xl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] leading-none xl:w-[759px] w-full xl:h-[95px] h-auto lg:mr-[21px] lg:ml-[1px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt <br />
              ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit,
              <br /> sed do eiusmod tempor
            </p>
            <div className="flex justify-center lg:justify-start mb-10 lg:mb-[60px] lg:ml-[348px] lg:mr-[367px] mt-[31px] w-full lg:w-[125.89px] h-[19.89px] rounded-full">
              <div className="w-[19.89px] h-[19.89px]  bg-[rgba(0,219,208,1)] rounded-full"></div>
              <div className="ml-[7.11px] w-[19.89px] h-[19.89] border border-[rgba(0,219,208,1)] rounded-full"></div>
              <div className="ml-[6.11px] w-[19.89px] h-[19.89] border border-[rgba(0,219,208,1)] rounded-full"></div>
              <div className="ml-[6.11px] w-[19.89px] h-[19.89] border border-[rgba(0,219,208,1)] rounded-full"></div>
            </div>
          </div>
          <div className="absolute xl:w-[203px] xl:h-[203px] lg:w-[183px] lg:h-[183px] right-[89px] top-[317px] xl:left-[984px] lg:left-[720px] border-b-30 border-r-30 opacity-25 border-[rgba(255,145,0,1)] hidden lg:block"></div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
