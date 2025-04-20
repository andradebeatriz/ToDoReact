import style from './Cabecalho.module.css';
import { Link } from 'react-router-dom';

const Cabecalho = (props) => {
    return(
        <div className={style.Cabecalho}>
            <Link to="/">
                <h1>
                    <span>ToDo </span>
                        List
                </h1>
            </Link>

            <Link to="/sobre-nos">Sobre Nós</Link>
        </div>
    );
};

export {Cabecalho};