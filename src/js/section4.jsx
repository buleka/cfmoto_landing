import React from 'react'
import Photo1 from "../photos/pg1.jpeg";
import Photo2 from "../photos/pg2.jpeg";
import Photo3 from "../photos/pg3.jpeg";

import Flickity from "react-flickity-component";


function Carousel(props){
    const flickityOptions = {
        initialIndex: 0,
        prevNextButtons: false,
        wrapAround: true,
        groupCells: true
    }

    return (
        <Flickity
            className={'carousel carousel--m'}
            elementType={'div'}
            options={flickityOptions}
            disableImagesLoaded={false}
            reloadOnUpdate
            static
            >
            <div className={'carousel-cell'}><img src={Photo1}/></div>
            <div className={'carousel-cell'}><img src={Photo2}/></div>
            <div className={'carousel-cell'}><img src={Photo3}/></div>
            <div className={'carousel-cell'}><img src={Photo1}/></div>
            <div className={'carousel-cell'}><img src={Photo2}/></div>
            <div className={'carousel-cell'}><img src={Photo3}/></div>
            <div className={'carousel-cell'}><img src={Photo1}/></div>
            <div className={'carousel-cell'}><img src={Photo2}/></div>
            <div className={'carousel-cell'}><img src={Photo3}/></div>
        </Flickity>
    )
}

class Section4 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className={'section section--white'}>
                <h2 className={'section__title'}>Фото</h2>
                <Carousel/>
            </section>
        )
    }
}

export default Section4;
