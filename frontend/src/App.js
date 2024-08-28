import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { useEffect } from 'react';
import SummaryApi from './common';
import Context from './context';

function App() {
   
  const fetchUserDetails = async()=>{
  
    const dataResponse = await fetch(SummaryApi.current_user.url,{
      method : SummaryApi.current_user.method,
      credentials : 'include'
    })
    const dataApi = await dataResponse.json()
    console.log('dataApi',dataApi)
    if(dataApi.success){
      //dispatch(setUserDetails(dataApi.data))
    }
}

   useEffect(()=>{
      /** User Details */
      fetchUserDetails()

   },[])

  return (
    <>
    <Context.Provider value={{ fetchUserDetails}}>
      <Header/>
          <main className='min-h-[calc(100vh-100px)]'>
             <Outlet/>
        </main>   
      <Footer/>
      </Context.Provider>
    </>

  );
}

export default App;
