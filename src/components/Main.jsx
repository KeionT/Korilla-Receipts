import React, {useState} from "react"
import receipts from "../../Data";
import ReceiptSelect from "./ReceiptSelect";
import ReceiptList from "./ReceiptList";



function Main() {
    const options = [
        {value: '', label: 'All' },
        {value: false, label: 'Unpaid'}
    ];

    const [paid, setPaid] = useState('');

    function onChangeInput({value}){
        setPaid(value);
    }
    
    const filteredReceipts=receipts.filter(receipt => {
        if(paid === ''){
            return receipt;
        }else{
            return receipt.paid === paid;
        }
    });
    
    
    
    return(
       <div className="Receipts">
           <ReceiptSelect options={options} onChange={onChangeInput} defaultVale={options[0]}/>
            <ReceiptList filteredReceipts={filteredReceipts}/>
       </div>
    );
    
}
export default Main;