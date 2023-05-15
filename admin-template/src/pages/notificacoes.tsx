import Layout from "@/components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function notificacoes() {
  const dados = useAppData();
  return (
    <Layout titulo="Notificações" subtitulo="Gerenciamento de Notificações">
      <h3>{dados.tema}</h3>
    </Layout>
  );
}
