import React from 'react'

import Header from './header.jsx'
import Section1 from './section1.jsx'
class Template extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <main>
                    <div className={'container'}>
                        <Section1/>
                    </div>
                </main>
            </div>
        )
    }

}

export default Template;
