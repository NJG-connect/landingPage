import React from 'react';
import styles from './TextInput.module.css';

interface Props {
  onChange: (value: string) => void;
  label: string;
  value?: string;
}



function TextInput({ onChange, label, value = "" }: Props) {
  return (
    <div className={styles.group}>
      <input
        type="text" required
        onChange={(
          ev: React.ChangeEvent<HTMLInputElement>,
        ): void => onChange(ev.target.value)}
        value={value}
      />
      <span className={styles.bar}></span>
      <label>{label}</label>
    </div>
  )

}


export default TextInput;