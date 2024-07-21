import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Banner from './components/Banner'
import RecipeList from './components/RecipeList'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CompilationRecipe from './components/CompilationRecipe'

function App() {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'b63d1b71d5mshedce29a6293da67p1044c1jsnbf6c660d6883',
        'x-rapidapi-host': 'tasty.p.rapidapi.com'
      }
    };

    const fetchData = async () => {
      const response = await fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes`, options);
      const myData = await response.json();
      
      // Check the structure of myData and extract the correct array
      if (myData && myData.results) {
        setData(myData.results);
      }
    };

    fetchData();
  }, []);

  console.log(data); // Inspect the structure of data

  return (
    <div className="w-screen min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Banner />
      <RecipeList data={data} />
      <CompilationRecipe data={{ compilations: data.flatMap(recipe => recipe.compilations || []) }} />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
