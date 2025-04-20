import { createContext, useEffect, useState } from 'react';
import {api} from  '../services';

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
    const {children} = props;

    const [criador, setCriador] = useState('Beatriz'); 

    const [tarefas, setTarefas ] = useState([]);

    const [loadingCriar, setLoadingCriar] = useState(false); 
    const [loadingEditar, setLoadingEditar] = useState(false); 
    const [loadingDeletar, setLoadingDeletar] = useState(null); 
    const [loadingCarregar, setLoadingCarregar] = useState(null); 
    
    const carregarTarefas = async () => {
    setLoadingCarregar(true);

        const { data = [] } = await api.get('/tarefas');

        setTarefas([
            ...data,
        ]);

        setLoadingCarregar(false);
    };

    const adicionarTarefa = async (nomeTarefa) => {
        setLoadingCriar(true);

        const {data: tarefa} = await api.post('/tarefas', {
            nome: nomeTarefa,
        });

        setTarefas(estadoAtual=> {
            return[
                ...estadoAtual,
                tarefa,
            ];
        });

        setLoadingCriar(false);
    };

    const removerTarefa = async (idTarefa) => {
        setLoadingDeletar(idTarefa);
      
        await api.delete(`tarefas/${idTarefa}`);
      
        setTarefas((estadoAtual) => {
          const tarefasAtualizadas = estadoAtual.filter(
            (tarefa) => tarefa.id !== idTarefa
          );
          return [...tarefasAtualizadas];
        });
      
        setLoadingDeletar(null);
    };
      
    
    const editarTarefa = async (idTarefa, nomeTarefa) => {
        setLoadingEditar(idTarefa);
      
        const { data: tarefaAtualizada } = await api.put(`tarefas/${idTarefa}`, {
          nome: nomeTarefa,
        });
      
        setTarefas((estadoAtual) =>
          estadoAtual.map((tarefa) =>
            tarefa.id === idTarefa
              ? {
                  ...tarefa,
                  nome: tarefaAtualizada.nome,
                }
              : tarefa
          )
        );
      
        setLoadingEditar(null);
    };      

    useEffect(() => {
        const carregarTarefas = async () => {
          setLoadingCarregar(true);
          try {
            const resposta = await api.get('/tarefas');
            setTarefas(resposta.data);
          } catch (erro) {
            console.error('Erro ao carregar tarefas:', erro);
          } finally {
            setLoadingCarregar(false);
          }
        };
      
        carregarTarefas();
    }, []);
      

    return (
        <AppContext.Provider value={{
            criador,
            tarefas,
            adicionarTarefa,
            removerTarefa,
            editarTarefa,
            loadingCarregar,
            loadingCriar,
            loadingDeletar,
            loadingEditar,
        }}>
            {children}
        </AppContext.Provider>
    );

};