import { routes } from "./app/routes";
import MainRoutes from "./common/components/routes/MainRoutes";
import SignupView from "./features/auth/SIgnupView";
function App() {

  return (
    <div className="App">
        <MainRoutes routes={routes} redirect='/login'/>
    </div>
  );
}

export default App;
