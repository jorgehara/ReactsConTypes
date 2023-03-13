import React from "react";
import { useRef, useEffect, useState } from "react";
import type { ImgHTMLAttributes } from "react";
import './LazyImage.css'

type LazyImageProps = { src: string };
type ImageNative = ImgHTMLAttributes<HTMLImageElement>;
type Props = LazyImageProps & ImageNative



export const LazyImage = ({ src, ...imgProps }: Props): JSX.Element => {
  // array simple
  // const [images, setImages] = useState<Array<string>>([
  //   `https://randomfox.ca/images/${random()}.jpg`, ])

  // array con object
  // const [images, setImages] = useState<Array<ImageItem>>([
  //   { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },

  // // array vacio a llenar
  // const [images, setImages] = useState<Array<ImageItem>>([ ])

  // useRef
  const node = useRef<HTMLImageElement>(null);
  const [currentSrc, setCurrentSrc] = useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );

  useEffect(() => {
    // nuevo observador
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // onIntersection --> console.log
        if (!entry.isIntersecting || !node.current) {
          return;
        }
        setCurrentSrc(src)
      });
    });
    // observador nodo
    if (node.current) {
      observer.observe(node.current)
    }

    // desconectar
    return () => {
      observer.disconnect();
    }
  }, [src])

  return (
    <>
      <img
        ref={node}
        src={currentSrc}
        className='rounded bg-light sizeImage'
        {...imgProps}
        />
    </>
  )
}