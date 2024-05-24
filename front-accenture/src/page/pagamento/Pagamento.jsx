import React from 'react'
import { Button } from './../../components/Button';
import { InputButton } from '../../components/InputButton';
export const Pagamento = () => {
    return (
        <div className='divMainCarrinho'>
            <h2>Onde você quer receber o pedido</h2>
            <div className='divMainCarrinho1'>
                <div className='divCardsCarrinho'>
                    <Button divClassName='wrap-input' label='Endereço:' classInputName='input' placeholder='Digite seu endereço'></Button>
                    <Button divClassName='wrap-input' label='Complemento:' classInputName='input' placeholder='Digite o complemento'></Button>
                    <Button divClassName='wrap-input' label='Número:' classInputName='input' placeholder='Digite o número'></Button>

                    <h2>Fazer pagamento</h2>
                    <h3>Escolha forma de pagamento</h3>

                    <div className='divRadios'>

                        <InputButton
                            type='radio'
                            id='Dinheiro'
                            name='tipoRegistro'
                            kkk='kkk'
                            htmlFor='Dinheiro'
                            label='Dinheiro'

                        >
                        </InputButton>

                        <InputButton
                            kkk='kkk'
                            label='Cartão'
                            htmlFor='Cartão'
                            id='Cartão'
                            name='tipoRegistro'
                            type='radio'>
                        </InputButton>

                        <InputButton
                            kkk='kkk'
                            label='Pix'
                            htmlFor='Pix'
                            id='Pix'
                            name='tipoRegistro'
                            type='radio'>
                        </InputButton>
                    </div>

                    <Button divClassName='wrap-input' label='Número:' classInputName='input' placeholder='Digite o número'></Button>

                    <Button divClassName='wrap-input' label='Número:' classInputName='input' placeholder='Digite o número'></Button>

                    <Button divClassName='wrap-input' label='Número:' classInputName='input' placeholder='Digite o número'></Button>

                    <Button divClassName='wrap-input' label='Número:' classInputName='input' placeholder='Digite o número'></Button>

                    <Button divClassName='wrap-input' label='Número:' classInputName='input' placeholder='Digite o número'></Button>

                    <Button divClassName='wrap-input divButtonPagar'  classInputName='input' type='button' value='Confirmar pagamento'></Button>

                </div>
                
                <div className='divSubtotal'>
                    <h3>Subtotal: </h3>
                    <Button type='button' value='Ir para pagamento'></Button>
                </div>
            </div>
        </div>
    )
}
