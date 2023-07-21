import { useContext } from 'react';
import { LandingPageProvider } from './LandingPageContext';

const LandingPage = () => {
  const data = useContext(LandingPageProvider);
  console.log(data);

  return (
    <>
      <div
        id="landing-page-container"
        className="flex h-[100vh] w-full justify-center items-center bg-[url('/images/geforce-rtx-4090-100vp-d.jpg')] bg-no-repeat bg-[length:100vw_100%]"
      >
        <div
          id="landing-page"
          className="flex w-full h-100% justify-center pr-[50vw]"
        >
          <div id="product-text-container" className="text-[#e8e6e3]">
            <h1>{data}</h1>
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

/*Context Folder
Create Context files
Import USESTATE and CREATE Context
create your context
const [name] = createContext()
export const [name] = ({children}) => {
    //Define State 

    //Functionality /functions

    return <[Name].provider value={{
        tasks
    }}>
        {children}
    </[Name].provider>
}

export default [name]

In the component import UseContext from react
In the component import the context input from the context
Wrap the provider in the App
*/
