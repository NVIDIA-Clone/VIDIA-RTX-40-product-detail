import { useContext } from 'react';
import LandingPageContext from './LandingPageContext';

const LandingPage = () => {
  const data = useContext(LandingPageContext);
  console.log(data);

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
          <div id="product-text-container" className="text-[#e8e6e3]">
            <h1></h1>
            <h2>Second Heading</h2>
            <p>Product Description</p>
            <h3>Price</h3>
            <button>See All Buying Options</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
