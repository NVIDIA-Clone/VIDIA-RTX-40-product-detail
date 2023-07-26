const HeaderLogo = () => {
  return (
    <>
      <div id="logoContainer" className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="40px"
        >
          <path
            fill="#76b900"
            d="M17.896 17.596v-2.862c.282-.018.565-.035.848-.035 7.844-.247 12.985 6.749 12.985 6.749s-5.548 7.702-11.5 7.702a7.297 7.297 0 0 1-2.315-.37v-8.693c3.056.37 3.674 1.714 5.494 4.77l4.081-3.427s-2.985-3.904-8.003-3.904a11.974 11.974 0 0 0-1.59.07m0-9.47v4.276l.848-.053c10.9-.371 18.02 8.94 18.02 8.94s-8.161 9.928-16.66 9.928c-.742 0-1.466-.07-2.19-.194v2.65c.6.07 1.219.124 1.82.124 7.913 0 13.638-4.046 19.184-8.816.92.742 4.682 2.527 5.46 3.304-5.265 4.416-17.543 7.968-24.504 7.968a17.513 17.513 0 0 1-1.944-.107v3.728h30.069V8.127zm0 20.653v2.261c-7.314-1.308-9.345-8.922-9.345-8.922s3.515-3.886 9.345-4.523v2.474h-.017c-3.057-.371-5.46 2.491-5.46 2.491s1.361 4.823 5.477 6.219m-12.985-6.98s4.328-6.394 13.003-7.065v-2.332C8.304 13.179 0 21.305 0 21.305s4.7 13.604 17.896 14.84v-2.473C8.215 32.47 4.911 21.8 4.911 21.8z"
          />
        </svg>
        <a className="h-[44px] w-[80px] font-extrabold py-2 ml-0.5 text-xl">
          VIDIA
        </a>
      </div>
    </>
  );
};

export default HeaderLogo;
