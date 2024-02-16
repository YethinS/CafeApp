import Styles from './app.module.scss'
import Navbar from './components/Navbar';
import Tab from './components/Tab';
import DishCard from './components/DishCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [data, setdata] = useState([])
  const [dishes, setdishes] = useState([])
  const [selectedTab, setSelectedTab] = useState('Salads and Soup')
  const [count, setCount] = useState(0)
 
  
  //For fetching data from the api
  const fetchDetails = async() => {
    await axios.get('https://run.mocky.io/v3/db0018c8-5982-4d89-a54f-f51fe14d3c89')
        .then((rsp) => {
          console.log('response : ',rsp.data.data[0])
          setdata(rsp.data.data[0].table_menu_list)
          setdishes(rsp.data.data[0].table_menu_list[0].category_dishes)
        })
        .catch(err => console.log('Error in api fetch : ',err))
  }

  const countSetter = (number, status) => {
   
    console.log('Number : ',number)
    if(status) {
      setCount(prevCount => prevCount + 1)

    } else {
      setCount(prevCount => prevCount -1)
    }
    
    
   
    
  }

  //For selecting the tab
  const handleTabClick = (name) => {
    console.log('Clicked : ',name)
    setSelectedTab(name)
    if(name === 'From The Barnyard'){
      setdishes(data[1].category_dishes)
      
      console.log('Data : ',data[1].category_dishes)
    } else if(name === 'From the Hen House') {
      setdishes(data[2].category_dishes)
    } else if(name === 'Fresh From The Sea') {
      setdishes(data[3].category_dishes)
    } else if(name === 'Biryani') {
      setdishes(data[4].category_dishes)
    } else if(name === 'Fast Food') {
      setdishes(data[5].category_dishes)
    } 
    
    else{
      setdishes(data[0].category_dishes)
    }
  }

  useEffect(() => {
    fetchDetails()
  },[])

  return (
    <div className={ Styles.App}>
      <Navbar count= {count} />
      <div className={ Styles.mainSection }>
        <div className={Styles.categorySection}>
          
          {data.map((menu) => (
            <Tab 
            name={menu.menu_category} 
            onClick={handleTabClick}  
            isSelected = {selectedTab === menu.menu_category}
            />
          ))}
         
        </div>
        <div className={ Styles.dishCategorySection} >
          {console.log('Disahes : ',dishes)}
          {dishes?.map((item) => (
            <DishCard data = {item} countSetter = {countSetter}  />
          ))}
           
        </div>
      </div>
    </div>
  );
}

export default App;
