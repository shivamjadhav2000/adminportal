
import './App.css';
import Main from './components/Main'
import MyTable from "./components/table";
import FormDialog from './components/Dialogs/form'
import Card from './components/cards'
import Buyer from './components/RouterComponents/Buyer/Buyer'
import CategoryAndSubCategory from './components/RouterComponents/CategoryAndSubCategory/CategoryAndSubCategory'
import  ContentManagementSystem from './components/RouterComponents/ContentManagementSystem/ContentManagementSystem'
import Feature from './components/RouterComponents/Feature/Feature'
import listingManagement from './components/RouterComponents/ListingManagement/ListingManagement'
import Payment from './components/RouterComponents/Payment/Payment'
import Subscription from './components/RouterComponents/Subscription/Subscription'
import Report from './components/RouterComponents/Report/Report'
import Seller from './components/RouterComponents/Seller/Seller'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
let List=[Buyer,Seller,listingManagement,CategoryAndSubCategory,
  Feature,Subscription,Payment,Report, ContentManagementSystem]
function App() {
  return (
    <div className="App">
     <Router>
          <Main >
       
          <Card />
          {/* <FormDialog /> */}
         
             <Switch>
               <Route path="/" exact component={MyTable} />
               {
                 ['Buyer', 'Seller', 'ListingManagement', 'CategoryAndSubCategory',
                 "Feature","Subscription","Payment","Report","ContentManagementSystem"].map((i,idx)=>{
                   return (
                     <Route path={"/"+i} component={List[idx]}/>
                   )
                 })
               }
             </Switch>
          
          </Main>
        
          </Router>
    
    </div>
  )
}
  


export default App;
