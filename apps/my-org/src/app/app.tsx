// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import { Button, Ui } from '@my-org/ui';

export function App() {
  return (
    <div>
      <h1 className={styles['title']}>Welcome to app!</h1>
      <Ui />
      <Button>Click me!</Button>
    </div>
  );
}

export default App;
