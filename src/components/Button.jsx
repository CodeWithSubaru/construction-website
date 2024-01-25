const Button = ({ className = "", children, ...delegated }) => {
  return (
    <button
      className={
        "bg-indigo-500 hover:bg-indigo-300 transition-all duration-300 text-white rounded py-2 px-5 text-sm font-bold tracking-wider " +
        className
      }
      {...delegated}
    >
      {children}
    </button>
  );
};
export default Button;
