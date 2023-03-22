"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type ImgType = {
  alt_description: string;
  urls: { regular: string };
  id: string;
  links: { html: string };
};

const HomePage = () => {
  const [data, setData] = useState<ImgType[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const getPhotos = () => {
    let count = 5;
    setIsLoading(true);
    fetch(
      `https://api.unsplash.com/photos/random/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}&count=${count}`
    )
      .then((res) => res.json())
      .then((imgs) => {
        setData([...data, ...imgs]);
      });
    setIsLoading(false);
  };

  console.log("data", data);

  useEffect(() => {
    getPhotos();
  }, []);

  window.addEventListener("scroll", () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 1000
    ) {
      getPhotos();
    }
  });

  return (
    <div>
      <h1>Unsplash API - Infinite Scroll</h1>
      {isLoading && (
        <div className="loader">
          <Image src="/loader.svg" alt="Loading" height={100} width={100} />
        </div>
      )}
      {data.map((img: ImgType, index) => {
        return (
          <div key={img.id + index} className="image-container">
            <Link href={img.links.html} target="_blank">
              <Image fill src={img.urls.regular} alt={img.alt_description} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
