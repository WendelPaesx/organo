import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'


const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (evento) => {
        console.log('form foi submetido!');
        evento.preventDefault()
    }
    return (
        <section className="formulario" >
            <form onSubmit={aoSalvar} >
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" obrigatorio={true} placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" obrigatorio={true} placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem"  placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label="time" obrigatorio={true} itens={times} />
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