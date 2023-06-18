import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import LoginForm from './components/Login';

function App() {
    return (
      <Router>
        <Navbar />
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/list" component={TaskList} />
        <Route exact path="/tasks/new" component={TaskForm} />
      </Router>
    );
}

export default App;
