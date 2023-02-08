import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'
import { useState } from 'react'


const Formulario = (props) => {

    const times = [
        
        'Programação',
        
        'Front-End',
        
        'Data Science',
        
        'DevOps',
        
        'UX e Design',
        
        'Mobile',
        
        'Inovação e Gestão'
    ]
    const [Nome, setNome] = useState('')
    const [Cargo, setCargo] = useState('')
    const [Imagem, setImagem] = useState('')
    const [Time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        
        props.aoColaboradorCadastrado({
            Nome,
            Cargo,
            Imagem,
            Time
        })
    }
    return (
        <section className="formulario" >
            <form onSubmit={aoSalvar} >
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    label="Nome"
                    obrigatorio={true}
                    placeholder="Digite seu nome"
                    valor={Nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    label="Cargo"
                    obrigatorio={true}
                    placeholder="Digite seu cargo"
                    valor={Cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={Imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    label="time"
                    obrigatorio={true}
                    itens={times}
                    valor={Time}
                    aoAlterado={valor => setTime(valor)} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <div>
                <h2>Minha Organização</h2>
            </div>


        </section>
    )
}
export default Formulario