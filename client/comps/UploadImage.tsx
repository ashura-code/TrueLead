
import React from 'react';

import UploadPhoto from "../components/component/upload-photo";
import Productcard  from '@/components/component/Productcard';

export default function UploadImage() {
    return (
        <>
            <UploadPhoto />
            <Productcard 
                Plink={"https://cloud.google.com/static/vision/product-search/docs/images/quickstart-search_for_matching_images_SML.jpg"} 
                name='adithya' 
                seller='ebay' 
                likeness={3000} 
                price={20}  
            />
        </>
    );
}
