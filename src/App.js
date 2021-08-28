import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addMoreCustomers, deleteCustomers} from "./store/customerReducer";
import {fetchCustomers} from "./asyncAction/customers";

function App() {
  const dispatch = useDispatch()
  const customers = useSelector(state => state.customers.customers)

  const addCustomers = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addMoreCustomers(customer))
  }

  const deleteCustomer = (customer) => {
      dispatch(deleteCustomers(customer.id))
  }

  return (
    <div className="App">
      {customers.map(customer =>
          <div onClick={() => deleteCustomer(customer)}>{customer.name}</div>
      )}
      <button onClick={() => dispatch(fetchCustomers())}>+</button>

    </div>
  )
}

export default App;
