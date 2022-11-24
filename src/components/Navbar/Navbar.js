import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
  return (
    <>
      <header className="container bg-secondary rounded-3 ">
        <nav className="d-flex flex-row align-items-center justify-content-between m-4">
          <h1 className="title">LOGO</h1>
          <ul className="d-flex flex-row mt-3">
            <li className="list-group-item">
              <button className=" m-3 rounded btn btn-outline-info">
                PRODUCTOS
              </button>
            </li>
            <li className="list-group-item">
              <button className=" m-3 rounded btn btn-outline-info">
                PRODUCTOS
              </button>
            </li>
            <li className="list-group-item">
              <button className=" m-3 rounded btn btn-outline-info">
                PRODUCTOS
              </button>
            </li>
            <li className="list-group-item">
              <button className=" m-3 rounded btn btn-outline-info">
                PRODUCTOS
              </button>
            </li>
            <li className="list-group-item">
              <button className=" m-3 rounded btn btn-outline-info">
                <CartWidget />
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
