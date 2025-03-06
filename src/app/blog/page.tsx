import React, { useEffect } from 'react';
import { FaFile } from 'react-icons/fa';
import Link from 'next/link';
import { Post } from '../types/Post';

export default async function Aboutme() {
  let error: string | null = null;
  let posts: Post[] = [];

  try {
    const response = await fetch('http://localhost/posts');
    if (!response.ok) {
      throw new Error('Error al cargar las publicaciones');
    }
    posts = await response.json();
  } catch (err: unknown) {
    error = (err as Error).message;
  }

  return (
  <div className="flex justify-center items-center h-screen">
      {error || posts.length === 0 ? (
        <div className="w-5/6 md:w-1/2 h-80 m-auto rounded-lg shadow-md mb-6 mt-6 flex flex-col justify-center items-center bg-darkSeaGreen p-6">
          <FaFile className="h-20 w-20 text-white mb-4" />
          <p className="text-white text-lg md:text-xl lg:text-3xl font-medium mb-2 text-center">
            No hay contenido todavía
          </p>
          <p className="text-white text-base md:text-lg lg:text-xl text-center">
            Parece que aún no se ha agregado nada aquí. ¡Vuelve pronto!
          </p>
        </div>
      ) : (
        <div className="w-3/4 md:w-4/5 lg:w-5/6 flex justify-start flex-col h-3/4 items-center bg-darkSeaGreen p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-white text-lg md:text-xl lg:text-3xl font-medium mb-4 text-center">
            Publicaciones Recientes
          </h2>
          <ul className="space-y-2 w-full">
            {posts.map((post) => (
              <li key={post._id} className="text-white text-base md:text-lg lg:text-xl transform transition-all duration-500 hover:scale-105 bg-deepNavyBlue p-4 rounded-lg">
                <Link href={`/posts/${post._id}`}>
                <div className="flex justify-between items-center">
                  <h2 className="text-white text-base md:text-lg lg:text-xl py-2 md:py-4 hover:text-gray-300 transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200">
                    {new Intl.NumberFormat().format(post.views)}
                    <span role="img" aria-label="views">👀</span>
                  </p>
                </div>
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                    {post.tags.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-darkSeaGreen text-white px-3 py-3 rounded-full text-sm capitalize"
                      >
                      {tech}
                      </span>
                    ))}
                  </div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}