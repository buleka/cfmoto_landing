import React from 'react'
import Slider from "react-slick";



//Icons
import Logo from '../image/logo.svg'
import PhoneIcon from '../image/phone.svg'
import ArrowIcon from '../image/arrow-header.svg'

//Photo
import Background from '../photos/background.jpeg'




class Item extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className={'menu__item'}>
                <a className={'menu__link'} href={'/'}>{this.props.name}</a>
            </li>
        )
    }

}

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const titles = ['Маршруты', 'Галерея', 'Вопрос-Ответ', 'Контакты', 'Забронировать'];
        const list = titles.map((title, index) => {
            return (<Item name={title} key={index}/>)
        })

        const settings = {
            dots: true,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            swipeToSlide: true,
        };


        return (
            <header className={'header'}>


                <div className={'header__background'}>
                    <Slider {...settings}>
                        <div><img src={Background}/></div>
                        <div><img src={Background}/></div>
                        <div><img src={Background}/></div>
                        <div><img src={Background}/></div>
                        <div><img src={Background}/></div>
                        <div><img src={Background}/></div>

                    </Slider>
                </div>
                <div className={'container'}>
                    <div className={'header__top'}>
                        <div className={'header__logo_wrapper'}>
                            <a href={'/'}>
                                <img src={Logo} className={'header__logo'}/>
                            </a>
                        </div>
                        <div>
                            <nav className={'menu'}>
                                <ul className={'menu__list'}>
                                    {list}
                                </ul>
                            </nav>
                        </div>
                        <div className={'header__phone_wrapper'}>
                            <a href={'tel: +7 928 333 26 45'} className={'header__phone'}>
                                <img src={PhoneIcon} className={'header__phone_icon'}/>
                                +7 928 333 26 45</a>
                            <a href={'/'} className={'header__button-gray'}>Перезвоните мне</a>
                        </div>
                    </div>
                    <div className={'header__title_wrapper'}>
                        <h1 className={'header__title'}>Экскурсии на квадроциклах в Геленджике</h1>
                        <span className={'header__caption'}>приезжайте за новыми ощущениями и эмоциями!</span>
                        <a href={'/'} className={'header__button'}>Подобрать маршрут
                            <span className={'header__button_icon_wrapper'}>
                                <img src={ArrowIcon} className={'header__button_icon'}/>
                            </span>
                        </a>
                    </div>
                </div>
            </header>
        )
    }

}

export default Header;
