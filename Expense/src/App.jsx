import React, { useEffect } from 'react';
import { useState } from 'react';
import For from './For'
import List from './List';
import './index.css';
import Axios from 'axios';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';



function App() {
  const [expenseArr, setExparr] = useState(
    [
      { id: 1, name: "Food", Amount: 1000 },
      { id: 2, name: "Salary", Amount: 50000 }
    ]
  )

  const [title, setTitle] = useState();
  const [amount, setAmount] = useState();
  const [edit, setEdit] = useState();
  const [Index, setIndex] = useState();

  async function Submit(Name, Amount) {
    if (edit) {
      var arr = [...expenseArr]
      arr[Index].name = Name
      arr[Index].Amount = Amount
      setExparr(arr)
      setEdit(false)

    }
    
    else {
      console.log(Name, Amount);
      var obj = { id: expenseArr.length > 0 ? expenseArr[expenseArr.length - 1].id + 1 : 1, name: Name, Amount: parseInt(Amount) };
      var arr = [...expenseArr, obj]
      setExparr(arr);
      var dbobj={name:Name,Amount:Amount}
      var res=await Axios.post("http://localhost:3000/authors",dbobj)
    }





  }

  function delArr(index) {
    var arr = [...expenseArr];
    arr.splice(index, 1);
    setExparr(arr)
  }

  function editArr(index) {
    var arr = [...expenseArr]
    setAmount(arr[index].Amount)
    setTitle(arr[index].name)
    setIndex(index)
    setEdit(true)

  }
  var income=0;
  var expense=0;
expenseArr.forEach((val)=>{
  if(val.Amount>0){
    income+=val.Amount
  }
  else{
    expense+=val.Amount
  }
})

async function getCAll(){
  var res=await axios.get("http://localhost:3000/authors")
  console.log(res.data)
}

useEffect(()=>{
  getCAll()
},[])

  return (
    <>
      
      <div>
        <h1 className='headdd'>EXPENSE TRACKER</h1>
        <div className='balance'>  Balance:{income + expense}</div>
        <div className='income-expense-container'>
          <div className='income'>
            <span className='title'> Income</span>
            <span>{income}</span>
          </div>
          <div className='block'></div>
          <div className='expense'>
            <span className='title'>Expense</span>
            <span>{expense}</span>
          </div>
        </div>
     
      <For Submit={Submit} name={title} amount={amount} />
      </div>

      {
        expenseArr.map(
          (value, index) => (
            <List id={value.id} name={value.name} amount={value.Amount} index={index} delArr={delArr} editArr={editArr} />)

        )
      }

      <Router>
      <Routes>
      <Route path='/routeOne' element={<RouteOne/>}> </Route>
      <Route path='/routeTwo' element={<RouteTwo/>}></Route>
      </Routes>

      </Router>
      <Link to={'/routeOne'}></Link>
    </>
  )
}

export default App
