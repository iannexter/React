//Componente é uma função que retorna um html

import Input from "./components/Input";

//exemplo de componente:
const App = () =>{

  return(

    <p className="bg-black p-6">
      

          {/* //aperte ctrl + . para inportar o componente  */}
          <Input />

    </p>

  )
}

//agora exportamos o componente:
export default App;