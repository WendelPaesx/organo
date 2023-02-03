import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import './formulario.css'


const Formulario = () => {
    return (
        <section className="formulario" >
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <CampoTexto label="Time" placeholder="Digite seu Time" />
                <Botao/>
            </form>
            <div>
                <h2>Minha Organização</h2>
            </div>
            
           
        </section>
    )
}
export default Formulario