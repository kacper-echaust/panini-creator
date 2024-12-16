import React, { ReactNode, useState } from 'react';
import css from './Switch.module.css';

type Props = {
  children: ReactNode;
};
type arrayComponentsType = {
  id: string;
  component: ReactNode;
};
const Switch = ({ children }: Props) => {
  const [isOn, setIsOn] = useState(true);
  const [arrayComponents, setArrayComponents] = useState<arrayComponentsType[]>([
    {
      id: Date.now().toString(),
      component: children,
    },
  ]);

  const handleSwitch = () => {
    setIsOn(!isOn);
  };
  const handleAdd = () => {
    if (!isOn) return;
    const newId = Date.now().toString();
    setArrayComponents((prevArray) => {
      return [
        ...prevArray,
        {
          id: newId,
          component: (
            <div id={newId} key={newId} className={css.addedComponent}>
              <div
                className={css.substractIcon}
                onClick={() => {
                  handleDelete(newId);
                }}
              ></div>
              {children}
            </div>
          ),
        },
      ];
    });
  };
  const handleDelete = (_id) => {
    setArrayComponents((prevArray) => {
      const filteredArray = prevArray.filter((component) => {
        if (React.isValidElement(component.component) && component.id) {
          return component.id !== _id;
        }
        return true;
      });
      return filteredArray;
    });
  };

  return (
    <>
      <div className={css.container}>
        <input type="checkbox" id={arrayComponents[0].id} onClick={handleSwitch} className={css.input} />
        <label htmlFor={arrayComponents[0].id} className={css.label}></label>
        <div className={css.addIcon} onClick={handleAdd}></div>
      </div>
      <div>
        {isOn &&
          arrayComponents.map((component) => {
            return component.component;
          })}
      </div>
    </>
  );
};

export { Switch };
