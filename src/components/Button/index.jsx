import "./index.css";
const Button = ({ children, className, handleClick }) => {
  return (
    <div className="button">
      <button onClick={handleClick} className={`button_el ${className}`}>
        {children}
      </button>
    </div>
  );
};
export default Button;
