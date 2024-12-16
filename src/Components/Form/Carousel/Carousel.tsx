import React, { useState } from 'react';
import { LeftArrow } from '../../../assets/icons/leftArrow';
import { RightArrow } from '../../../assets/icons/rightArrow';
import { GrainIcon } from '../../../assets/icons/Icon=Grain';
import { WheatIcon } from '../../../assets/icons/Icon=Wheat';
import css from './Carousel.module.css';
import { breadVariants } from '../../../data/bread';

type Props = {
  data: string[];
};
enum CarouselValues {
  'BACKWARDS',
  'FORWARDS',
}
const Carousel = ({ data }: Props) => {
  const [dataIndex, setDataIndex] = useState(0);
  const changeIndex = (direction: CarouselValues) => {
    if (direction === CarouselValues.BACKWARDS) {
      if (dataIndex === 0) return;
      setDataIndex((prevDataIndex) => prevDataIndex - 1);
    } else if (direction === CarouselValues.FORWARDS) {
      if (dataIndex === data.length - 1) return;
      setDataIndex((prevDataIndex) => prevDataIndex + 1);
    }
  };
  const breadIcon = dataIndex == 0 ? <GrainIcon /> : <WheatIcon />;
  return (
    <div className={css.container}>
      <LeftArrow
        onClick={() => {
          changeIndex(CarouselValues.BACKWARDS);
        }}
      />
      <div className={css.inputContainer}>
        {data === breadVariants && breadIcon}

        <input type="text" value={data[dataIndex]} disabled />
      </div>
      <RightArrow
        onClick={() => {
          changeIndex(CarouselValues.FORWARDS);
        }}
      />
    </div>
  );
};

export { Carousel };
