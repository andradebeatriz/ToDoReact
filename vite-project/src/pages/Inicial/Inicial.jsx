import { ListaTarefas } from "../../componentes";
import { FormCriarTarefa } from "../../componentes/FormCriarTarefa/FormCriarTarefa";

import style from './Inicial.module.css';

const Inicial = () => {
    

    return(
        <div className={style.Inicial}>
            <FormCriarTarefa/>
            <ListaTarefas/>
        </div>  
    );
};

export { Inicial };
