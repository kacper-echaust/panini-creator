import React from 'react';
import css from './GridSelector.module.css';

type Props = {
  data: string[];
};

const GridSelector = ({ data }: Props) => {
  return (
    <div className={css.container}>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <input type="checkbox" id={item} />
            <label htmlFor={item}> {item}</label>
          </div>
        );
      })}
    </div>
  );
};

export { GridSelector };
