function Input({ id, placeholder, value, onChange }) {
    return (
      <input
        id={id}
        type="text"
        className="px-3 py-1 h-[35px] rounded-xl text-[13px]"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  }
  
  export default Input;
  