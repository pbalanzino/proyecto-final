import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Saludo de bienvenida" />
    </>
  );
}

export default App;
