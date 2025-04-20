import styleCampoTexto from './CampoTexto.module.css';

const CampoTexto = ({ placeholder = "Digite algo...", ...rest }) => {
  return (
    <input 
      type="text" 
      className={styleCampoTexto.campo} 
      placeholder={placeholder}
      {...rest} 
    />
  );
};

export { CampoTexto };
