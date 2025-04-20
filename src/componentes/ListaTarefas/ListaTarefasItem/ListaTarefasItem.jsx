import { useState, useRef, useEffect } from 'react';
import { useAppContext } from '../../../hooks';
import { Botao, CampoTexto, Loading, TIPO_BOTAO } from '../../../componentes';
import style from './ListaTarefasItem.module.css';

const ListaTarefasItem = (props) => {
  const { id, nome } = props;
  const {loadingEditar, loadingDeletar, editarTarefa, removerTarefa} = useAppContext();
  const [estaEditando, setEstaEditando] = useState(false);

  const onBlurTarefa = (event) => {
    const nomeTarefa = event.currentTarget.value;

    editarTarefa(id, nomeTarefa);

    setEstaEditando (false);
  };

  const loadingEstaEditando = loadingEditar ==  id;
  const loadingEstaDeletando = loadingDeletar == id;

  return (
      <li className={style.ListaTarefasItem}>
        {loadingEstaEditando ? (
          <Loading />
        ) : estaEditando ? (
          <CampoTexto
            defaultValue={nome}
            onBlur={onBlurTarefa}
            autoFocus
          />
        ) : (
          <span onDoubleClick={() => setEstaEditando(true)}>{nome}</span>
        )}
    
        <Botao
          texto={loadingEstaDeletando ? <Loading /> : '-'}
          tipo={TIPO_BOTAO.SECUNDARIO}
          onClick={() => removerTarefa(id)}
        />
      </li>
    );    
  };

export { ListaTarefasItem };