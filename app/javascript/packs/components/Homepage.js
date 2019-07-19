import React, {Component} from 'react';
import "./style/index"


class Homepage extends Component{
    render(){
        return(
            <div className="home">
                

                <div className="div_one">
                    <span className = "text_one">
                        <h3>Reactive</h3>
                        The three soldiers returning home from war were hungry.
                    </span>
                </div>
                <section className="section-light">
                    <span>
                    Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. 
                    Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo,
                    quando un anonimo tipografo prese una cassetta di caratteri 
                    e li assemblò per preparare un testo campione. 
                 </span>
                </section>

                <div className="div_two">
                    <span className = "text_two">
                        <h3>Reactive</h3>
                        The three soldiers returning home from war were hungry.
                    </span>
                </div>
                <section className="section-light">
                    <span>
                    sopravvissuto non solo a più di cinque secoli, 
                    ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato.
                    Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, 
                    che contenevano passaggi del Lorem Ipsum, e più recentemente da software di 
                    impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.
                    </span>
                </section>

                <div className="div_three">
                    <span className = "text_three">
                        <h3>Reactive</h3>
                        The three soldiers returning home from war were hungry.
                    </span>
                </div>
            </div>
        );
    }
}

export default Homepage