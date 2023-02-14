import React from 'react'

import Header from './header.jsx'
import Section1 from './section1.jsx'
import Section2 from './section2.jsx'
import Section3 from './section3.jsx'
import Section4 from './section4.jsx'
import Section5 from './section5.jsx'
import Section6 from './section6.jsx'
import Section7 from './section7.jsx'
import Section8 from './Section8.jsx'
import Section9 from './section9.jsx'
class Template extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <main>
                    <Section1/>
                    <Section2/>
                    <Section3/>
                    <Section4/>
                    <Section5/>
                    <Section6/>
                    <Section7/>
                    <Section8/>
                    <Section9/>
                </main>
            </div>
        )
    }

}

export default Template;
