import logo from "./assets/logo.png";
import userImg from './assets/perfil.png';


export default function Header() {
  return (
    <header className="flex justify-center items-center">
      <img src={logo} alt="Logo da empresa Voll."/>
      <div>
        <img src={userImg} alt="Imagem de perfil do usuário."/>
        <a href="#">Sair</a>
      </div>
    </header>
  );
}

