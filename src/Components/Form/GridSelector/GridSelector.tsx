import React from 'react';
import css from './GridSelector.module.css';
import { useFieldArray, useFormContext } from 'react-hook-form';

type Props = {
  data: string[];
  name: string;
};

const GridSelector = ({ data, name }: Props) => {
  const { control, watch } = useFormContext();
  const { append, remove } = useFieldArray({
    control,
    name: name,
  });
  const selectedValues = watch(name) || [];

  const handleSelect = (item: string) => {
    const isSelected = selectedValues.some((field: { value: string }) => field.value === item);

    if (isSelected) {
      const indexToRemove = selectedValues.findIndex((field: { value: string }) => field.value === item);
      remove(indexToRemove);
    } else {
      append({ value: item });
    }
  };
  return (
    <div className={css.container}>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <input
              type="checkbox"
              id={`${name}-${index}`}
              checked={selectedValues.some((field: { value: string }) => field.value === item)}
              onChange={() => {
                handleSelect(item);
              }}
            />
            <label htmlFor={`${name}-${index}`}> {item}</label>
          </div>
        );
      })}
    </div>
  );
};

export { GridSelector };
