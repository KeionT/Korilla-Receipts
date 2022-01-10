import Select from "react-select";

function ReceiptSelect({options, onChange, defaultValue}){
    return(
        <div className="ReceiptSelect">
            <Select options={options} onChange={onChange} defaultValue={defaultValue}/>
        </div>
    )
}

export default ReceiptSelect;