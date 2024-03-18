// UploadImage component
'use client'
import React, { useEffect, useState } from 'react';
import UploadPhoto from "../components/component/upload-photo";
import Productcard from "../components/component/Productcard";
interface ProductCardProps {
    images: string;
    name: string;
    store: string;
    likeness: string;
    price:number[];
    url: string;
    catid: number;
  }
export default function UploadImage() {
    const storedImageData = localStorage.getItem('imageData');
    const products = storedImageData ? JSON.parse(storedImageData)?.products || [] : [];
    console.log(storedImageData)
    console.log(products);

    return (
        <>
            <UploadPhoto />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {products.map((product:ProductCardProps) => (
                    
                    <Productcard
                        
                        Plink={product.images[0]}
                        name={product.name}
                        seller={product.store}
                        likeness={parseFloat(product.likeness)}
                        price={product.price[0]}
                        Rlink={`https://anemo.productsearch.app/click?u=${product.url}&s=${product.store}&p=web&cid=${product.catid}`}
                        onClick={() => { }}
                    />
                ))}
            </div>
        </>
    );
}
