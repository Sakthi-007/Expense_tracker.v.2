import React from "react";
import './index.css'
function List(props) {
    const { id, name, amount, index ,delArr,editArr} = props
    
    function handleDelete(index){
        props.delArr(index)
    }

    function handleEdit(index){
        props.editArr(index)
    }

    return (

        <div className="expense-item-container">
            
            <div className={`expense-item ${amount >0 ? "positive" : "negative" }`} >
                <div className="expense-title">{name}</div>
                <div className="expense-amount">{amount}</div>

            </div>
        
                
            <button className="edit-btn" onClick={()=>{
                handleEdit(index)
                console.log("Edit index");
            }}
                >Edit</button>
            <button className="delete-btn" onClick={()=>{
                handleDelete(index)}}>Delete</button>
        </div>




    )

}
export default List;