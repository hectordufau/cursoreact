import { HTMLInputTypeAttribute } from "react";

interface EntradaProps {
  texto: string;
  tipo?: HTMLInputTypeAttribute | undefined;
  valor: any;
  somenteLeitura?: boolean;
  valorMudou?: (valor: any) => void;
  className?: string;
}

const Entrada = (props: EntradaProps) => {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mb-2">{props.texto}</label>
      <input
        type={props.tipo ?? "text"}
        value={props.valor}
        readOnly={props.somenteLeitura ?? false}
        onChange={(e) => props.valorMudou?.(e.target.value)}
        className={`
                border border-purple-500 rounded-lg focus:outline-none bg-gray-100 px-4 py-2 ${
                  props.somenteLeitura ? "" : "focus:bg-white"
                }
                `}
      />
    </div>
  );
};

export default Entrada;
