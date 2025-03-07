export default async function PostDetail({ params }) {
      const { id } = await params;
      const response = await fetch(`http://localhost/posts/${id}`);
      const post = await response.json();
    if (!post) {
      return (
        <div className="w-full md:w-60 h-60 m-auto rounded-lg shadow-md mb-6 mt-6 flex flex-col justify-center items-center bg-darkSeaGreen p-6">
          <p className="text-white text-lg md:text-xl lg:text-2xl font-medium mb-2 text-center">
            Publicación no encontrada
          </p>
        </div>
      );
    }
  
    return (
      <div className="w-full md:w-2/3 m-auto rounded-lg shadow-md mb-6 mt-6 flex flex-col justify-center items-center bg-darkSeaGreen p-6">
        <h1 className="text-white text-2xl font-bold mb-4">{post.title}</h1>
        <p className="text-white text-lg md:text-xl lg:text-2xl mb-4">{post.content}</p>
        <p className="text-white text-sm mb-2">Autor: {post.author.username}</p>
        {/* <p className="text-white text-sm">Etiquetas: {post.tags.join(', ')}</p> */}
      </div>
    );
  }