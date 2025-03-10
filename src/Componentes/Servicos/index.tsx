import Style from "./index.module.css";

function Servicos() {
    return (
        <div className={Style.main}>
            <div className={Style.menu}>
                <div className={Style.secaoPai}>
                    <h1 className={Style.title}>Nossos Serviços</h1>
                    <ul className={Style.serviceList}>
                        <li className={Style.serviceItem}>
                            <img src="/Rocket.svg" alt="Foguete representando desenvolvimento de software" />
                            <div>
                                <h2>Desenvolvimento de Software</h2>
                            </div>
                        </li>
                        <li className={Style.serviceItem}>
                            <img src="/Chart.svg" alt="Gráfico representando análise de dados e BI" />
                            <div>
                                <h2>Análise de Dados & BI</h2>
                            </div>
                        </li>
                        <li className={Style.serviceItem}>
                            <img src="/Whallet.svg" alt="Carteira representando automação empresarial" />
                            <div>
                                <h2>Automação Empresarial</h2>
                            </div>
                        </li>
                        <li className={Style.serviceItem}>
                            <img src="/Book.svg" alt="Livro representando consultoria em tecnologia" />
                            <div>
                                <h2>Consultoria em Tecnologia</h2>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Servicos;
