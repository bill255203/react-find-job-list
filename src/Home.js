const Home = ({ data, condition }) => {
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
            <div className='section split' key={id.toString()}>
              <img src={logo} alt='' className='icon' />
              <div className='content split'>
                <div className='file'>
                  <div className='up'>
                    <p>{company}</p>
                    {isNew && <p>New!</p>}
                    {featured && <p>Featured</p>}
                  </div>
                  <div className='mid'>
                    <p>{position}</p>
                  </div>
                  <div className='down'>
                    <p>{postedAt}</p>
                    <p>{contract}</p>
                    <p>{location}</p>
                  </div>
                </div>
                <div className='skills split'>
                  {languages.map((lan, idx) => (
                    <button onClick={() => condition(lan)} key={`lan + ${idx}`}>
                      {lan}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
    </div>
  );
};
export default Home;
