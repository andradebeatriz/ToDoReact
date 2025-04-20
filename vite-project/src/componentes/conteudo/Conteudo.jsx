import style from './Conteudo.module.css';

const Conteudo = ({ children }) => {
    return (
        <div className={style.Conteudo}>
            {children}
        </div>
    );
};

export { Conteudo };
