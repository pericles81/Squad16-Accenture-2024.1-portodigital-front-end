import styles from './index.css'
import googleIcon from '../../assets/google-img.svg'
import facebookIcon from '../../assets/facebook-img.svg'
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className='container'>
            <div className='container-login'>
                <form className='login-form'>
                    <div className='login-form-title'>
                        <span className='title'>Acesse sua conta</span>
                    </div>

                    <Button
                            divClassName='wrap-input' classInputName='input' label='login:' type='input' placeholder='Digite seu email'></Button>

                    
                        <Button divClassName='wrap-input' label='senha:'classInputName='input'type='password' placeholder='Digite sua senha'></Button>
                    

                    <div className='login-form-button-forgot'>
                        <button className='forgot-password'>
                            <span>Esqueceu sua senha?</span>
                        </button>
                    </div>

                    <div className='login-form-button'>
                        <input value='Continuar' type='button'className='login-form-btn'/>
                            
                        
                    </div>

                    <div className='or-divider'>
                        <span className='divider'></span>
                        <span className='or-text'>Ou continue com</span>
                        <span className='divider'></span>
                    </div>

                    <div className='social-buttons'>
                        <button className='google-btn'>
                            <img src={googleIcon} alt='Google icon' />
                        </button>
                        <button className='facebook-btn'>
                            <img src={facebookIcon} alt='Facebook icon' />
                        </button>
                    </div>

                    <div className='login-form-button-register'>
                        <button className='register'>
                            <span>Não tem conta?</span> <Link to={'/singin'} >Cadastre aqui!</Link>
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Login;
