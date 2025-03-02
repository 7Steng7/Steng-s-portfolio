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
    <div className="w-full md:w-60 h-60 m-auto rounded-lg shadow-md mb-6 mt-6 flex flex-col justify-center items-center bg-darkSeaGreen p-6">
      {error ? (
        <p className="text-white text-lg font-medium mb-2 text-center">{error}</p>
      ) : posts.length === 0 ? (
        <>
          <FaFile className="h-12 w-12 text-white mb-4" />
          <p className="text-white text-lg font-medium mb-2 text-center">
            No hay contenido todavía
          </p>
          <p className="text-white text-sm text-center">
            Parece que aún no se ha agregado nada aquí. ¡Vuelve pronto!
          </p>
        </>
      ) : (
        <div className="w-full">
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