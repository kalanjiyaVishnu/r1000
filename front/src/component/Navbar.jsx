import Logo from "../logo.svg";
export default function NavBar() {
  return (
    <div className="max-w-screen-lg p-2 flex items-center">
      <img src={Logo} className="w-16" alt="" />
      <h1>Edith</h1>
    </div>
  );
}
