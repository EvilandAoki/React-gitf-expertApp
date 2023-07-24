import { useEffect, useState } from "react";
import getGifts from "../helpers/getGifts"
import { GiftItem } from "../giftCard/GiftItem";

export const GiftGrid = ({ category }) => {

    const [images, setimages] = useState([]);

    const getImages = async() => {
        const newImages = await getGifts(category);
        setimages(newImages);
    }


    useEffect(() => {
        getImages();
    }, [] )

    return (
        <>
           <h3>{category}</h3>

           <div className="Card-grid">
            {
                images.map( ( image ) => (
                    <GiftItem 
                    key={ image.id }
                    { ...image } 
                    />
                ))
            }
           </div>
        </>
    )
}
