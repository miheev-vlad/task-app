import { useState } from 'react';
import styles from './slider.module.scss';


export function Slider({ imgArr }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const plusSlide = (imgArr) => {
    if (slideIndex === imgArr.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };
  const minusSlide = (imgArr) => {
    if (slideIndex === 0) {
      setSlideIndex(imgArr.length - 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  return (
    <div className={styles.slider}>
      <div className={styles.item}>
        <figure className="image">
          <img src={imgArr[slideIndex]} alt="product" />
        </figure>
      </div>
        {imgArr.length !== 1 && (
          <>
            <a className={styles.prev} onClick={() => minusSlide(imgArr)}>
              &#10094;
            </a>
            <a className={styles.next} onClick={() => plusSlide(imgArr)}>
              &#10095;
            </a>
          </>
        )}
    </div>
  );
};
