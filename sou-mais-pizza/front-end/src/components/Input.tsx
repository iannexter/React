// outra forma de tipar

// type InputType = {

//     title:string;

// }

// const Input = ({ title }: InputType) => {

//para tipar: {title}: {title: string}

// type InputType = {
//   title: string;
//   type: string;
// };

// const Input = ({ title, type }: InputType) => {
//   return (
//     <input
//       type={type}
//       className="w-[350px] rounded-md text-[#32343E] bg-white px-2 py-2 text-xs outline-none"
//       placeholder={title}
//     />
//   );
// };

// export default Input;

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}

      className="w-[350px] rounded-md bg-white px-2 py-2 text-xs text-[#32343E] placeholder-[#32343E] outline-none"
    />
  );
};

export default Input;
