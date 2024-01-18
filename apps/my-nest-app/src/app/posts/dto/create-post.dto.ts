import { Post } from '@my-org/shared-types';

export class CreatePostDto implements Omit<Post, 'id'> {
  title: string;
  content: string;
}
