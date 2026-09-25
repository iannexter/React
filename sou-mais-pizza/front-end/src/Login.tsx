import { useState } from "react";

import Input from "./components/Input";




const Login = () => {


 //email --> variavel setEmail --> valor para mudar a variavel 
  const [email, setEmail] = useState("email@email.com");


  const [password, setPassword] = useState("");

  function changeName() {

    console.log(email)

  }

    // function handleSubmit(e) {
    //   // e.preventDefault();
    //   console.log(email);
    //   console.log(password);
    // }


  return (
    <form className="flex h-screen items-center justify-center bg-[#161410]"
    
    onSubmit= { (e) => {

      e.preventDefault();

          console.log(email);
          console.log(password);


    }
  }


    >
      <div className="flex w-[350px] flex-col items-stretch gap-2">
        <img
          src="/logo.png"
          alt="Logo"
          className="mx-auto mb-4 h-[200px] w-[200px]"
        />

        <Input placeholder="E-mail" 
        onChange={(e) => setEmail(e.target.value)}/>

        <Input placeholder="Senha" 

        type="password"
        
        onChange = {(e) => setPassword(e.target.value)}
        
        />

       

        <button className="w-full cursor-pointer rounded-md bg-[#C92A0E] py-2 text-sm font-bold text-white"
        
        


        >
          Login
        </button>


        
      </div>
    </form>
  );
};

export default Login;



 // <p className="text-white text-center" >{email}</p>