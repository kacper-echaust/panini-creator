import React, { forwardRef, useState } from 'react';
import css from './Select.module.css';
import { useFormContext } from 'react-hook-form';

type Props = {
  data: string[];
  name: string;
};

const Select = forwardRef(({ data, name }: Props, ref) => {
  const [showOption, setShowOption] = useState(false);
  const { watch, setValue } = useFormContext();
  const value = watch(name);
  const handleShowOption = () => {
    setShowOption(!showOption);
  };

  const handleSelect = (item: string) => {
    setValue(name, item);
    setShowOption(false);
  };
  return (
    <div className={`${css.customSelect} ${showOption && css.customSelectFocus}`}>
      <div className={css.select} onClick={handleShowOption}>
        {value}
        <div className={`${showOption && css.showOption} ${css.optionContainer}`}>
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className={css.option}
                onClick={() => {
                  handleSelect(item);
                }}
              >
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

export { Select };
