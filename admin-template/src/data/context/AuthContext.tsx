import route from "next/router";
import { createContext, useState } from "react";
import firebase from "../../firebase/config";
import Usuario from "../../model/Usuario";
import "firebase/auth";
import Cookies from "js-cookie";

interface authContextProps {
  usuario?: Usuario;
  loginGoogle?: () => Promise<void>;
}

const AuthContext = createContext<authContextProps>({});

async function usuarioNormalizado(
  usuarioFirebase: firebase.User
): Promise<Usuario> {
  const token = await usuarioFirebase.getIdToken();
  return {
    uid: usuarioFirebase.uid,
    nome: usuarioFirebase.displayName,
    email: usuarioFirebase.email,
    token,
    provedor: usuarioFirebase.providerData[0]?.providerId,
    imagem: usuarioFirebase.photoURL,
  };
}

function gerenciarCookie(logado: any) {
  if (logado) {
    Cookies.set("admin-template-eric-auth", logado, {
      expires: 7,
    });
  } else {
    Cookies.remove("admin-template-eric-auth");
  }
}

export function AuthProvider(props: any) {
  const [usuario, setUsuario] = useState<Usuario>(null as any);

  async function configurarSessao(usuarioFirebase: any) {
    if (usuarioFirebase?.email) {
      const usuario = await usuarioNormalizado(usuarioFirebase);
      setUsuario(usuario);
      gerenciarCookie(true);
    } else {
      setUsuario(null as any);
      gerenciarCookie(false);
    }
  }

  async function loginGoogle() {
    const resp = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());
    if (resp.user?.email) {
      const usuario = await usuarioNormalizado(resp.user);
      setUsuario(usuario);
      route.push("/");
    }
  }

  return (
    <AuthContext.Provider
      value={{
        usuario,
        loginGoogle,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
