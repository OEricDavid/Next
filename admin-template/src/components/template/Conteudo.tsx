interface Conteudoprops {
  children?: any;
}

export default function Conteudo(props: Conteudoprops) {
  return <div className={"Flex flex-col mt-7"}>{props.children}</div>;
}