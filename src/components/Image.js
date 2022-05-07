import React from 'react';
import { Suspense } from 'react';
import { useImage } from 'react-image';





const Image = ({src, alt, Loader}) => {


    return (
        <Suspense fallback={<Loader />}>
            <ImageMain src={src} alt={alt} Loader={Loader} />
        </Suspense >
    )
}


const ImageMain = ({src:Src, alt})=> {

    const {src} = useImage ({
        srcList: Src
    });

    return <img src={src} alt={alt}/>
}

export default Image;