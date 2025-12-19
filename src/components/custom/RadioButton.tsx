type RadioButtonProps = {
  id: string;
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (value: string) => void;
};

const RadioButton = (props: RadioButtonProps) => {
  const { id, name, value, label, checked, onChange } = props;
  return (
    <div>
      <label className="radio-label" htmlFor={id}>
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          className="custom-radio"
          checked={checked}
          onChange={() => onChange(value)}
        />
        <span className="basis-60 h-[2rem] flex items-center">{label}</span>
      </label>
    </div>
  );
};

export default RadioButton;
