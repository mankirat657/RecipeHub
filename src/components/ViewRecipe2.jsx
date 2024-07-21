import React from 'react';

function ViewRecipe({ recipe, onClose }) {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4'>
      <button 
        className='absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full'
        onClick={onClose}
      >
        X
      </button>
      <div className="w-full max-w-4xl bg-zinc-950 p-4 rounded-lg shadow-lg max-h-[90vh] overflow-auto">
        <div className="w-full h-80 rounded-lg bg-black overflow-hidden">
          <img src={recipe.thumbnail_url} alt={recipe.name} className='w-full h-full object-cover' />
        </div>
        <div className="bg-zinc-950 p-4 border border-zinc-400 rounded-lg mt-4">
          <h1 className='text-2xl font-bold text-yellow-400'>{recipe.name}</h1>
          <p className='mt-2 text-white'>{recipe.description}</p>
        </div>
        <div className="bg-zinc-800 p-4 rounded-lg mt-4">
          {recipe.video_url ? (
            <div className="video w-full h-full bg-white">
              <video src={recipe.video_url} controls autoPlay muted className='w-full h-full'>
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <p className="text-white">Video not available</p>
          )}
        </div>
        <div className="bg-zinc-800 p-4 rounded-lg mt-4 text-white">
            Country:{
                recipe.country
            }
        </div>
      </div>
    </div>
  );
}

export default ViewRecipe;
