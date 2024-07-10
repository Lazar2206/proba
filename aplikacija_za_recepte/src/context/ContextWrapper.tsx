import React, { useEffect, useState } from 'react';

import GlobalContext from './GlobalContext';
import { Recipe } from '../models/recipes';
import { getRecipes } from '../utils/recipesAPI';

const ContextWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const allRecipesData = await getRecipes();
      let recipesArray: Recipe[] = [];

      allRecipesData.forEach((recipe: any) => {
        let newRecipe = new Recipe(
          recipe.id,
          recipe.title,
          recipe.image,
          recipe.difficulty
        );
        recipesArray.push(newRecipe);
      });

      setRecipes(recipesArray);
    };

    fetchRecipes();
  }, []);

  return (
    <GlobalContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;