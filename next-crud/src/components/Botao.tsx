interface BotaoProps {
  cor?: "green" | "blue" | "gray";
  children: any;
  className?: string;
  onClick?: () => void;
}

const Botao = (props: BotaoProps) => {
  const cor = props.cor ?? "gray";
  return (
    <button
      className={`
        bg-gradient-to-r from-${cor}-400 to-${cor}-700
        text-white px-4 py-2 rounded-md ${props.className}
    `}
          onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Botao;
