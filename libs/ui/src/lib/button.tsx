import styles from './button.module.css';

/* eslint-disable-next-line */
export interface ButtonProps extends React.PropsWithChildren {}

export function Button(props: ButtonProps) {
  return <button className={styles['button']}>{props.children}</button>;
}

export default Button;
