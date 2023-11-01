import AnimatedPage from "../../Components/Animations/AnimatedPage";
import LightGallery from "lightgallery/react";
import './Media.css';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';
import { media } from "../../utils/images";

const Media = () => {
  const onInit = () => {
    console.log('lightgallery has been initialized');
  }
  return (
    <AnimatedPage>
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
      >
        {media.map((image, index) => {
          return (
            <a href={image.src} key={index}>
              <img src={image.src} alt={image.alt} />
            </a>
          )
        })}
      </LightGallery>
    </AnimatedPage>
  )
}

export default Media;