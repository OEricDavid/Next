import Titulo from "./Titulo";

interface Cabecalhoprops {
  titulo: string;
  subtitulo: string;
}

export default function Cabecalho(props: Cabecalhoprops) {
  return (
    <div>
      <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
    </div>
  );
}
