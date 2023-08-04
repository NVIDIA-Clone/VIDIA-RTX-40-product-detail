// import { useContext } from 'react';
// import LandingPageContext from './LandingPageContext';
import { useSelector, useDispatch } from 'react-redux';
import React, {useEffect} from 'react'
import { fetchProductsData } from '../redux/slices/productSlice';

const LandingPage = () => {
  const dispatch = useDispatch();

  const landPageURL = `https://vidia-copy.onrender.com/product`

  useEffect( () => {
    dispatch(fetchProductsData(landPageURL))
  }, [dispatch, landPageURL])

  const data = useSelector((state) => {
    return state.product.data
  })

  if (!data) {
    return <div>Loading...</div>
  }
  return (
    <>
      <div
        id="landing-page-container"
        className="flex justify-center items-center h-[90vh] w-full bg-[url('/images/geforce-rtx-4090-100vp-d.jpg')] bg-cover bg-no-repeat bg-[position:center]"
      >
        <div id="landing-page" className="flex max-w-[100rem] p-[0_11rem]">
          <div
            id="product-text-container"
            className="text-[#ffffff] font-Sig text-left"
          >
            <h1 className="text-[3.75rem] font-bold p-[8px_0]">
              {data?.name || "Loading"}
            </h1>
            <h2 className="text-[36px] font-bold p-[8px_0]">BEYOND FAST</h2>
            <p className="text-[15px] leading-[1.666em] p-[8px_0] mr-[43vw] ">
              {data?.description || "Loading"}
            </p>
            <h3 className="text-[26px] font-bold p-[8px_0]">
              Starting at ${data?.price || "...Loading"}
            </h3>
            <div className="p-[8px_0] mb-[8rem]">
              <button className="text-[18px]">
                {' '}
                <a
                  href="#"
                  className="bg-[#76b900] text-[black] p-[8px_15px] font-bold hover:bg-[#91c733]"
                >
                  See All Buying Options
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LandingPage;
