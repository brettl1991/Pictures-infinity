import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      <h1>Unsplash API - Infinite Scroll</h1>
      <div className="loader">
        <Image src="/loader.svg" alt="Loading" height={100} width={100} />
      </div>
    </div>
  );
};

export default HomePage;
