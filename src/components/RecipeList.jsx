import React, { useState } from 'react';
import ViewRecipe from './ViewRecipe';

function RecipeList({ data }) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleViewRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleClose = () => {
    setSelectedRecipe(null);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRecipes = data.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='w-screen min-h-screen py-6'>
      {selectedRecipe && (
        <div className='fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center'>
          <ViewRecipe recipe={selectedRecipe} onClose={handleClose} />
        </div>
      )}

      {!selectedRecipe && (
        <>
          <h1 className='text-center text-black bg-yellow-400 uppercase font-semibold text-4xl'>🥂Our Recipes🍺</h1>
          
          <div className="flex justify-center py-4 sticky top-0">
            <input
              type="text"
              placeholder="Search for a recipe..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="p-2 border border-zinc-400 bg-zinc-950 rounded-md w-2/5"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 py-9 ">
            {filteredRecipes.map((recipe, index) => (
              <div key={index} className='resp w-2/5 h-96 rounded-lg bg-zinc-950 border text-white border-zinc-600 flex flex-col items-start py-3 px-3'>
                <div className="imgdiv w-full h-2/5 rounded-md ">
                  {recipe.thumbnail_url ? (
                    <img src={recipe.thumbnail_url} alt={recipe.name} className="w-full h-full object-cover rounded-md" />
                  ) : (
                    <p className="text-white">Image not available</p>
                  )}
                </div>
                <h2 className='text-yellow-400 font-semibold text-xl mt-4'>{recipe.name || 'Name not available'}</h2>
                <p className='text-white line-clamp-3 pb-1'>{recipe.description || 'No description available'}</p>
                <div className="buttons flex gap-2">
                  <button
                    className='bg-yellow-400 text-black mt-2 p-2 border-none font-semibold rounded-md'
                    onClick={() => handleViewRecipe(recipe)}
                  >
                    View Recipe
                  </button>
                  <button className='border-yellow-400 text-yellow-400 mt-2 p-2 border font-semibold rounded-md'>
                    Get Recipe
                  </button>
                </div>
                <div className="userRatings flex items-center justify-between py-3 w-full gap-3">
                  <h1>User Ratings✍️</h1>
                  <div className="ratingcount flex items-center gap-2">
                    <h1 className='text-yellow-400'>Positive: {recipe.user_ratings['count_positive']}</h1>
                    <h1 className='text-yellow-400'>Negative: {recipe.user_ratings['count_negative']}</h1>
                  </div>
                </div>
              </div>
            ))}
            {filteredRecipes.map((recipe, index) => (
              <div key={index} className='resp w-2/5 h-96 rounded-lg bg-zinc-950 border text-white border-zinc-600 flex flex-col items-start py-3 px-3'>
                <div className="imgdiv w-full h-2/5 rounded-md ">
                  {recipe.thumbnail_url ? (
                    <img src={recipe.thumbnail_url} alt={recipe.name} className="w-full h-full object-cover rounded-md" />
                  ) : (
                    <p className="text-white">Image not available</p>
                  )}
                </div>
                <h2 className='text-yellow-400 font-semibold text-xl mt-4'>{recipe.name || 'Name not available'}</h2>
                <p className='text-white line-clamp-3 pb-1'>{recipe.description || 'No description available'}</p>
                <div className="buttons flex gap-2">
                  <button
                    className='bg-yellow-400 text-black mt-2 p-2 border-none font-semibold rounded-md'
                    onClick={() => handleViewRecipe(recipe)}
                  >
                    View Recipe
                  </button>
                  <button className='border-yellow-400 text-yellow-400 mt-2 p-2 border font-semibold rounded-md'>
                    Get Recipe
                  </button>
                </div>
                <div className="userRatings flex items-center justify-between py-3 w-full gap-3">
                  <h1>User Ratings✍️</h1>
                  <div className="ratingcount flex items-center gap-2">
                    <h1 className='text-yellow-400'>Positive: {recipe.user_ratings['count_positive']}</h1>
                    <h1 className='text-yellow-400'>Negative: {recipe.user_ratings['count_negative']}</h1>
                  </div>
                </div>
              </div>
            ))}
            {filteredRecipes.map((recipe, index) => (
              <div key={index} className='resp w-2/5 h-96 rounded-lg bg-zinc-950 border text-white border-zinc-600 flex flex-col items-start py-3 px-3'>
                <div className="imgdiv w-full h-2/5 rounded-md ">
                  {recipe.thumbnail_url ? (
                    <img src={recipe.thumbnail_url} alt={recipe.name} className="w-full h-full object-cover rounded-md" />
                  ) : (
                    <p className="text-white">Image not available</p>
                  )}
                </div>
                <h2 className='text-yellow-400 font-semibold text-xl mt-4'>{recipe.name || 'Name not available'}</h2>
                <p className='text-white line-clamp-3 pb-1'>{recipe.description || 'No description available'}</p>
                <div className="buttons flex gap-2">
                  <button
                    className='bg-yellow-400 text-black mt-2 p-2 border-none font-semibold rounded-md'
                    onClick={() => handleViewRecipe(recipe)}
                  >
                    View Recipe
                  </button>
                  <button className='border-yellow-400 text-yellow-400 mt-2 p-2 border font-semibold rounded-md'>
                    Get Recipe
                  </button>
                </div>
                <div className="userRatings flex items-center justify-between py-3 w-full gap-3">
                  <h1>User Ratings✍️</h1>
                  <div className="ratingcount flex items-center gap-2">
                    <h1 className='text-yellow-400'>Positive: {recipe.user_ratings['count_positive']}</h1>
                    <h1 className='text-yellow-400'>Negative: {recipe.user_ratings['count_negative']}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default RecipeList;
