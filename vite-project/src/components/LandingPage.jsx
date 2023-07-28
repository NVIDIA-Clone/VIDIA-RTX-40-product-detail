import { useContext } from "react";
import LandingPageContext from "./LandingPageContext";

const LandingPage = () => {
  const data = useContext(LandingPageContext);
  // console.log(data);

  return (
    <>
      <div
        id="landing-page-container"
        className="flex h-[90vh] w-full justify-center items-center bg-[url('/images/geforce-rtx-4090-100vp-d.jpg')] bg-no-repeat bg-[length:100vw_120vh] bg-[position:center]"
      >
        <div
          id="landing-page"
          className="flex w-full h-100% justify-center pr-[40vw] pl-[15vw] "
        >
          <div
            id="product-text-container"
            className="text-[#ffffff] font-Sig text-left pb-[5rem] mb-[3rem]"
          >
            <h1 className="text-[3.75rem] font-bold p-[8px_15px]">
              {data.data.name}
            </h1>
            <h2 className="text-[36px] font-bold p-[8px_15px]">BEYOND FAST</h2>
            <p className=" text-[15px] leading-[1.666em] pr-[22vw] p-[8px_15px]">
              {data.data.description}
            </p>
            <h3 className="text-[26px] font-bold p-[8px_15px]">
              Starting at ${data.data.price}
            </h3>

            <button className="text-[18px] mt-[10px]">
              {" "}
              <a
                href="#"
                className="ml-[15px] p-[13px_15px] bg-[#76b900] text-[black] font-bold hover:bg-[#91c733]"
              >
                See All Buying Options
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
