import React from 'react'

import ChatIcon from '../image/chat.svg'


import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


function RenderAccordion(props){

    return(
        <Accordion preExpanded={['a']}>
            <AccordionItem uuid="a">
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Актуальный вопрос?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Актуальный вопрос?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Актуальный вопрос?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Актуальный вопрос?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    )
}

class Section10 extends React.Component {
    render() {
        return (
            <section className={'section'}>
                <h2 className={'section__title'}>Вопросы-ответы</h2>
                <div className={'container container--sm'}>
                    <div className={'grid grid-half'}>
                        <div>
                          <RenderAccordion/>
                        </div>
                        <div className={'chat-wrapper'}>
                           <img src={ChatIcon}/>
                            <h4 className={'chat__title'}>Есть вопросы?</h4>
                            <p className={'chat__caption'}>
                                Не стесняйтесь обращаться к нам,<br/>
                                если у вас есть какие-либо вопросы, предложения<br/>
                                или идеи для сотрудничества
                            </p>
                            <a href={'/'} className={'button button--blue button--sm'}>Задать вопрос</a>
                        </div>

                    </div>
                </div>

            </section>
        )
    }

}

export default Section10;
