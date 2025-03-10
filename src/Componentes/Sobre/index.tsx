import Style from './index.module.css';

function Sobre() {
    return (
        <div className={Style.main}>
            <div className={Style.menu}>
                <div className={Style.secaoPai}>
                    <h1 className={Style.title}>Sobre nós</h1>
                    <p className={Style.aboutText}> Na Actus, acreditamos que a tecnologia é a chave para impulsionar negócios e transformar ideias em realidade. Somos uma empresa especializada no desenvolvimento de soluções inovadoras, focadas em otimizar processos e maximizar resultados.</p>
                    <p className={Style.aboutText}> Com anos de experiência no mercado, combinamos tecnologia de ponta com um atendimento personalizado, garantindo eficiência, segurança e confiabilidade para nossos clientes. Nosso compromisso é oferecer soluções inteligentes que impulsionam o crescimento e a competitividade das empresas.</p>
                    <p className={Style.aboutText}>Venha fazer parte de uma comunidade que valoriza a inovação, transparência e evolução contínua. Juntos, construímos o futuro do seu negócio.</p>
                    </div>
            </div>
        </div>
    );
}

export default Sobre;
