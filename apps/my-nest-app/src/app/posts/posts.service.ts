import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from '@my-org/shared-types';
@Injectable()
export class PostsService {
  private readonly posts: Post[] = [
    {
      id: 1,
      title: 'First post',
      content: 'This is the content of the first post',
    },
    {
      id: 2,
      title: 'Second post',
      content: 'This is the content of the second post',
    },
    {
      id: 3,
      title: 'Third post',
      content: 'This is the content of the third post',
    },
  ];
  create(createPostDto: CreatePostDto) {
    console.log('🚀 ~ PostsService ~ create ~ createPostDto:', createPostDto);
    const newPost = { ...createPostDto, id: this.posts.length + 1 };
    console.log('🚀 ~ PostsService ~ create ~ newPost:', newPost);
    this.posts.push(newPost);
    return newPost;
  }

  findAll() {
    return this.posts;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
