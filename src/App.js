import { AppProvider } from './Context/useAppContext';
import Form from "./containers/Form/Form";

function App() {
  return (
      <AppProvider>
        <Form/>
      </AppProvider>
  );
}

export default App;
