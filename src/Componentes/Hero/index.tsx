import Style from './index.module.css';

function Hero() {
    return (
        <>
            <div className={Style.hero}>
                <div className={Style.main}>
                    <div className={Style.secaoPai}>
                        <h1>Transforme sua empresa com tecnologia de ponta</h1>
                        <h2>Descubra como nossas soluções inovadoras podem impulsionar o seu negócio</h2>
                        <div>
                            <button>Solicite uma Consultoria</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
