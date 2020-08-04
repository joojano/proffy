import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem(){

    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/44454114?s=460&u=c641b2ff91972db792895d88fc5cccae6b16a820&v=4" alt="Juliano Rodrigo"/>
                <div>
                    <strong>Juliano Rodrigo</strong>
                    <span>Computação</span>
                </div>
            </header>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor leo, ultricies vel ante vitae, rhoncus cursus ligula. Vestibulum vel diam ac tellus interdum convallis. Cras sed dolor a erat eleifend ornare. Aliquam erat volutpat. Nunc vitae ullamcorper leo. Duis convallis nisl lacinia, cursus enim sed, commodo purus. Phasellus ligula lectus, placerat at lacinia ut, feugiat scelerisque neque. Cras fringilla, quam et dapibus ullamcorper, tellus massa consectetur nunc, ac iaculis ante odio sed magna. Cras eu quam libero. Nulla id dui lectus. Aenean quis sodales sem. Fusce elit lectus, luctus sit amet tellus quis, viverra congue leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque id sem vel neque accumsan dignissim. 
            </p>

            <footer>
                <p>
                    Preço/hora 
                    <strong>R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Ícone do WhatsApp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;