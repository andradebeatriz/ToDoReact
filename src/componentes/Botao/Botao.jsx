import style from './Botao.module.css';
import {} from './constants';

const Botao = (props) => {
    const { texto, tipo = "primario", ...outrasProps } = props;
    return (
        <button type={tipo} className={style.Botao} {...outrasProps}>
            {texto}
        </button>
    );
};

export { Botao };