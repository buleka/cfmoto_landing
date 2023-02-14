import React from 'react'

import Header from './header.jsx'
import Section1 from './section1.jsx'
import Section2 from './section2.jsx'
import Section3 from './section3.jsx'
import Section4 from './section4.jsx'
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
                </main>
            </div>
        )
    }

}

export default Template;
