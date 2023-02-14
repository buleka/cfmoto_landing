import React from 'react'


class Section3 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className={'section section--black'}>
                <h2 className={'section__title section__title--white'}>Затрудняетесь выбрать маршрут?</h2>
                <span className={'section__caption'}>Пройдите тест и мы поможем вам подобрать оптимальную под вас экскурсию</span>
                <a href={'/'} className={'button button--blue button--sm'}>Начать тест</a>
            </section>
        )
    }
}

export default Section3;
