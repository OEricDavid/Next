import { IconeAjustes, IconeCasa, IconeSino, IconeSair } from "../icons";
import MenuItem from "./MenuItem";
import Logo from "./Logo";
export default function MenuLateral() {
  return (
    <aside className={"flex flex-col"}>
      <div
        className={
          "flex flex-col items-center justify-center h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800"
        }
      >
        <Logo />
      </div>
      <ul className={"flex-grow"}>
        <MenuItem url="/" texto="Inicio" icone={IconeCasa} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
        <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
      </ul>
      <ul>
        <MenuItem
          texto="Sair"
          icone={IconeSair}
          onClick={() => console.log("logout")}
          className={"text-red-600"}
        />
      </ul>
    </aside>
  );
}
