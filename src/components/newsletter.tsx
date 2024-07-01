import Image from "next/image";

const Newsletter = () => {
  return (
    <div className="relative w-full h-auto lg:h-72 mb-32 px-5 flex justify-center my-5">
      <div className="relative w-full h-auto lg:h-72 bg-gradient-to-r from-violet-700 via-fuchsia-600 to-rose-400 rounded-3xl text-white xl:max-w-6xl">
        <Image
          src="/newsletter-bg.png"
          className="absolute top-0 left-0 h-full w-full mix-blend-color-burn object-cover rounded-3xl"
          alt="newsletter"
          height={400}
          width={600}
        />
        <div className="px-8 py-8 z-10">
          <p className="text-4xl w-full text-left mb-4">Join our Newsletter</p>
          <div className="flex flex-col md:flex-row gap-y-4">
            <div className="w-full flex flex-col justfify-start gap-6 z-10">
              <p className="text-sm xl:text-base font-normal text-left me-0 xl:me-28">
                Stay in the loop with our latest updates and exclusive offers.
                Join our newsletter to receive fresh insights, project
                highlights, and special promotions directly in your inbox.
                <br />
                Don&apos;t miss out - subscribe today!
              </p>
              <div className="relative w-full md:w-1/2 text-left">
                <input
                  type="text"
                  className="textfield w-full p-3 text-base border border-gray-300 rounded outline-none bg-transparent text-white relative"
                  id="textfield"
                  placeholder=" "
                />
                <label className="textfield-label absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-200 ease-out text-gray-400 pointer-events-none px-1">
                  Enter your email
                </label>
              </div>
            </div>
            <button className="w-full z-10 md:w-80 h-12 lg:h-16 bg-black px-0 xl:px-24 lg:px-16 rounded-xl font-700 text-xl">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
