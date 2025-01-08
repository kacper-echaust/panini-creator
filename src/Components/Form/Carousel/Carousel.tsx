import React, { forwardRef } from 'react';
import { LeftArrow } from '../../../assets/icons/leftArrow';
import { RightArrow } from '../../../assets/icons/rightArrow';
import { GrainIcon } from '../../../assets/icons/Icon=Grain';
import { WheatIcon } from '../../../assets/icons/Icon=Wheat';
import css from './Carousel.module.css';
import { breadVariants } from '../../../data/bread';
import { useFormContext } from 'react-hook-form';

type Props = {
  data: string[];
  name: string;
};
enum CarouselValues {
  'BACKWARDS',
  'FORWARDS',
}

const Carousel = forwardRef(({ data, name }: Props, ref) => {
  const { watch, setValue, register } = useFormContext();
  const value = watch(name);
  const isObject = value && typeof value === 'object';
  const dataIndex = isObject ? data.findIndex((item) => item === value.name) : data.indexOf(value);

  const changeIndex = (direction: CarouselValues) => {
    if (direction === CarouselValues.BACKWARDS && dataIndex > 0) {
      setValue(name, data[dataIndex - 1]);
    } else if (direction === CarouselValues.FORWARDS && dataIndex < data.length - 1) {
      setValue(name, data[dataIndex + 1]);
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

        <input disabled {...register(name)} />
      </div>
      <RightArrow
        onClick={() => {
          changeIndex(CarouselValues.FORWARDS);
        }}
      />
    </div>
  );
});

export { Carousel };
