import React from 'react'
import Photo1 from '../photos/pc-1.jpeg'
import Photo2 from '../photos/pc-2.jpeg'
import Photo3 from '../photos/pc-3.jpeg'
import Photo4 from '../photos/pc-4.jpeg'

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className={'persons__item'}>
                <div className={'persons__img'}>
                    <img src={this.props.photo}/>
                </div>
                <div className={'persons__title-wrapper'}>
                    <div className={'persons__title'}>{this.props.name}</div>
                    <div className={'persons__caption'}>{this.props.position}</div>
                </div>
            </li>
        )
    }
}


class Section6 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className={'section section--gray--sm'}>
                <h2 className={'section__title'}>Наша команда</h2>
               <div className={'container'}>
                   <ul className={'persons grid'}>
                       <Item photo={Photo1} name={'Юлиана'} position={'руководитель'}/>
                       <Item photo={Photo2} name={'Максим'} position={'старший инструктор'}/>
                       <Item photo={Photo3} name={'Кристина'} position={'администратор'}/>
                       <Item photo={Photo4} name={'Юрий'} position={'старший механик'}/>

                   </ul>
               </div>

            </section>
        )
    }
}

export default Section6;
