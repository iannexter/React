//Componente é uma função que retorna um html

import Input from "./components/Input";

//exemplo de componente:
const App = () =>{

  return(

    <p className="bg-black p-6 flex gap-2">
      

          {/* //aperte ctrl + . para inportar o componente  */}
          <Input placeholder="E-mail" type="text"/>

          {/* <Input placeholder="Senha" type="password"/> */}

    </p>

  )
}

//agora exportamos o componente:
export default App;