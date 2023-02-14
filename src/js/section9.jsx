import React from 'react'
import CertificateImage from '../photos/certificate.png'

class Section9 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className={'section section--certificate'}>
                <h2 className={'section__title section__title--s'}>Подарочный сертификат</h2>
                <div className={'container'}>
                    <div className={'certificate'}>
                        <div className={'certificate__caption'}>Хотите сделать оригинальный подарок? <br/>Подарите незабываемые эмоции - лучший подарок!</div>
                        <div className={'grid grid-half'}>
                            <div className={''}>
                              <div className={'certificate__text'}>
                                  Хотите удивить своих близких оригинальным подарком? Подарочный сертификат на экскурсию на
                                  квадроциклах станет не просто интересным подарком, но и реальной возможностью приблизить Ваших
                                  друзей и близких к новому увлечению.
                              </div>
                                <a href={'/'} className={'button button--white'}>Подберем сертификат для вас</a>
                            </div>
                            <div>
                                <img src={CertificateImage}/>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}

export default Section9;
