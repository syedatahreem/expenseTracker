import React,{useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
const NewExpense =(props) =>{

    const [isEditing, setIsEditing] = useState(false)
    const onSaveExpenseDataHandler =(enteredExpenseData) =>{

        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setIsEditing(false)
    }

    const addNewExpenseHandler =() =>{
        setIsEditing(true)
       }
    
       const cancelClickHandler =() =>{
         setIsEditing(false)
       }
    
   
    return(
        <div className="new-expense">
            {!isEditing  && <button onClick={addNewExpenseHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData ={onSaveExpenseDataHandler} onCancel ={cancelClickHandler}/>}
        </div>
    )

}

export default NewExpense;