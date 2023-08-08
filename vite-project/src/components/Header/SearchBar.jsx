import { useState } from "react";

const SearchBar = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible((prevState) => !prevState);
  };

  return (
    <div className="flex">
      <div className="flex items-center">
        {isSearchVisible ? (
          <svg
            onClick={toggleSearch}
            className="block w-8 h-8 cursor-pointer"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 10.5858L7.70711 6.29289L6.29289 7.70711L10.5858 12L6.29289 16.2929L7.70711 17.7071L12 13.4142L16.2929 17.7071L17.7071 16.2929L13.4142 12L17.7071 7.70711L16.2929 6.29289L12 10.5858Z"
              fill="#696969"
            />
          </svg>
        ) : (
          <svg
            onClick={toggleSearch}
            className="block w-8 h-8 cursor-pointer"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 10.5C15 12.9853 12.9853 15 10.5 15C8.01472 15 6 12.9853 6 10.5C6 8.01472 8.01472 6 10.5 6C12.9853 6 15 8.01472 15 10.5ZM14.1793 15.2399C13.1632 16.0297 11.8865 16.5 10.5 16.5C7.18629 16.5 4.5 13.8137 4.5 10.5C4.5 7.18629 7.18629 4.5 10.5 4.5C13.8137 4.5 16.5 7.18629 16.5 10.5C16.5 11.8865 16.0297 13.1632 15.2399 14.1792L20.0304 18.9697L18.9697 20.0303L14.1793 15.2399Z"
              fill="#696969"
            />
          </svg>
        )}
      </div>
      {isSearchVisible && (
        <div className="absolute left-[-350px] flex items-center w-[400px] p-2 bg-white border border-gray-300 shadow-md top-12 z-[552]">
          <input
            type="text"
            placeholder="       Search Vidia"
            className="flex-1 w-full text-gray-700 bg-transparent border-none outline-none"
          />
          <svg
            className="w-8 h-8 cursor-pointer"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="hover:stroke-[#76b900]"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.5 11.1455C5.49956 8.21437 7.56975 5.69108 10.4445 5.11883C13.3193 4.54659 16.198 6.08477 17.32 8.79267C18.4421 11.5006 17.495 14.624 15.058 16.2528C12.621 17.8815 9.37287 17.562 7.3 15.4895C6.14763 14.3376 5.50014 12.775 5.5 11.1455Z"
              stroke="#D1CFC6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="hover:stroke-[#76b900]"
              d="M15.989 15.4905L19.5 19.0015"
              stroke="#D1CFC6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
