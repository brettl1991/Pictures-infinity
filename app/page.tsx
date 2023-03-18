"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type ImgType = {
  alt_description: string;
  urls: { regular: string };
  id: string;
  links: { html: string };
};

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const count = 10;
    fetch(
      `https://api.unsplash.com/photos/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}&count=${count}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  console.log("data", data);

  return (
    <div>
      <h1>Unsplash API - Infinite Scroll</h1>
      <div className="loader">
        <Image src="/loader.svg" alt="Loading" height={100} width={100} />
      </div>

      {data.map((img: ImgType) => {
        return (
          <div key={img.id} className="image-container">
            <a href={img.links.html} target="_blank">
              <Image fill src={img.urls.regular} alt={img.alt_description} />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
