import './App.css';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/NavigationBar/NavigationBar';

function App() {

const navigation = ['Home','contact','about']

  return (
    <>
    <NavigationBar nav={navigation} />
    <Home/>
    </>
  );
}

export default App;
