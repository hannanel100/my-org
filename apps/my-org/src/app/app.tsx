// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import { Button, Card, Ui } from '@my-org/ui';

export function App() {
  return (
    <div>
      <h1 className={styles['title']}>Welcome to app!</h1>
      <Ui />
      <Button>Click me!</Button>
      <Card title="Welcome to my card" description="This is my card" />
    </div>
  );
}

export default App;
