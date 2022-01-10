import Receipt from "./Receipt";

function RecieptList({filteredReceipts}){
    return(
        <div className="ReceiptList">
            {filteredReceipts.map((receipt, index) =>{
                return <Receipt receipt={receipt} key={index}/>    
            })}
        </div>
    );
}

export default RecieptList;