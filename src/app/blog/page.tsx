import React from 'react';
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
        <div className="w-full md:w-64 lg:w-96 h-80 m-auto rounded-lg shadow-md mb-6 mt-6 flex flex-col justify-center items-center bg-darkSeaGreen p-6">
          <FaFile className="h-20 w-20 text-white mb-4" />
          <p className="text-white text-lg font-medium mb-2 text-center">
            No hay contenido todavía
          </p>
          <p className="text-white text-sm text-center">
            Parece que aún no se ha agregado nada aquí. ¡Vuelve pronto!
          </p>
        </div>
      ) : (
        <div className="w-3/4 md:w-4/5 lg:w-5/6 flex justify-start flex-col h-3/4 items-center bg-darkSeaGreen p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-white text-lg font-medium mb-4 text-center">
            Publicaciones Recientes
          </h2>
          <ul className="space-y-2">
            {posts.map((post) => (
              <li key={post._id} className="text-white text-sm">
                <Link href={`/posts/${post._id}`} className="hover:underline">
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}