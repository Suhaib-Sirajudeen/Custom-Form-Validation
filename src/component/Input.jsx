export const Input = ({
  type,
  name,
  id,
  handleInput,
  handleOnblur,
  value,
  checked,
  
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={`Enter your ${name}`}
      onChange={handleInput}
      onBlur={handleOnblur}
      value={value}
      checked={checked}
    
    />
  );
};
