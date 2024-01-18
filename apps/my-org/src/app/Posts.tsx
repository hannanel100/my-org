import { Post } from '@my-org/shared-types';
import styles from './Posts.module.css';
import { Button, Card } from '@my-org/ui';
/* eslint-disable-next-line */
export interface PostsProps {
  posts: Post[];
}

export function Posts(props: PostsProps) {
  return (
    <div className={styles['container']}>
      {props.posts.map((post) => (
        <Card key={post.id} title={post.title} description={post.content} />
      ))}
      <Button>Learn more</Button>
    </div>
  );
}

export default Posts;
