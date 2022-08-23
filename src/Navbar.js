import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <nav className='nav'>
        <h1>FIND a Job</h1>
        <div className='links'>
          <Link to='/'>Home</Link>
        </div>
      </nav>
      <div className='search'><p>search</p></div>
    </nav>
  );
};

export default Navbar;
