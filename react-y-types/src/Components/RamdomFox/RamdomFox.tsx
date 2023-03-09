import React, { MouseEventHandler, useState } from 'react'
import type { FunctionComponent, FC } from 'react'
import './RamdomFox.css'

type Props = { image: string }

// genera un ID
const generateId = () => Math.random().toString(36).substr(2, 9);
// Suffle de image
const random = () => Math.floor(Math.random() * 123) + 1;

type ImageItem =
  {
    id: string,
    url: string
  };

  
  
  export const RamdomFox = ({ image }: Props): JSX.Element => {
    // array simple
    // const [images, setImages] = useState<Array<string>>([
      //   `https://randomfox.ca/images/${random()}.jpg`, ])
      
      // array con object
      // const [images, setImages] = useState<Array<ImageItem>>([
      //   { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },

      // array vacio a llenar
      const [images, setImages] = useState<Array<ImageItem>>([ ])
      
      const addNewFox : MouseEventHandler<HTMLButtonElement> = (event) => {
        const newImageItem : ImageItem ={
          id : generateId(),
          url : `https://randomfox.ca/images/${random()}.jpg`
        };
        setImages([...images, newImageItem]);
      };

      

      return (
    <>
      <div className="container text-center ">
        <button className='btn btn-primary mb-4' onClick={addNewFox} >addNewFox</button>
        <div className="row gap-4 col-sm-12 col-md-12 col-lg-12 align-items-start">
          {images.map(({ id, url }) =>
          (
            <>
              <div key={id}
                className="row 
                col-sm-12 col-md-6 col-lg-4
                sizeImage rounded"
              >
                <img
                  className='rounded'
                  src={url} alt="aqui aparece una imagen de un zorro" />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

