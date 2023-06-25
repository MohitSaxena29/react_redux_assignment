// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import {updateUser} from './UserReducer';
// import { useDispatch } from "react-redux";
// const Edit=()=>{
//     const {id}=useParams();

//     const users=useSelector((state)=> state.users.userList);
//     // console.log(users[0]);
//     // console.log( id);

//     const existingUser=users.filter((f)=>f.id.toString()===id);
//     // console.log(existingUser[0]);

//     const {name,email}=existingUser[0];
//     const [username,setuserName]=useState(name);
//     const [useremail,setuserEmail]=useState(email);

//     const dispatch=useDispatch();
//     const navigate=useNavigate();
//     // console.log(username)

//     const handleupdate=(e)=>{
//         e.preventDefault();
//         dispatch(updateUser(
//             {
//                 id:id,
//                 name:username,
//                 email:useremail
                
//             },
//             console.log(name)
//         ))
//         navigate('/');
//     }
//     return(
//         <>
//             <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
//                 <div className="w-50 border bg-secondary text-white p-5">
//                     <h3>Update User</h3>
//                     <form  onSubmit={handleupdate}>
//                         <div>
//                             <label htmlFor="name">Name:</label>
//                             <input type="text" name="name" className="form-control" placeholder="Name*" value={username} onChange={e=>setuserName(e.target.value)}/>
//                         </div>
//                         <div>
//                             <label htmlFor="email">Email:</label>
//                             <input type="email" name="email" className="form-control" placeholder="Email*" value={useremail} onChange={e=>setuserEmail(e.target.value)}/>
//                         </div>
//                         <button className="btn btn-info">
//                             Update
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Edit;





import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../../store/slices/CreateSlice";
import { useDispatch } from "react-redux";
import './Edit.css';

const Edit = () => {
  const { id } = useParams();

  const users = useSelector((state) => state.users.userList);
  const existingUser = users.find((user) => user.id.toString() === id);

  const [username, setUserName] = useState(existingUser.name);
  const [useremail, setUserEmail] = useState(existingUser.email);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: username,
        email: useremail,
      })
    );
    navigate("/");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="form-container">
        <h3>Update User</h3>
        <form onSubmit={handleUpdate}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name*"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email*"
              value={useremail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-info update">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
