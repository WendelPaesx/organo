import './Rodape.css'

function Rodape() {

    return <footer className='footer'>
        <section>
            <ul>
                <li>
                    <a href='facebook.com' target='_blank' alt ='Pagina do Facebook'>
                        <img src="/imagens/fb.png"></img>
                    </a>
                    
                </li>
            </ul>
        </section>
        <section>
            <ul>
                <li>
                    <a href='twitter.com' target='_blank' alt ='Pagina do Twitter'>
                        <img src='./imagens/tw.png' alt='icone twitter'></img>
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <ul>
                <li>
                    <a href='instagram.com' target='_blank' alt ='Pagina do instagram'>
                        <img src='./imagens/ig.png' alt='icone insta'></img>
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src='/imagens/logo.png' alt='Logo'/>
        </section>
        <section>
            <p>
                Desenvolvido Por <a href='https://github.com/WendelPaesx' target='_blank'>WendelPaesx</a>
            </p>
        </section>

    </footer>
}

export default Rodape