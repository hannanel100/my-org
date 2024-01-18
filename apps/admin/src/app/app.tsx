// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react';
import styles from './app.module.css';

import { Post } from '@my-org/shared-types';

type NewPost = Omit<Post, 'id'>;
export function App() {
  const [newPost, setNewPost] = useState<NewPost | null>(null);
  const sendPost = async (post: NewPost) => {
    console.log('🚀 ~ sendPost ~ post:', post);

    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    });
    const data = await res.json();
    console.log(data);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const createdPost: NewPost = {
      title: formData.get('title') as string,
      content: formData.get('content') as string,
    };
    console.log('🚀 ~ handleSubmit ~ createdPost:', createdPost);
    setNewPost(createdPost);
    sendPost(createdPost);
  };

  return (
    <div>
      {/* form to add a new post */}
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="content" placeholder="content" />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}

export default App;
