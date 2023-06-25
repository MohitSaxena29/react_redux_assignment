// import React, { useState } from "react";
// import { addUser } from "./UserReducer";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// const Create=()=>{
//     const [name,setName]=useState('');
//     const [email,setEmail]=useState('');
//     const [phone,setPhone]=useState('');
//     const users=useSelector((state)=>state.users.userList);
//     const dispatch=useDispatch();
//     const navigate=useNavigate();
//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         dispatch(addUser({id:users.length,name:name,email:email,phone:phone}));
//         navigate('/');
//     }
//     return(
//         <>
//             <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
//                 <div className="w-50 border bg-secondary text-white p-5">
//                     <h3>Add New User</h3>
//                     <form onSubmit={handleSubmit}>
//                         <div>
//                             <label htmlFor="name">Name:</label>
//                             <input type="text" name="name" className="form-control" placeholder="Name*" onChange={e=>setName(e.target.value)}/>
//                         </div>
//                         <div>
//                             <label htmlFor="email">Email:</label>
//                             <input type="email" name="email" className="form-control" placeholder="Email*" onChange={e=>setEmail(e.target.value)}/>
//                         </div>
//                         <div>
//                             <label htmlFor="email">Phone:</label>
//                             <input type="tel" name="phone" className="form-control" placeholder="Phone*" onChange={e=>setPhone(e.target.value)}/>
//                         </div>
//                         <button className="btn btn-info">
//                             Submit
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Create;







// import React, { useState } from "react";
// import { addUser } from "./UserReducer";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import './App.css';
// import {toast} from 'react-toastify';

// const Create = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const users = useSelector((state) => state.users.userList);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if(name.trim()==='')
//     {
//         toast('Please Enter Name');
//     }
//     else  if(email.trim()==='')
//     {
//         toast('Please Enter Email');
//     }
//     else if(phone.trim()==='')
//     {
//         toast('Please Enter Phone');
//     }
//     else
//     {
//         dispatch(
//             addUser({ id: users.length, name: name, email: email, phone: phone })
//           );
//           navigate("/");
//     }

//   };

//   return (
//     <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
//       <div className="form-container">
//         <h3>Add New User</h3>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               name="name"
//               className="form-control"
//               placeholder="Name*"
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               name="email"
//               className="form-control"
//               placeholder="Email*"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="phone">Phone:</label>
//             <input
//               type="tel"
//               name="phone"
//               className="form-control"
//               placeholder="Phone*"
//               onChange={(e) => setPhone(e.target.value)}
//             />
//           </div>
//           <button className="btn btn-info">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Create;








import React, { useState } from "react";
import { addUser } from "../../store/slices/CreateSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const users = useSelector((state) => state.users.userList);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let errorName=false;
  const handleNameChange = (e) => {
    const value = e.target.value;

    setName(value);

    setNameError("");
    if(value.trim()===''){
        setNameError("Please enter your Name");
    }
    else if (!/^[a-zA-Z\s]+$/.test(value)) {
      setNameError("Name should contain only letters and spaces");
    } else if (value.length < 3) {
      setNameError("Name should be atleast 3 characters long");
    } else if (value.length > 30) {
      setNameError("Name should not exceed 30 characters");
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;

    setPhone(value);

    setPhoneError("");

    if (value.trim()==='') {
        setPhoneError('Please enter your phone number')
    }
    else if(!/^[0-9]{10}$/.test(value))
    {
        setPhoneError("Phone Number is not Vaild");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      toast.error("Please Enter Name");
    } else if (email.trim() === "") {
      toast.error("Please Enter Email");
    } else if (phone.trim() === "") {
      toast.error("Please Enter Phone");
    } else {
      dispatch(
        addUser({ id: users.length, name: name, email: email, phone: phone })
      );
      navigate("/");
    }
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="form-container">
        <h3>Add New User</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name*"
              onChange={handleNameChange}
            />
            {nameError && (
                <div className="error  text-danger">*{nameError}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email*"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              placeholder="Phone*"
              onChange={handlePhoneChange}
            />
            {phoneError && (
                <div className="error  text-danger">*{phoneError}</div>
            )}
          </div>
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Create;



