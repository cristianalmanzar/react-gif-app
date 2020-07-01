import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';





const GifExpertApp = () => {


    const [categories, setCategories] = useState(['Goku'])

   

    return (
      <>
        <div className=" header ">
            <h2 className="header-title">Gif Search</h2>
            <AddCategory setCategory={setCategories}/>
        </div>

        <div className="container">
            <ol>
                
                {
                    categories.map( (category, i) => 
                        <GifGrid 
                            category={category}
                            key={i}
                        />
                    )
                }
            </ol>
        </div>
      </>
    )
}




export default GifExpertApp
  