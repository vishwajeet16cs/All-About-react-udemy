import { Provider } from "react-redux";

import "./App.css";
import Header from './components/Headre/Header';
import ImageGrid from './components/ImageGrid/ImageGrid';

import configureStore from "./store";
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Header />
      <ImageGrid />
    </Provider>
  );
}

export default App;
