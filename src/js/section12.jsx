import React from 'react'

import PhoneIcon from '../image/phone-c.svg'
import MailIcon from '../image/mail-c.svg'
import WatchIcon from '../image/watch-c.svg'
import HomeIcon from '../image/home.svg'
import WhIcon from '../image/whatsap.svg'
import InstIcon from '../image/insta.svg'

import MapImage from '../image/map.png'

class Section12 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className={'section section--contacts'}>
                <div className={'container'}>
                    <div className={'grid grid-half'}>
                        <div className={'contacts-wrapper'}>
                            <h2 className={'section__title section__title--left'}>Контакты</h2>
                            <ul className={'contacts grid grid-half'}>
                                <li className={'contacts__item'}>
                                    <div className={'contacts__icon'}><img src={HomeIcon}/></div>
                                    <span>Город Геленджик</span>
                                </li>
                                <li className={'contacts__item'}>
                                    <div className={'contacts__icon'}><img src={PhoneIcon}/></div>
                                    <a href={'tel:+7 928 428-00-62'}>+7 928 428-00-62</a>
                                </li>
                                <li className={'contacts__item'}>
                                    <div className={'contacts__icon'}><img src={MailIcon}/></div>
                                    <a href={'mail:experience@groupgrand.ru'}>experience@groupgrand.ru</a>
                                </li>
                                <li className={'contacts__item'}>
                                    <div className={'contacts__icon'}><img src={WatchIcon}/></div>
                                    <div>Пн - Пт: 9:00 - 18:00<br/>
                                        Сб: 9:00 - 17:00<br/>
                                        Вс - выходной
                                    </div>
                                </li>
                            </ul>
                            <div className={'grid grid-half'}>
                                <div className={'contacts__social'}>
                                    <h6 className={'contacts__social__title'}>Написать нам:</h6>
                                    <div className={'contacts__social__links'}>
                                        <a href={'/'}><img src={WhIcon}/></a>
                                        <a href={'/'}><img src={InstIcon}/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={MapImage} className={'contacts__map'}/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Section12;
