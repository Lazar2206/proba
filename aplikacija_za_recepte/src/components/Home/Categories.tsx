import '../../styles/Categories.css';
import easy from '../../assets/easycat.png';
import medium from '../../assets/mediumcat.png';
import hard from '../../assets/hardcat.png';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <section className='category container'>
      <div className='category-title'>
        <h2>Categories</h2>
        <p>
          Explore our collection of Mexican recipes sorted by difficulty level:
          Easy, Medium, and Hard. Find the perfect dish to match your cooking
          skills and enjoy the flavors of Mexico at any level.
        </p>
      </div>
      <div className='category-cards column'>
        <CategoryCard
          link={'/recipes?difficulty=easy'}
          image={easy}
          text='Easy'
          background='linear-gradient(180deg,rgba(177, 227, 145, 0) 0%,rgba(177, 227, 145, 1) 100%)'
        />
        <CategoryCard
          link={'/recipes?difficulty=medium'}
          image={medium}
          text='Medium'
          background='linear-gradient(180deg,rgba(250, 247, 164, 0) 0%,rgba(250, 247, 164, 1) 100%)'
        />
        <CategoryCard
          link={'/recipes?difficulty=hard'}
          image={hard}
          text='Hard'
          background='linear-gradient(180deg,rgba(246, 145, 131, 0) 0%,rgba(246, 145, 131, 1) 100%)'
        />
      </div>
    </section>
  );
};

export default Categories;