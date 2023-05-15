import Link from "next/link";
interface MenuItemProps {
  url?: string;
  texto: string;
  icone: any;
  className?: string;
  onClick?: (evento: any) => void;
}

export default function MeuItem(props: MenuItemProps) {
  function renderizerLink() {
    return (
      <div
        className={
          "flex flex-col justify-center items-center h-20 w-20 ${props.className} text-gray-600"
        }
      >
        {props.icone}
        <span className="text-xs font-light ">{props.texto}</span>
      </div>
    );
  }
  return (
    <li onClick={props.onClick} className={"hover:bg-gray-100"}>
      {props.url ? (
        <Link href={props.url}>{renderizerLink()}</Link>
      ) : (
        renderizerLink()
      )}
    </li>
  );
}