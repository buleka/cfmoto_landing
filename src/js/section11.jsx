import React from 'react'

import Photo1 from '../photos/photo-add-1.jpeg'

class Item extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className={'additional__item'}>
                <img src={this.props.image} className={'additional__img'}/>
                <h5 className={'additional__title'}>{this.props.title}</h5>
            </div>
        )
    }
}


class Section11 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const info = [
            {
                title: 'Эвакуация, ремонт квадроциклов',
                image: Photo1
            },
            {
                title: 'Фото, видеосъемка',
                image: Photo1
            },
            {
                title: 'Транспортировка техники',
                image: Photo1
            },
            {
                title: 'Заправка, чекап, мойка',
                image: Photo1
            },
            {
                title: 'Корпоративы, тимбилдинги',
                image: Photo1
            },
            {
                title: 'Выездной кейтеринг',
                image: Photo1
            },
            {
                title: 'Индивидуальные маршруты',
                image: Photo1
            },
            {
                title: 'Услуги гида',
                image: Photo1
            }
        ]

        return (
            <section className={'section'}>
                <h2 className={'section__title'}>Дополнительные услуги</h2>
                <div className={'container'}>
                    <div className={'grid'}>
                        {info.map((item, index) => {
                            return (<Item title={item.title} image={item.image} key={index}/>)
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

export default Section11;
