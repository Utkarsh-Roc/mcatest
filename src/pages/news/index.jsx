import React from 'react'
import LightTheme from '../../layouts/Light'
import Works2Slider from '../../components/Works2-slider'

function News() {
    const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);
  React.useEffect(() => {
    setInterval(() => {
      if (fixedHeader.current) {
        var slidHeight = fixedHeader.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
  }, [MainContent]);
  return (
    <LightTheme>
      <div ref={MainContent} className="main-content">
        <Works2Slider />
      </div>
  </LightTheme>
  )
}

export default News