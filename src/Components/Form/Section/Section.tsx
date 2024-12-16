import css from './Section.module.css';
import React, { ReactNode } from 'react';

type Props = {
  name: string;
  children: ReactNode;
};

const Section = ({ name, children }: Props) => {
  return (
    <section className={css.section}>
      <label className={css.title}>{name}</label>
      {children}
    </section>
  );
};

export { Section };
