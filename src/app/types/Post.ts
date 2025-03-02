export interface Post {
    _id: string;
    title: string;
    content: string;
    author: Author;
    tags: string[];
    views: 0,
    // comments: string[],
    createdAt: string,
    updatedAt: string,
    __v: 0
  }

  export interface Author {
    _id: string;
    username: string;
    email: string;
    __v: 0;
  }
  
