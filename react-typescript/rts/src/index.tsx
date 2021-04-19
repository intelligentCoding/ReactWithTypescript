import ReactDOM from 'react-dom';
import GuestList from './state/GuestList';
import UserSearch from './classes/UserSearch';
import EventComponent from './events/EventComponent'

const users = [
    {name: 'Kashif', age: 20},
    {name: 'Anushree', age: 20},
    {name: 'Ankit', age: 20},
    {name: 'Santosh', age: 20},
]
const App = () => {
  return (
    <div>
      {/* <GuestList /> */}
      <UserSearch users={users}/>
      {/* <EventComponent/> */}

    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
