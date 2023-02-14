import React from 'react'
import parse from 'html-react-parser';

import Icon from '../image/icon-check.svg'

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'conditions__item'}>
                <img src={Icon} className={'conditions__icon'}/>
                <div className={'conditions__text'}>{parse(this.props.text)}</div>
            </div>
        )
    }
}

class Section7 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const textArray = [
            'При прокате или аренде строго соблюдать правила техники безопасности и все требования инструктора!',
            'К управлению <b>НЕ ДОПУСКАЮТСЯ</b> лица младше 16 лет и лица в алкогольном опьянении!',
            'Распивать спиртные напитки во время проката, аренды <b>ЗАПРЕЩЕНО!</b> (После? На ваше усмотрение)',
            'Управление осуществляйте в меру своих сил и возможностей. Не переоценивайте себя! Это опасно!!!',
            'Перед каждым катанием опытный инструктор научит Вас основам управления и будет сопровождать на протяжении всего маршрута.',
            'При прокате или аренде строго соблюдать правила техники безопасности и все требования инструктора!'
        ]



        return (
            <section className={'section section--gray-3'}>
                <h2 className={'section__title'}>Условия предоставления
                    услуг</h2>
                <div className={'container'}>
                    <div className={'grid grid--third'}>
                        {textArray.map((item) => {
                            return(<Item text={item}/>)
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

export default Section7;
