import React from 'react'

import Logo from '../image/logo.svg'

class Item extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className={'menu__item menu__item--l'}>
                <a className={'menu__link menu__link--black'} href={'/'}>{this.props.name}</a>
            </li>
        )
    }
}

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const titles = ['Маршруты', 'Галерея', 'Вопрос-Ответ', 'Контакты', 'УСЛОВИЯ', 'СПЕЦПРЕДЛОЖЕНИЯ'];

        return (
            <footer className={'footer'}>
                <div className={'container'}>
                    <div className={'footer__top'}>
                        <div className={'footer__logo'}>
                            <img src={Logo}/>
                        </div>
                        <nav className={'menu'}>
                            <ul className={'menu__list'}>
                                {titles.map((title, index) => {
                                    return (<Item name={title} key={index}/>)
                                })}
                            </ul>
                        </nav>
                    </div>
                    <div className={'footer__bottom'}>
                        © CFMOTO Experience Kuban. Внедорожный полигон CFMOTO и прокат квадроциклов в Геленджике
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
