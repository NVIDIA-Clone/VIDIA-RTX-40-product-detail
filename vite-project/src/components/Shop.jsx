const Shop = () => {
  return (
    <>
      <div className="bg-black float-left h-[500px] w-full text-center justify-center">
        <h1 className="text-white text-[36px] mt-[70px] font-bold">Shop</h1>
        <h3 className="text-white text-[36px] mt-[50px] font-bold">
          GeForce RTX 4090
        </h3>
        <h2 className="text-white text-[26px] mt-[20px] font-bold">
          Starting at $1599.00
        </h2>
        <button
          className="text-[18px] mt-[20px] p-[13px_15px] bg-[#76b900] text-[black] font-bold text-base hover:bg-[#91c733]"
          type="button"
        >
          See All Buying Options
        </button>
      </div>
      <div className="bg-black float-left h-[600px] w-full text-center justify-center">
        <h1 className="text-white text-[31px] mt-[70px] font-bold">
          Also Available From
        </h1>
      </div>
    </>
  );
};

export default Shop;
