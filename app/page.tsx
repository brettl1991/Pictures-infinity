import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      <h1>Unsplash API - Infinite Scroll</h1>
      <div className="loader">
        <Image src="/loader.svg" alt="Loading" height={100} width={100} />
      </div>
      <div className="image-container">
        <Image
          fill
          src="https://images.unsplash.com/photo-1677432658720-3d84f9d657b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
          alt="tryingoutimage"
        />
      </div>
    </div>
  );
};

export default HomePage;
