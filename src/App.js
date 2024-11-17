import Header from './Components/Navigation/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <> 
    <div>
      <Header />
      </div>
      <div>
        <Outlet /> 
      </div>
    <div>
      Footer
    </div>

    </>
  );
}

export default App;
