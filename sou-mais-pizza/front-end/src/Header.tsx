export const Header = () => {

    return (

        <div className="bg-[#161410]">

            
            <div className="w-full md:w-[737px] p-3 md:p-0 mx-auto flex items-center justify-between">
                
                <img src="../public/logo.png" alt="Logo" width="160"  />


                <div className= "bg-[#F2DAAC] w-[130px] h-[35px] flex items-center justify-center rounded-sm cursor-pointer">
                    
                    
                    Entrar
                    
                    </div>

            </div>


        </div>


    )

}

export default Header;




//forma de importar
// é esta: //import { Header } from './Header.tsx'
// export const Header = () => {

//     return (

//     <div>Header</div>

//     )

// }