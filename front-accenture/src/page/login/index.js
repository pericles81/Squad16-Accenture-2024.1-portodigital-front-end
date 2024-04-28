import './index.css';
import googleIcon from '../../assets/google-img.svg'
import facebookIcon from '../../assets/facebook-img.svg'
import Navbar from '../../components/navbar';

function Login(){
    return(
        <div className='container'>
            <Navbar />
            <div className='container-login'>
                <form className='login-form'>
                    <div className='login-form-title'>
                        <span className='title'>Acesse sua conta</span>
                    </div>

                    <div className='wrap-input'>
                        <span>Login</span>
                        <input className='input' type='email' placeholder='Digite seu email'/>
                    </div>

                    <div className='wrap-input'>
                        <span>Senha</span>
                        <input className='input' type='password' placeholder='Digite sua senha'/>
                    </div>
                    
                    <div className='login-form-button-forgot'>
                        <button className='forgot-password'> 
                            <span>Esqueceu sua senha?</span>
                        </button>
                    </div>

                    <div className='login-form-button'>
                        <button className='login-form-btn'> 
                            Continuar
                        </button>
                    </div>

                    <div className='or-divider'>
                        <span className='divider'></span>
                        <span className='or-text'>Ou continue com</span>
                        <span className='divider'></span>
                    </div>

                    <div className='social-buttons'>
                        <button className='google-btn'> 
                            <img src={googleIcon} alt='Google icon'/>
                        </button>
                        <button className='facebook-btn'> 
                            <img src={facebookIcon} alt='Facebook icon'/>
                        </button>
                    </div>

                    <div className='login-form-button-register'>
                        <button className='register'> 
                            <span>Não tem conta? <span>Cadastre aqui!</span></span>
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Login;
