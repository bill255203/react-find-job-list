import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import NotFound from './NotFound';
import { useState } from 'react';
import initialData from './data.json';
function App() {
  const [data, setData] = useState(initialData);
  const [conditionList, setConditionList] = useState(new Set());
  const clear = () => {
    console.log('clear');
    setData(initialData);
    setConditionList(new Set());
  };
  const uncond = (cond) => {
    const newConditionList = new Set([...conditionList]);
    newConditionList.delete(cond);
    setConditionList(newConditionList);

    const conds = Array.from(newConditionList);
    setData(initialData);

    let newData = initialData;

    conds.forEach((cond) => {
      newData = initialData.filter((job) => job.languages.includes(cond));
    });

    setData(newData);
  };
  const condition = (lan) => {
    const newData = data.filter((job) => job.languages.includes(lan));
    setData(newData);
    setConditionList((prev) => new Set(prev.add(lan)));
  };
  return (
    <Router>
      <div className='App'>
        <Navbar conditionList={conditionList} clear={clear} uncond={uncond} />
        <Switch>
          <Route exact path='/'>
            <Home data={data} condition={condition} />
          </Route>
          <Route path='/new'>
            <Create />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
