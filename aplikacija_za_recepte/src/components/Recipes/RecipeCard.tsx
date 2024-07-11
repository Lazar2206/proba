import { Link } from 'react-router-dom';
import { LuClock } from 'react-icons/lu';

import foodTray from '../../assets/food-tray.png';

interface RecipeCardProps {
  link: string;
  image: string;
  title: string;
  prepareTime: string;
  difficulty: string;
}

const RecipeCard = ({
  link,
  image,
  title,
  prepareTime,
  difficulty,
}: RecipeCardProps) => {
  return (
    <Link to={link} className='card'>
      <img src={image} alt={title} className='recipeimg' />
      <h5>{title}</h5>
      <div className='recipeinfo row'>
        <div className='row'>
          <LuClock size={24} />
          <p>{prepareTime}</p>
        </div>
        <div className='row'>
          <img src={foodTray} alt='food-tray' />
          <p>{difficulty}</p>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;