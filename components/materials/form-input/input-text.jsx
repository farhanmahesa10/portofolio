const InputText = props => {
  return (
    <div className="mb-2">
      <p className="text-lg ">{props.label}</p>
      <input
        type={props.type ? props.type : "text"}
        onChange={e => props.valueChange(e.target.value)}
        placeholder={props.placeholder}
        value={props.value}
        className={`border-b border-primary h-10 w-full focus:outline-none ${props.className}`}
      />
    </div>
  );
};

export default InputText;
