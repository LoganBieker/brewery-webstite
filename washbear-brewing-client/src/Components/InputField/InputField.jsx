import '@/Components/InputField/InputField.css'
export default function InputField({title, className='', value, onChange}) {

    return(
        <div className={`input-field-container ${className}`}>
            <p className="input-field-text">{title}</p>
            <input required type="text" className="input-field-input" value={value} onChange={onChange}></input>
        </div>
    );
}