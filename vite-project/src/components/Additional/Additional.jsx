//IMPORT PROVIDER TO GIVE CONTEXT
import { AdditionalProvider } from './AdditionalContext';
import AdditionalList from './AdditionalList';

const Additional = () => {
  return (
    <AdditionalProvider>
      <div
        id="additional-list-container"
        className="justify-center items-center w-full h-[100vh] bg-[#1A1A1A] font-Sig flex flex-col text-white"
      >
        <AdditionalList />
      </div>
    </AdditionalProvider>
  );
};

export default Additional;
