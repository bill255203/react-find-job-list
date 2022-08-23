//import JobList from './JobList';
import data from './data.json';

const Home = () => {
  return (
    <div className='home'>
      {data &&
        data.map(
          ({
            id,
            company,
            logo,
            new: isNew,
            featured,
            position,
            role,
            level,
            postedAt,
            contract,
            location,
            languages,
            tools,
          }) => (
            <div className='section split'>
              <img src={logo} alt='' class='icon' />
              <div className='content center split'>
                <div className='file'>
                  <div className='up'>
                    <p>{company}</p>
                    {isNew && <p>New!</p>}
                    {featured && <p>Featured</p>}
                  </div>
                  <div className='mid'><p>{position}</p></div>
                  <div className='down'>
                    <p>{postedAt}</p>
                    <p>{contract}</p>
                    <p>{location}</p>
                  </div>
                </div>
                <div className='skills'></div>
              </div>
            </div>
          )
        )}
    </div>
  );
};

export default Home;
//{blogs && <JobList blogs={blogs} />}
