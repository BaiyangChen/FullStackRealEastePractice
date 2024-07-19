const FormSelect = ({ label, name, list, defaultValue = '' }) => {
  return (
    <div className=" mb-2 mb-md-0">
      <label htmlFor={name} className="form-label">
        <span className="fw-medium">{label}</span>
      </label>
      <select
        name={name}
        id={name}
        defaultValue={defaultValue}
        className="form-select"
      >
        <option value="" disabled />
        {list.map((item) => {
          return (
            <option key={item} value={item}>{item}</option>
          );
        })}
      </select>
    </div >
  );
};

export default FormSelect;
