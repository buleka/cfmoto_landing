import React from 'react'

import Slider from "react-slick";

import RouteIcon from '../image/route.svg'
import StarIcon from '../image/star.svg'
import WatchIcon from '../image/watch.svg'
import DistanceIcon from '../image/distance.svg'
import RubIcon from '../image/rub.svg'

import Photo1 from '../photos/photo1.jpeg'
import Photo2 from '../photos/photo2.jpeg'
import Photo3 from '../photos/photo3.jpeg'


class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className={'list-icons'}>
                <li className={'list-icons__item'}><img src={WatchIcon}/>Время в пути:<b> {this.props.time}</b></li>
                <li className={'list-icons__item'}><img src={DistanceIcon}/>Расстояние: <b>{this.props.distance}</b>
                </li>
                <li className={'list-icons__item'}><img src={StarIcon}/>Сложность: <b>{this.props.complexity}</b></li>
            </ul>
        )
    }
}

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const settings = {
            infinite: true,
            slidesToShow: 1,
            speed: 500,
            arrows: false,
            variableWidth: true,
            dots: true
        };

        return (
            <div className={'description'}>
                <div className={'grid-half' + (this.props.externalClass ? this.props.externalClass : '')}>
                    <div className={'grid-half__item'}>
                        <h3 className={'description__title'}>{this.props.title}</h3>
                        <div className={'description__price'}>{this.props.price} <img src={RubIcon}/></div>
                        <List time={this.props.time} distance={this.props.distance} complexity={this.props.complexity}/>
                        <div className={'description__route-wrapper'}>
                            <h4 className={'description__title description__title--sm'}>маршрут <img src={RouteIcon}/>
                            </h4>
                            <div className={'description__route'}>
                                {this.props.text}
                            </div>
                            <div className={'button-wrapper'}>
                                <a className={'button button--white'} href={'/'}>Подробнее</a>
                                <a className={'button button--blue'} href={'/'}>Забронировать</a>
                            </div>
                        </div>
                    </div>
                    <div className={'grid-half__item'}>
                        <Slider {...settings}>
                            <div><img src={Photo1}/></div>
                            <div><img src={Photo2}/></div>
                            <div><img src={Photo3}/></div>
                            <div><img src={Photo1}/></div>
                            {/*<div><img src={Photo2}/></div>*/}
                            {/*<div><img src={Photo3}/></div>*/}
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}


class Section2 extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const text1 = 'Смотровая - Родник - Камень Джигита - Адербиевка - Гора Нексис - \n' +
            '-Грозовые Ворота - Шашлыки - Цыгельский водопад (чаша любви) -\n' +
            '-Форсаж';
        const text2 = 'Смотровая - Родник - Камень Джигита - Адербиевка - Гора Нексис - \n' +
            '-Грозовые Ворота - Шашлыки - Цыгельский водопад (чаша любви) -\n' +
            '-Форсаж';
        const text3 = 'Форсаж - Голубая бухта – Заброшенная Тур База – Сухогруз Рио –\n' +
            '- Форсаж';
        return (
            <section className={'section section--gray'}>
                <div className={'container'}>
                    <h2 className={'section__title'}>Наши маршруты</h2>
                </div>
                <div className={''}>
                    <Item title={'БАЗОВЫЙ'} price={'от 4000'}
                          time={'1,5 - 2 часа'} distance={'20 - 25 км'} complexity={'5***'}
                          text={text1}/>
                    <Item title={'РАСШИРЕННЫЙ'} price={'от 16000'}
                          time={'6 - 8 часа'} distance={'60 - 70 км'} complexity={'5***'}
                          text={text2} externalClass={' grid--revert'}/>
                    <Item title={'Experience'} price={'от от 7000'}
                          time={'4 часа'} distance={'40 - 50 км'} complexity={'5***'}
                          text={text3}/>
                </div>
            </section>
        )
    }

}

export default Section2;
