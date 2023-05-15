import Layout from "@/components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function notificacoes() {
  const { alternarTema } = useAppData();
  return (
    <Layout titulo="Notificações" subtitulo="Gerenciamento de Notificações">
      <button onClick={alternarTema}>Alternar Tema</button>
    </Layout>
  );
}
