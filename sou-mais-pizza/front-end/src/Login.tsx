import Input from "./components/Input";

const Login = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-[#161410]">
      <div className="flex w-[350px] flex-col items-stretch gap-2">
        <img
          src="/logo.png"
          alt="Logo"
          className="mx-auto mb-4 h-[200px] w-[200px]"
        />

        <Input placeholder="E-mail" />

        <Input placeholder="Senha" />

        <button className="w-full cursor-pointer rounded-md bg-[#C92A0E] py-2 text-sm font-bold text-white">
          Login
        </button>


        
      </div>
    </div>
  );
};

export default Login;
