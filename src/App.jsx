import React, { useContext, useEffect,useState } from 'react';
import Login from './components/Auth/Login.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx';
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx';
import { getLocalStorage, setLocalStorage } from './utils/localStorage.jsx';
import { AuthContext } from './context/AuthProvider.jsx';

const App = () => {
  const [user , setUser]=useState(null)
  const [loggedInUserData , setLoggedInUserData] = useState(null)
  const [userData , setUserData] = useContext(AuthContext)
  


  useEffect(()=>{
    setLocalStorage();
      const loggedInUser = localStorage.getItem('loggedInUser')
      if(loggedInUser){
        const userData=JSON.parse(loggedInUser)
        setUser(userData.role)
        setLoggedInUserData(userData.data)
      }
    
  },[]);

  const handleLogin=(email,password)=>{
    const {admin , employees} = getLocalStorage();

    const foundAdmin = admin.find(
      (a) => a.email===email && a.password===password
    );

    if(foundAdmin){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
      return 
    }

    const foundEmployee = employees.find(
      (e) => e.email === email && e.password === password
    );

    if (foundEmployee) {
      setUser('employee');
      setLoggedInUserData(foundEmployee);
      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({ role: 'employee', data: foundEmployee })
      );
      return;
    }
    
    alert('Invalid Credentials')
    
  };






  // useEffect(()=>{
  //     const loggedInUser = localStorage.getItem('loggedInUser')
  //     if(loggedInUser){
  //       const userData=JSON.parse(loggedInUser)
  //       setUser(userData.role)
  //       setLoggedInUserData(userData.data) 
  //   }
  // },[]);

  // const handleLogin=(email,password)=>{
  //  if(email==='admin@example.com' && password==='123'){
  //   setUser('admin')
  //   localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
  //  }else if(userData){
  //   const employee = userData.find((e)=>email==e.email && e.password==password)
  //   if(employee){
  //     setUser('employee')
  //     setLoggedInUserData(employee)
  //     localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
  //   }
  //  }else{
  //   alert('Invalid Credentials')
  //  }
    
  // };


  // return (
  //   <>
  //  {!user? <Login handleLogin={handleLogin} />:""}
  //  {user=='admin'? <AdminDashboard changeUser={setUser} /> : (user=='employee'? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/> :null)}
   
  //   </>
  // )


  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDashboard changeUser={setUser} />}
      {user === 'employee' && <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />}
    </>
  )
  
}

export default App;

