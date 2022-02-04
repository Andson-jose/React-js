import React, { useState, useEffect } from 'react';
import './index.css';

import img1 from '../../images/slides/img1.png';
import img2 from '../../images/slides/img2.png';
import img3 from '../../images/slides/img3.png';
import img4 from '../../images/slides/img4.png';

export default function Carousel(){

    const imagens = [img1, img2, img3, img4];
    const [indice, setIndice] = useState(0);

    useEffect(()=> {
        const interval = setInterval(()=> {
            setIndice((prevCounter)=> prevCounter + 1 > imagens.length-1 ? 0 : prevCounter + 1);
        }, 3000);

        return ()=> clearInterval(interval);
    }, []);


    return(
    <>
        <img src={imagens[indice]} className="img" alt="logo" />
        <div className="text">
            <div className="title">Marcenas mattis egestas</div>
            <div className="sub-title">
                Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.
            </div>
        </div>
        <div>
            <div onClick={() => { setIndice(0) }} className={`circle ${indice === 0 ? 'circle-selected' : ''}`}></div>
            <div onClick={() => { setIndice(1) }} className={`circle ${indice === 1 ? 'circle-selected' : ''}`}></div>
            <div onClick={() => { setIndice(2) }} className={`circle ${indice === 2 ? 'circle-selected' : ''}`}></div>
            <div onClick={() => { setIndice(3) }} className={`circle ${indice === 3 ? 'circle-selected' : ''}`}></div>
        </div>
    </>
    );
}



