import React, {useState} from 'react';
import './App.css';
import UserTable from './UserTable'
import AddUserForm from './AddUserForm'
import EditUserForm from './EditUserForm'


function App() {
  //inisialisasi state lokal, data default yang akan ditampilkan
  const userData = [
    {id: 1, name: 'Galang', username: 'LANG'},
    {id: 2, name: 'Kerta', username: 'KERTA'},
    {id: 3, name: 'Galanggg', username: 'LANGGG'}
  ]

  //set hooks, useState menggunakan variabel userData sebagai nilai
  const initialFormState = {id: null, name:'', username:''}
  const [users, setUsers] = useState(userData)
  const [editing, setEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState(initialFormState)


  //Menambahkan Users
	const addUser = user => {
		user.id = users.length + 1
		setUsers([...users, user ])
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  const editUser = user => {
    setEditing(true)
    setCurrentUser({id: user.id, name: user.name, username: user.username})
  }

  const updateUser = (id, updateUser) => {
    setEditing(false)

    setUsers(users.map(user => (user.id  === id ? updateUser : user )))
  }

  return (
    <div className="container">
      <h1>Crud Menggunakan HOOKS</h1>
      <div className="flex-row">
        <div className="flex-large">
          { editing ? (
            <div>
              <h2>Edit User</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
          <div>
            <AddUserForm addUser={addUser}/>
            <h2>Add Users</h2>
          </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          {/* setting props namanya users dan diisi nilai dari state users */}
          <UserTable users={users} deleteUser={deleteUser} editUser={editUser}/>
        </div>
      </div>
    </div>
  );
}

export default App;
