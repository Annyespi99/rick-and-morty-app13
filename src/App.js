import { AppRouter } from "./router/AppRouter";
import {Header} from "./componets/Header";

function App() {

  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <div class="main">
            <div className="main_container">
              <AppRouter />
            </div>
        </div>
    </div>
          
    </div>
  );
}

export default App;
