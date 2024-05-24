import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './page/login/Login'
import Navbar from './components/navbar/NavBar';
import { Singin } from './page/singin/Singin';
import { Lojas } from './page/Shoppins/Lojas';
import { Home } from './page/home/Home';
import { Produto } from './page/produto/Produto';
import { Carrinho } from './page/carrinho/Carrinho';
import { Pagamento } from './page/pagamento/Pagamento';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/singin" Component={Singin} />
          <Route path="/lojas" Component={Lojas} />
          <Route path="/" Component={Home} />
          <Route path="/produtos" Component={Produto} />
          <Route path="/carrinho" Component={Carrinho} />
          <Route path="/pagamento" Component={Pagamento} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
