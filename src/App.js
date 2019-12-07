import React, {useState} from 'react';
import './App.css';
import UserTable from './UserTable'
import AddUserForm from './AddUserForm'


function App() {
  //inisialisasi state lokal, data default yang akan ditampilkan
  const userData = [
    {id: 1, name: 'Galang', username: 'LANG'},
    {id: 1, name: 'Kerta', username: 'KERTA'},
    {id: 1, name: 'Galanggg', username: 'LANGGG'}
  ]

  //set hooks, useState menggunakan variabel userData sebagai nilai
  const [users, setUsers] = useState(userData)


  //Menambahkan Users
	const addUser = user => {
		user.id = users.length + 1
		setUsers([...users, user ])
	}
  return (
    <div className="container">
      <h1>Crud Menggunakan HOOKS</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add Users</h2>
          <AddUserForm addUser={addUser}/>
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          {/* setting props namanya users dan diisi nilai dari state users */}
          <UserTable users={users}/>
        </div>
      </div>
    </div>
  );
}

export default App;
