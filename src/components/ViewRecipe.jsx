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
          <h2 className='text-yellow-400 text-lg'>Steps of making</h2>
          <p className='text-white mt-2'>
           1: {
                recipe.instructions[0].display_text
            }
           
          </p>
          <p className='text-white mt-2'>
           2: {
                recipe.instructions[1].display_text
            }
           
          </p>
          <p className='text-white mt-2'>
           3: {
                recipe.instructions[2].display_text
            }
           
          </p>
          <p className='text-white mt-2'>
           4: {
                recipe.instructions[3].display_text
            }
           
          </p>
        </div>
        <div className="bg-zinc-800 p-4 rounded-lg mt-4">
        <h2 className='text-yellow-400 text-lg'>Nutrition Detail</h2>
        <p className='text-white'>Calories :{
            recipe.nutrition['calories']    
        }</p>
        <p className='text-white'>carbohydrates :{
            recipe.nutrition['carbohydrates']    
        }</p>
        <p className='text-white'>fat :{
            recipe.nutrition['fat']    
        }</p>
        <p className='text-white'>fiber :{
            recipe.nutrition['fiber']    
        }</p>
        <p className='text-white'>protein :{
            recipe.nutrition['protein']    
        }</p>
        <p className='text-white'>sugar :{
            recipe.nutrition['sugar']    
        }</p>
        </div>
        <div className="bg-zinc-800 p-4 rounded-lg mt-4 h-screen">
            <div className="video w-full h-full bg-white">
                <video src={recipe.original_video_url} controls className='w-full h-full '></video>
            </div>
        </div>
        <div className="bg-zinc-800 p-4 rounded-lg mt-4">
            <p className='text-white'>Total time for Cooking : {recipe.total_time_minutes + 'min'}</p>
        </div> 
        <div className="bg-zinc-800 p-4 rounded-lg mt-4">
            <p className='text-white'> tag name :{recipe.tags[0].name}</p>
            <p className='text-white'> tag name :{recipe.tags[0].parent_tag_name}</p>
            <p className='text-white'> tag name :{recipe.tags[1].name}</p>
            <p className='text-white'> tag name :{recipe.tags[1].parent_tag_name}</p>
            <p className='text-white'> tag name :{recipe.tags[2].name}</p>
            <p className='text-white'> tag name :{recipe.tags[2].parent_tag_name}</p>
            <p className='text-white'> tag name :{recipe.tags[3].name}</p>
            <p className='text-white'> tag name :{recipe.tags[3].parent_tag_name}</p>
        </div>
      </div>
    </div>
  );
}

export default ViewRecipe;
