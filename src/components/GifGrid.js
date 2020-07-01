import React, {useState, useEffect} from 'react'
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';


export const GifGrid = ({category}) => {


    const [images, setImages] = useState([]);

    useEffect( () => {
        getGifs(category).then( imgs => setImages(imgs));
    },[]);


    
    return (
        <>
            <div className="card-grid">
                <h3 className="center">{category}</h3>
                <ol>
                    {
                        images.map((img) => {
                            return <GifGridItem key={img.id} {...img}/>
                        })
                    }
                </ol>
            </div>
        </>
    )
}
