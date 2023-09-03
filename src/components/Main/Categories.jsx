import { useState, useEffect } from 'react'
import {collection,query,onSnapshot} from "firebase/firestore"
import {db} from '../../database/firebase'
function Categories() {
    const [categories, setCategories] = useState([])
    
    useEffect(()=>{
        const q = query(collection(db,'Courses'))
        onSnapshot(q,(querySnapshot)=>{
            setCategories(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    })
  return (
    <div className="bg-gray-100 flex overflow-x-scroll py-7 px-3">
        <div class="ml-2 mr-5">
            <p>All</p>
        </div>
        
        {categories.map((category)=>(
            <div className="mr-5">
                <p>{category.data.abb}</p>
            </div>
        ))} 
    </div>
  );
}

export default Categories;
