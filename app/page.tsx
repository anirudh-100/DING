import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black text-white">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* Replace with your brand logo */}
        <Image
          className="dark:invert"
          src="/image/DING.png"
          alt="Your Brand Logo"
          width={180}
          height={38}
          priority
        />
        {/* Main Call to Action */}
        <h1 className="text-3xl font-semibold text-center sm:text-left mb-6">
          Welcome to Your Shopping Experience
        </h1>
        <p className="text-lg mb-8 text-center sm:text-left">
          Explore our exclusive collection of fashion, beauty, and lifestyle
          products tailored to your style.
        </p>
        
        {/* Categories or Featured Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full">
          <div className="p-4 bg-gray-800 rounded-lg text-center hover:bg-gray-700 cursor-pointer">
            <h3 className="text-xl">Men's Fashion</h3>
            <Image
              src="/Image/category-men.jpg"
              alt="Men's Fashion"
              width={200}
              height={150}
              className="rounded-md"
            />
          </div>
          <div className="p-4 bg-gray-800 rounded-lg text-center hover:bg-gray-700 cursor-pointer">
            <h3 className="text-xl">Women's Fashion</h3>
            <Image
              src="/image/category-women.jpg"
              alt="Women's Fashion"
              width={200}
              height={150}
              className="rounded-md"
            />
          </div>
          <div className="p-4 bg-gray-800 rounded-lg text-center hover:bg-gray-700 cursor-pointer">
            <h3 className="text-xl">Kids</h3>
            <Image
              src="/image/category-kids.jpg"
              alt="Kids"
              width={200}
              height={150}
              className="rounded-md"
            />
          </div>
          <div className="p-4 bg-gray-800 rounded-lg text-center hover:bg-gray-700 cursor-pointer">
            <h3 className="text-xl">Accessories</h3>
            <Image
              src="/image/category-accessories.jpg"
              alt="Accessories"
              width={200}
              height={150}
              className="rounded-md"
            />
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/shop-now"
          >
            Shop Now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/offers"
          >
            View Offers
          </a>
        </div>
      </main>
      
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm sm:text-base mt-8">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/about-us"
        >
          About Us
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/privacy-policy"
        >
          Privacy Policy
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/terms-of-service"
        >
          Terms of Service
        </a>
      </footer>
    </div>
  );
}
