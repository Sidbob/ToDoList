import '../Css/AddC.css'
import { Link } from 'react-router-dom';




const AddComponent = () => {
    return (

        <>

            <div className="ribbon-drop-wrapper" id="bar">
                <div className='nav' id='navbar'>
                    <ul className='nav'>

                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page"><Link to="/Add_Category">Add_Category</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"><Link to="/Add_Subcategory">Add_SUbcategory</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"><Link to="/Add_Product">Add_Product</Link></a>
                        </li>

                     

                    </ul>

                </div>
            </div>
        </>
    )
}

export default AddComponent;