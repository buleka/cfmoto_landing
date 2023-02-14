import React from 'react'
import parse from "html-react-parser";

import Image1 from '../photos/image1.png'
import Image2 from '../photos/image2.png'

class Item extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={'special__item'}>
                <div className={'special__image'}>
                    <img src={this.props.image}/>
                </div>
                <div className={'special__text-wrapper'}>
                    <h3 className={'special__title'}>{parse(this.props.title)}</h3>
                    <span className={'special__caption'}>{this.props.caption}</span>
                    {this.props.isButton ? <a href={'/'} className={'button button--white button--sm'}>Подробнее</a> : ''}
                </div>
            </div>
        )
    }

}


class Section8 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className={'section section--special'}>
                <h2 className={'section__title'}>Спецпредложения</h2>
                <div className={'container'}>
                    <div className={'grid grid-half'}>
                        <Item image={Image1} title={'<b>Скидка 10%</b><br/>на День Рождение'}
                              caption={'в честь Дня Рождения - дарим имениннику скидку 10%'}/>
                        <Item image={Image2} title={'<b>Скидка 10%</b>'}
                              caption={'клиентам Ex-Kuban на услуги Загородного клуба Ягода Малина'} isButton={true}/>
                    </div>
                </div>

            </section>
        )
    }
}

export default Section8;
