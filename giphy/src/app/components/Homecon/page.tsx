"use client";
import Image from "next/image";
import Link from "next/link";

const Homecon = () => {
 
  return (
    <>
        <div className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 flex  flex-wrap-reverse	flex-row items-center justify-center h-screen">
		<div
          className="basis-1/2 ">
          <div className="container mx-auto px-6 ">
            <h2 className="text-4xl font-bold mb-2 text-white">
              Smart GIF Monitoring Wristwatch!
            </h2>
            <h3 className="text-2xl mb-8 text-gray-200">
			Best queality of GIF available you can access on a single click and each click on new GIF will you  provide 
            </h3>
            <button
              className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider text-blue-800"
            >
              GIF SEARCH
            </button>
          </div>
        </div>
		<div className="basis-1/2">
		<Image
                  src="/images/homeright.gif"
                  alt="logo"
                  width={140}
                  height={30}
                  className="hidden w-full dark:block"
                />
		</div>
		</div>
        {/* <section className="container mx-auto px-6 p-10">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Features
          </h2>
          <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2">
              <h4 className="text-3xl text-gray-800 font-bold mb-3">
                Exercise Metrics
              </h4>
              <p className="text-gray-600 mb-8">
                Our Smart Health Monitoring Wristwatch is able to capture you vitals
                while you exercise. You can create different category of exercises
                and can track your vitals on the go.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img src="assets/health.svg" alt="Monitoring" />
            </div>
          </div>
          <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2">
              <img src="assets/report.svg" alt="Reporting" />
            </div>
            <div className="w-full md:w-1/2 pl-10">
              <h4 className="text-3xl text-gray-800 font-bold mb-3">
                Reporting
              </h4>
              <p className="text-gray-600 mb-8">
                Our Smart Health Monitoring Wristwatch can generate a comprehensive
                report on your vitals depending on your settings either daily,
                weekly, monthly, quarterly or yearly.
              </p>
            </div>
          </div>
          <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2">
              <h4 className="text-3xl text-gray-800 font-bold mb-3">
                Syncing
              </h4>
              <p className="text-gray-600 mb-8">
                Our Smart Health Monitoring Wristwatch allows you to sync data
                across all your mobile devices whether iOS, Android or Windows OS
                and also to your laptop whether MacOS, GNU/Linux or Windows OS.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img src="assets/sync.svg" alt="Syncing" />
            </div>
          </div>
        </section>
        <section className="bg-gray-100">
          <div className="container mx-auto px-6 py-20">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
              Testimonials
            </h2>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/3 px-2 mb-4">
                <div className="bg-white rounded shadow py-2">
                  <p className="text-gray-800 text-base px-6 mb-5">
                    Monitoring and tracking my health vitals anywhere I go and on
                    any platform I use has never been easier.
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">
                    John Doe
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-2 mb-4">
                <div className="bg-white rounded shadow py-2">
                  <p className="text-gray-800 text-base px-6 mb-5">
                    As an Athlete, this is the perfect product for me. I wear my
                    Smart Health Monitoring Wristwatch everywhere I go, even in the
                    bathroom since it's waterproof.
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">
                    Jane Doe
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-2 mb-4">
                <div className="bg-white rounded shadow py-2">
                  <p className="text-gray-800 text-base px-6 mb-5">
                    I don't regret buying this wearble gadget. One of the best
                    gadgets I own!.
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">
                    James Doe
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="bg-customBlue" >
          <div className="container mx-auto px-6 text-center py-20">
            <h2 className="mb-6 text-4xl font-bold text-center text-white">
              Limited in Stock
            </h2>
            <h3 className="my-4 text-2xl text-white">
              Get yourself the Smart Health Monitoring Wristwatch!
            </h3>
            <button
              className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider"
            >
              Pre Order
            </button>
          </div>
        </section> */}
    
    </>
  );
};

export default Homecon;
