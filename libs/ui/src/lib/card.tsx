import styles from './card.module.css';

/* eslint-disable-next-line */
export interface CardProps {
  title: string;
  description: string;
}

export function Card(props: CardProps) {
  return (
    <div className={styles['card']}>
      <h1 className={styles['card-title']}>{props.title}</h1>
      <p className={styles['card-content']}>{props.description}</p>
      <button className={styles['card-button']}>Click me!</button>
    </div>
  );
}

export default Card;
