const Textarea = props => {
  return (
    <div className="mb-2">
      <p className="text-lg ">{props.label}</p>
      <textarea
        placeholder={props.placeholder}
        className={`border-b border-primary h-24 w-full focus:outline-none ${props.className}`}
        onChange={e => props.valueChange(e.target.value)}
        value={props.value}
      />
    </div>
  );
};

export default Textarea;
