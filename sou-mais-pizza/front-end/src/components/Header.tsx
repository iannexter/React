const Header = () => {
  return (
    <div className="bg-[#161410]">
      <div className="mx-auto flex w-full items-center justify-between p-3 md:w-[737px] md:p-0">
        <img src="../public/logo.png" alt="Logo" width="160" />

        <div className="flex h-[35px] w-[130px] cursor-pointer items-center justify-center rounded-sm bg-[#F2DAAC]">
          Entrar
        </div>
      </div>
    </div>
  );
};

export default Header;

//forma de importar
// é esta: //import { Header } from './Header.tsx'
// export const Header = () => {

//     return (

//     <div>Header</div>

//     )

// }
