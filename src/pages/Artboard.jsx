import HomePage1 from "../assets/image/HomePage1.png";
import HomePage2 from "../assets/image/HomePage2.png";

const ArtBoard = () => {
  return (
    <>
      <section>
        <div className="relative">
          <img src={HomePage1} alt="" className="absolute left-[60px]" />
          <img
            src={HomePage2}
            alt=""
            className="absolute left-[587px] top-[-1647px]"
          />
        </div>
      </section>
    </>
  );
};

export default ArtBoard;
