import Style from './index.module.css';

function Footer() {
    return (
        <>
            <div className={Style.main}>

                <div className={Style.menu}>

                    <div className={Style.contato}>
                        <h2>Contato:</h2>
                        <p>CNPJ:</p>
                        <p> 58.016.602/0001-17 - ACTUS DESENVOLVIMENTO EM SISTEMAS LTDA </p>
                        <p>E-mail:</p>
                        <p>CONTADOR@BELLINATIPEREZ.COM.BR</p>
                    </div>
                    <div>
                        <h2>Endereço:</h2>
                        <p>ALFREDO BUFREN, 155</p>
                        <p>Centro</p>
                        <p>Curitiba / PR</p>
                        <p>80020-240</p>
                    </div>
                </div>

            </div>
            <div className={Style.author}>
                development by <a href="https://ivan-dias-dev.github.io/Portifolio_DIO/">Ivan dias</a>
            </div>
        </>
    );
}

export default Footer;
