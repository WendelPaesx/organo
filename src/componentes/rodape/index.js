import 'rodape.css'

function Rodape() {

    return <footer className='footer'>
        <section>
            <ul>
                <li>
                    <a href='facebook.com' target='_blank' alt ='Pagina do Facebook'>
                        <img src="/imagens/facebook.png"></img>
                    </a>
                    
                </li>
            </ul>
        </section>
        <section>
            <ul>
                <li>
                    <a href='twitter.com' target='_blank' alt ='Pagina do Twitter'>
                        <img src='/imagens/twitter.png'></img>
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <ul>
                <li>
                    <a href='instagram.com' target='_blank' alt ='Pagina do instagram'>
                        <img src='/imagens/instagram.png'></img>
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src='/imagens/logo.png' alt='Logo'/>
        </section>
        <section>
            <p>
                Desenvolvido Por <a href=''></a>
            </p>
        </section>

    </footer>
}

export default Rodape