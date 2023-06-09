import { IconeSol, IconeLua } from "../icons";

interface BotaoAlternarTemaProps {
  tema?: string;
  alternarTema?: () => void;
}

export default function BotaoAlternarTema(props: BotaoAlternarTemaProps) {
  return props.tema === "dark" ? (
    <div
      onClick={props.alternarTema}
      className={`hidden sm:flex item-center cursor-pointer
                bg-gradient-to-r from-yellow-300 to-yellow-600  
                w:14 lg:w-24 h-8 p-1 rounded-full`}
    >
      <div
        className={`flex items-center justify-center
                    bg-yellow-180 text-yellow-600 w-6 h-6 rounded-full `}
      >
        {IconeSol(4)}
      </div>
      <div
        className={`hidden lg:flex item-center ml-2
                        text-white`}
      >
        <span>Claro</span>
      </div>
    </div>
  ) : (
    <div
      onClick={props.alternarTema}
      className={`hidden sm:flex item-center justify-end cursor-pointer
              bg-gradient-to-r from-gray-500 to-gray-900  
              w:14 lg:w-24 h-8 p-1 rounded-full`}
    >
      <div
        className={`hidden lg:flex item-center mr-2
                      text-white`}
      >
        <span>Escuro</span>
      </div>
      <div
        className={`flex items-center justify-center
                  bg-gray-800 text-yellow-300 w-6 h-6 rounded-full`}
      >
        {IconeLua(4)}
      </div>
    </div>
  );
}
