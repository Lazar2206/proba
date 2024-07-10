import React from 'react';

import { Recipe } from '../models/recipes';

interface GlobalContextProps {
  recipes: Recipe[];
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
}

const GlobalContext = React.createContext<GlobalContextProps | undefined>(
  undefined
);

export default GlobalContext;