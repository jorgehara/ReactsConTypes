import React, { MouseEventHandler, useState } from 'react';
import './App.css';
import { LazyImage } from './Components/LazyImage/LazyImage';

// generate simple unique id
const generateId = (): string => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

// random number from 1 to 122
const random = () => Math.floor(Math.random() * 122) + 1;

type ImageItem = {
  id: string;
  url: string;
};




export const App = (): JSX.Element => {

  const [images, setImages] = useState<Array<ImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = () => {
    const id = generateId();
    const url = `https://randomfox.ca/images/${random()}.jpg`;
    setImages([...images, { id, url }]);
  };


  return (
    <div className="App">
      <h1>Home!</h1>
      <button
        onClick={addNewFox}
        className="btn btn-primary text-white rounded mb-4 justify-content-center"
      >Add new fox</button>
      <div className="container text-center justify-content-center">
        <div className="row gap-4 col-sm-12 col-md-12 col-lg-12 sizeImage rounded align-items-center justify-content-center">
          <div
            className="row gap-4 col-sm-12 col-md-10 col-lg-12 sizeImage rounded justify-content-center"
          >
            {images.map(({ id, url }) => (
              <div 
              className="row gap-4 col-sm-12 col-md-6 col-lg-6 rounded sizeImage justify-content-center" 
              key={id}>
                <LazyImage 
                src={url} 
                width="350"
                height="auto"
                alt="aqui aparece una imagen de un zorro"
                onClick={() => console.log('hey')} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
};