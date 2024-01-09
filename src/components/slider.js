import React, { useCallback, useState } from 'react';
import Gallery from 'devextreme-react/gallery';
import { gallery } from '../data/data';


export const Slider = () => {
    const [loop, setLoop] = useState(true);
    const [slideShow, setSlideShow] = useState(true);
    const [showNavButtons, setShowNavButtons] = useState(true);
    const [showIndicator, setShowIndicator] = useState(true);
    // const onLoopChanged = useCallback(
    //     (data) => {
    //       setLoop(data.value);
    //     },
    //     [setLoop],
    //   );
    //   const onSlideShowChanged = useCallback(
    //     (data) => {
    //       setSlideShow(data.value);
    //     },
    //     [setSlideShow],
    //   );
    //   const onShowNavButtonsChanged = useCallback(
    //     (data) => {
    //       setShowNavButtons(data.value);
    //     },
    //     [setShowNavButtons],
    //   );
    //   const onShowIndicatorChanged = useCallback(
    //     (data) => {
    //       setShowIndicator(data.value);
    //     },
    //     [setShowIndicator],
    //   );
  return (
    <>
{/* 
                <div id="header-carousel" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" style={{height: "410px"}}>
                            <img class="img-fluid" src={carousel1} alt="Imhgkage"/>
                            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div class="p-3" style={{maxWidth: "700px"}}>
                                    <h4 class="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                                    <h3 class="display-4 text-white font-weight-semi-bold mb-4">Fashionable Dress</h3>
                                    <a href="#dfhfgtj" class="btn btn-light py-2 px-3">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item" style={{height: "410px"}}>
                            <img class="img-fluid" src={carouse2} alt="Imagvfgjme"/>
                            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div class="p-3" style={{maxWidth: "700px"}}>
                                    <h4 class="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                                    <h3 class="display-4 text-white font-weight-semi-bold mb-4">Reasonable Price</h3>
                                    <a href="#fcgjvjg" class="btn btn-light py-2 px-3">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#header-carousel" data-slide="prev">
                        <div class="btn btn-dark" style={{width: "45px", height: "45px"}}>
                            <span class="carousel-control-prev-icon mb-n2"></span>
                        </div>
                    </a>
                    <a class="carousel-control-next" href="#header-carousel" data-slide="next">
                        <div class="btn btn-dark" style={{width: "45px", height: "45px"}}>
                            <span class="carousel-control-next-icon mb-n2"></span>
                        </div>
                    </a>
                </div> */}
    <div>
      <div className="widget-container">
        <Gallery
          id="gallery"
          dataSource={gallery}
          height={410}
          slideshowDelay={slideShow ? 2000 : 0}
          loop={loop}
          showNavButtons={showNavButtons}
          showIndicator={showIndicator}
        />
      </div>
    </div>

                </>
  )
}



