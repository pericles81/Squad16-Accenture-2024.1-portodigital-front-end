import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './page/login/Login'
import Navbar from './components/navbar/NavBar';
import { CadastroClientes } from './page/singin/CadastroClientes';
import { Lojas } from './page/Shoppins/Lojas';
import { Home } from './page/home/Home';
import { CadastroProduto } from './page/produto/CadastroProduto';
import { Carrinho } from './page/carrinho/Carrinho';
import { Pagamento } from './page/pagamento/Pagamento';
import { SelecionarCadastro } from './page/selecionarCadastro/SelecionarCadastro';
import { CadastroLojas } from './page/singin/CadastroLoja';
import { CadastroEntregadores } from './page/singin/CadastroEntregadores';
import { Loja } from './page/Shoppins/Loja';
<<<<<<< HEAD
import { Produtos } from './page/produto/Produtos';
=======
import { MyProducts } from './page/meusProdutos/MyProducts';
>>>>>>> 703f07cd8797bb6afbeb3b125896de23ec626ee5

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/cadastroClientes" Component={CadastroClientes} />
          <Route path="/cadastroLojas" Component={CadastroLojas} />
          <Route path="/cadastroEntregador" Component={CadastroEntregadores} />
          <Route path="/lojas" Component={Lojas} />
          <Route path="/" Component={Home} />
<<<<<<< HEAD
          <Route path="/loja/:id" Component={Loja} />
          <Route path="/produtos/:id" Component={Produtos} />
          <Route path="/produto" Component={CadastroProduto} />
=======
          <Route path='/meusProdutos' Component={MyProducts} />
          <Route path="/loja/:id" element={<Loja />} />
          <Route path="/produtos" Component={Produto} />
>>>>>>> 703f07cd8797bb6afbeb3b125896de23ec626ee5
          <Route path="/carrinho" Component={Carrinho} />
          <Route path="/pagamento" Component={Pagamento} />
          <Route path="/seleCad" Component={SelecionarCadastro} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
