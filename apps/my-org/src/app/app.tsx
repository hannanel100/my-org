// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import Posts from './Posts';
import { useEffect, useState } from 'react';
import { Post } from '@my-org/shared-types';
export function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/posts');
      const posts: Post[] = await res.json();
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1 className={styles['title']}>Welcome to app!</h1>
      <Posts posts={posts} />
    </div>
  );
}

export default App;
