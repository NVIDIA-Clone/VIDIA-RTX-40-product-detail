//IMPORT PROVIDER TO GIVE CONTEXT
import { AdditionalProvider } from "./AdditionalContext";
import AdditionalList from "./AdditionalList";

const Additional = () => {
  return (
    <AdditionalProvider>
      <div
        id="additional-list-container"
        className="float-left justify-center items-center w-full  bg-[#1A1A1A] font-Sig flex flex-col text-white pt-[75px] pb-[90px]"
      >
        <AdditionalList />
      </div>
    </AdditionalProvider>
  );
};

export default Additional;
