import React from 'react';
import ViewRecipe2 from './ViewRecipe2';
import { useState } from 'react';
function CompilationRecipe({ data }) {
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const handleViewRecipe = (recipe) => {
      setSelectedRecipe(recipe);
    };
  
    const handleClose = () => {
      setSelectedRecipe(null);
    };


  return (
    <div className='w-screen min-h-screen py-6 my-[-6rem]'>
         {selectedRecipe && (
        <div className='fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center'>
          <ViewRecipe2 recipe={selectedRecipe} onClose={handleClose} />
        </div>
      )}
 {!selectedRecipe && (
      <div className="flex flex-wrap items-center justify-center gap-5 py-9">
        {data.compilations.map((compilation, index) => (
          <div key={index} className='resp2 w-2/5 h-96 rounded-lg bg-zinc-950 border text-white border-zinc-600 flex flex-col items-start py-3 px-3'>
            <div className="imgdiv w-full h-2/5 rounded-md">
              {compilation.thumbnail_url ? (
                <img src={compilation.thumbnail_url} alt={compilation.name} className="w-full h-full object-cover rounded-md" />
              ) : (
                <p className="text-white">Image not available</p>
              )}
            </div>
            <h2 className='text-yellow-400 font-semibold text-xl mt-4'>{compilation.name || 'Name not available'}</h2>
            <p className='text-white line-clamp-3 pb-1'>{compilation.description || 'No description available'}</p>
            <div className="buttons flex gap-2">
            <button
                    className='bg-yellow-400 text-black mt-2 p-2 border-none font-semibold rounded-md'
                    onClick={() => handleViewRecipe(compilation)}
                  >
                    View Recipe
                  </button>
              <button className='border-yellow-400 text-yellow-400 mt-2 p-2 border font-semibold rounded-md'>View Recipe</button>
            </div>
            <div className="userRatings flex items-center justify-between py-3 w-full gap-3">
              <h1>User Ratings✍️</h1>
              <div className="ratingcount flex items-center gap-2">
                <h1 className='text-yellow-400'>Positive: {compilation.user_ratings?.count_positive || 0}</h1>
                <h1 className='text-yellow-400'>Negative: {compilation.user_ratings?.count_negative || 0}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
 )}
    </div>
  )
}

export default CompilationRecipe;
