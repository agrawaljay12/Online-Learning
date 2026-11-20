import InvertedComma from "../../assets/image/InvertedComma.png";
import Client from "../../assets/image/Client.png";

const Testimonial = () => {
  return (
    <>
      <section>
        <div className="w-full max-w-[1187px] h-[520px] xl:ml-[90px] ml-[45px] xl:mr-[89px] mt-[92.7px] relative">
          <div className=" absolute w-[203px] h-[203px] top-[35px] border-t-30 border-l-30 opacity-25 border-[rgba(255,145,0,1)]"></div>
          <div className="xl:ml-[203px] mt-[16.93px] w-[759px]">
            <img src={InvertedComma} alt="" className="mx-auto" />
            <img src={Client} alt="" className="ml-[321px] mt-[23.74px]" />
            <h3 className="font-[Libre Baskerville] font-normal text-[26px] leading-none h-[32px] w-[119px] ml-[328px] mr-[312px] mt-[16.93px]">
              Jane Doe
            </h3>
            <div className="flex ml-[315.85px] mr-[317.27px] mt-[17.07px] w-[125.89px] h-[19.89]">
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
            <p className=" mt-[23px] text-center text-[rgba(55,75,92,1)] font-[Libre Baskerville] font-normal text-[16px] leading-none w-[759px] h-[95px] mr-[21px] ml-[1px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt <br />
              ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit,
              <br /> sed do eiusmod tempor
            </p>
            <div className="flex mb-[60px] ml-[348px] mr-[367px] mt-[31px] w-[125.89px] h-[19.89] rounded-full">
              <div className="w-[19.89px] h-[19.89px]  bg-[rgba(0,219,208,1)] rounded-full"></div>
              <div className="ml-[7.11px] w-[19.89px] h-[19.89] border border-[rgba(0,219,208,1)] rounded-full"></div>
              <div className="ml-[6.11px] w-[19.89px] h-[19.89] border border-[rgba(0,219,208,1)] rounded-full"></div>
              <div className="ml-[6.11px] w-[19.89px] h-[19.89] border border-[rgba(0,219,208,1)] rounded-full"></div>
            </div>
          </div>
          <div className=" absolute w-[203px] h-[203px] right-[89px] top-[317px] xl:left-[984px] border-b-30 border-r-30 opacity-25 border-[rgba(255,145,0,1)]"></div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
