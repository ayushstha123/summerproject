export default function Hero(){
    return (<section>
        <div className=" relative flex flex-col py-24 lg:p-0 lg:flex-col lg:pb-0">
      <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
             We are providing a top-notch experience.
              </p>
            </div>
            <h2 className="max-w-lg mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
            Bringing Culinary Excellence to Your Occasions
            </h2>
            <p className="text-base text-justify font-thin text-gray-700 md:text-lg">
            Welcome to <span className="font-bold">Nice Catering and Food Services</span>, where gastronomy meets celebration. We are passionate about transforming your special moments into unforgettable experiences through the art of exquisite catering. Whether it's an intimate gathering, a corporate affair, or a grand celebration, our culinary experts curate exceptional menus that delight the senses.
            </p>
          </div>
          <div className="flex flex-col gap-10 items-center md:flex-row">
            <a
              href="/"
              className="bg-gray-100 inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-black transition duration-100 rounded shadow-lg md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none hover:bg-gray-300 hover:text-black"
            >
              Book Now <svg className="ml-5"  xmlns="http://www.w3.org/2000/svg" width="24" height="24">
  <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/>
  <path d="M9.293 8.707 12.586 12l-3.293 3.293 1.414 1.414L15.414 12l-4.707-4.707-1.414 1.414z"/>
</svg>
            </a>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
      <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <img
          className=" object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
          src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0ZXJpbmd8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </div>
    </div>   
    </section>

    )
}