
import './App.css';
import HeaderComponent from './Component/HeaderComponent';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import AddComponent from './Component/AddComponent';
import DeleteComponent from './Component/DeleteComponent';
import UpdateComponent from './Component/UpdateComponent';

import Add_Category from './Pages/Add_Category';
import Add_Subcategory from './Pages/Add_Subcategory';
import Add_Product from './Pages/Add_Product';
import Delete_Category from './Pages/Delete_Category';
import Delete_SUbcategory from './Pages/Delete_Subcategory';
import Delete_Product from './Pages/Delete_Product';




function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <HeaderComponent />

        <Routes>
          <Route path='/Add' element={<AddComponent />} />
          <Route path='/Delete' element={<DeleteComponent />} />
          <Route path='/Update' element={<UpdateComponent />} />

          <Route path='/Add_Category' element={<Add_Category />} />
          <Route path='/Add_Subcategory' element={<Add_Subcategory />} />
          <Route path='/Add_Product' element={<Add_Product />} />

          <Route path='/Delete_Category' element={<Delete_Category/>}/>
          <Route path='/Delete_Subcategory' element={<Delete_SUbcategory/>}/>
          <Route path='/Delete_Product' element={<Delete_Product/>}/>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
