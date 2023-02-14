import React from 'react'

import PlayIcon from '../image/play.svg'
import VideoPreview from '../photos/video-img.jpeg'
class Section4 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className={'section section--video'}>
                <div className={'container'}>
                    <div className={'video'}>
                        <img src={VideoPreview} className={'video__preview'}/>
                        <span className={'video__title'}>Название видео</span>
                        <img src={PlayIcon} className={'video__play'}/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Section4;
