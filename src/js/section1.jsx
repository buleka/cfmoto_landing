import React from 'react'

import ForestIcon from '../image/forest.svg'
import HelmIcon from '../image/helm.svg'
import MotoIcon from '../image/moto.svg'
import InstructorIcon from '../image/instructor.svg'


class Item extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={'grid__item'}>
                <div className={'advantages__item'}>
                    <div className={'advantages__img'}>
                        <img src={this.props.icon} className={'advantages__icon'}/>
                        <span className={'advantages__ellipse'}></span>
                    </div>
                    <div className={'advantages__text'}>
                        <h3 className={'advantages__title'}>{this.props.title}</h3>
                        <span className={'advantages__caption'}>{this.props.text}</span>
                    </div>
                </div>
            </div>
        )
    }
}


class Section1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className={'advantages'}>
                <div className={'container'}>
                    <div className={'grid'}>
                        <Item icon={ForestIcon} title={'Увлекательные экскурсии'} text={'Маршруты от лесных дорожек до полного бездорожья!'}/>
                        <Item icon={MotoIcon} title={'Надежная техника'} text={'18 квадроциклов всех японских брендов'}/>
                        <Item icon={HelmIcon} title={'Экипировка бесплатно'} text={'Необходимая экипировка выдается бесплатно'}/>
                        <Item icon={InstructorIcon} title={'Опытные инструктора'} text={'Обеспечат полную безопасность Вашего отдыха'}/>

                    </div>
                </div>
            </section>
        )
    }
}

export default Section1;
