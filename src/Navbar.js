import { Link } from 'react-router-dom';

const Navbar = ({ conditionList, clear, uncond }) => {
  return (
    <nav className='navbar'>
      <nav className='nav'>
        <h1>FIND-JOB-LIST</h1>
        <div className='links'>
          <Link to='/'>Home</Link>
        </div>
      </nav>
      <div className='searchbar'>
        {Array.from(conditionList).map((cond) => (
          <button onClick={() => uncond(cond)} key={cond}>
            {cond}
          </button>
        ))}
        <div className='clear'>
          <button onClick={clear}>clear</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
