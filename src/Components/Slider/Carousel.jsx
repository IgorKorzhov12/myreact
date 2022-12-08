import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {useState} from "react";
import classes from "./Carousel.module.css";
import p1 from "../../Images/1.jpg"
import p2 from "../../Images/2.jpg"
import p3 from "../../Images/3.jpg"
import p4 from "../../Images/4.jpg"

export default function Carousel() {

  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
  }

  const hotelCards = [
    {
      imageSrc: p1,
      title: 'Тренировка дома',
      description: 'Готовая программа тренировок для дома',
      features: ['Большой набор упражнений', 'Описание к ним', 'Рекомендации по питанию'],
    },
    {
      imageSrc: p2,
      title: 'Лучшие кардио упражнения',
      description: 'Сборник лучших кардио упражнений',
      features: ['Большой набор упражнений', 'Описание к ним', 'Рекомендации о времени выполнения'],
    },
    {
      imageSrc: p3,
      title: 'Лучшие упражнения для развития гибкости',
      description: 'Сборник лучших упражнений для растяжки',
      features: ['Большой набор упражнений', 'Описание к ним', 'Рекомендации о времени выполнения'],
    },
    {
      imageSrc: p4,
      title: 'Лучшие упражнения для рук',
      description: 'Сборник лучших упражнений для рук',
      features: ['Большой набор упражнений', 'Описание к ним', 'Рекомендации о времени выполнения'],
    },
  ]

  return (
    <div>
      <div className={classes.container}>
        <div>
          <h1>Программы тренировок и упражнения</h1>
        </div>
        <button className={classes.button} onClick={sliderRef?.slickPrev}>
          Prev
        </button>
        <button className={classes.button} onClick={sliderRef?.slickNext}>
          Next
        </button>
      </div>
      <Slider ref={setSliderRef} {...sliderSettings}>
        {hotelCards.map((card, index) => (
          <div key={index}>
            <div className={classes.container}>
              <div className={classes.item}>
                <div>
                  <img className={classes.img} src={card.imageSrc} alt="1"/>
                </div>
                <div>
                  <h2>{card.title}</h2>
                  <p>{card.description}</p>
                  <ul>
                    {card.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <button>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}