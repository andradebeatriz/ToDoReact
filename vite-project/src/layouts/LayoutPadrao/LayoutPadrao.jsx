import { useAppContext } from "../../hooks";
import { Cabecalho, Conteudo, Rodape } from "../../componentes"; 
import { Outlet } from "react-router-dom";


const LayoutPadrao = () => {
    const { criador } = useAppContext();
    return(
        <>
            <Cabecalho nomeUsuario="Joana"/>
            <Conteudo>
                <Outlet/>
            </Conteudo>
            <Rodape criador={criador} />
        </>
    );
};

export {LayoutPadrao};