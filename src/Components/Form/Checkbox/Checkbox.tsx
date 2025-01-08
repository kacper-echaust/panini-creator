import { useFieldArray, useFormContext } from 'react-hook-form';
import css from './CheckBox.module.css';
import React from 'react';

type Props = {
  name: string;
  className?: string;
  valueName: string;
};

const Checkbox = ({ valueName, className, name }: Props) => {
  const { watch, control } = useFormContext();
  const { append, remove } = useFieldArray({
    control,
    name: name,
  });
  const selectedValues = watch(name) || [];
  const handleSelect = (item: String) => {
    const indexToRemove = selectedValues.findIndex((field: { value: string }) => field.value === item);
    const isSelected = selectedValues.some((field: { value: string }) => field.value === item);
    if (name === 'serving') {
      if (isSelected) return;
      if (selectedValues.length === 1) {
        remove(0);
        return append({ value: item });
      }
    }
    if (isSelected) {
      remove(indexToRemove);
    } else {
      append({ value: item });
    }
  };

  return (
    <>
      <label className={className} htmlFor={`${name}-${valueName}`}>
        {valueName}
      </label>
      <input
        className={`${css.input} ${className}`}
        type="checkbox"
        id={`${name}-${valueName}`}
        checked={selectedValues.some((field: { value: string }) => field.value === valueName)}
        onChange={() => {
          handleSelect(valueName);
        }}
      />
    </>
  );
};

export { Checkbox };
