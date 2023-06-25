// import React from "react";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux/es/hooks/useSelector";
// import { Link } from "react-router-dom";
// import { deleteUser } from "./UserReducer";
// import { useNavigate } from "react-router-dom";
// const Home=()=>{
//     const users=useSelector((state)=> state.users.userList);
//     console.log(users);
//     const dispatch=useDispatch();
//     const handleDelete=(id)=>{
//         dispatch(deleteUser({id:id}));
//     }
//     return(
//         <>
//             <div className="container">
//                 <h2>Crud App</h2>
//                 <Link to='/create' className="btn btn-success my-3">Create +</Link>
//                 <table>
//                     <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>Email</th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             users.map((user,index)=>{
//                                 return(
//                                     <>
//                                         <tr key={index}>
//                                             <td>{user.id}</td>
//                                             <td>{user.name}</td>
//                                             <td>{user.email}</td>
//                                             <td>
//                                                 <Link to={`/edit/${user.id}`} className="btn btn-primary">Edit</Link>
//                                                 <button onClick={()=>handleDelete(user.id)} className="btn btn-danger">Delete</button>
//                                             </td>
//                                         </tr>
//                                     </>
//                                 )

//                             })
//                         }
//                     </tbody>

//                 </table>
//             </div>
//         </>
//     )
// }

// export default Home;










import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import { deleteUser } from "../../store/slices/CreateSlice";
import { useNavigate } from "react-router-dom";
import {FcFullTrash,FcEditImage} from "react-icons/fc";

const Home = () => {
  const users = useSelector((state) => state.users.userList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };

  return (
    <div className="container">
      <h2 className="header">Crud App</h2>
      <Link to="/create" className="btn btn-success my-3">
        Create +
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              
              <td>
                <Link to={`/edit/${user.id}`} className="btn-primary edit">
                  <FcEditImage/>
                </Link>
                <a
                  onClick={() => handleDelete(user.id)}
                  className="btn-danger delete"
                >
                 <FcFullTrash/>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
