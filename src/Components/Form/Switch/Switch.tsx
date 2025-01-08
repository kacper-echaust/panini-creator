import React, { ReactNode, useState } from 'react';
import css from './Switch.module.css';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';

type Props = {
  children: ReactNode;
  switchName: string;
};
const Switch = ({ children, switchName }: Props) => {
  const [isOn, setIsOn] = useState(true);
  const { control } = useFormContext();
  const { append, remove, fields, replace } = useFieldArray({
    control,
    name: switchName,
  });
  const handleSwitch = () => {
    setIsOn(!isOn);
    replace([fields[0]]);
  };
  const handleAdd = () => {
    append({ value: fields[0]['value'] });
  };
  const handleDelete = (index: number) => {
    remove(index);
  };
  return (
    <>
      <div className={css.container}>
        <input type="checkbox" id={switchName} onClick={handleSwitch} className={css.input} />
        <label htmlFor={switchName} className={css.label}></label>
        <div className={css.addIcon} onClick={handleAdd}></div>
      </div>
      {isOn && (
        <div className={css.childrenContainer}>
          {fields.map((item, index) => (
            <Controller
              key={item.id}
              name={`${switchName}.${index}.value`}
              control={control}
              render={({ field }) => (
                <div className={css.addedComponent}>
                  {index >= 1 && (
                    <div
                      className={css.substractIcon}
                      onClick={() => {
                        handleDelete(index);
                      }}
                    ></div>
                  )}
                  {React.cloneElement(children as React.ReactElement, { ...field })}
                </div>
              )}
            />
          ))}
        </div>
      )}
    </>
  );
};

export { Switch };
