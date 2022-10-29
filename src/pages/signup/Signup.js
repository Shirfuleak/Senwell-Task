import React, { useState } from "react";
import { useNavigate } from "react-router";

const Signup = () => {
  const navigate = useNavigate();
  const [fname, setFname] = useState("");
  const [fnameError, setFnameError] = useState("");
  const [lname, setLname] = useState("");
  const [lnameError, setLnameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [pass, setPass] = useState("");
  const [passwordError, setPasswordError] = useState("");



  const onChangeFname = (e) => {
    setFnameError("");
    setFname(e.target.value);
  };

  const onChangeLname = (e) => {
    setLnameError("")
    setLname(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmailError("")
    setEmail(e.target.value);

  };

  const onChangePass = (e) => {
    setPasswordError("");
    setPass(e.target.value);
  };

  const resetForm=()=>{
    setEmail('');
    setFname('');
    setLname('');
    setPass('');

  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const userData = JSON.stringify({ email, fname, lname, pass });
    localStorage.setItem("userData", userData);
    // alert("Form Submit Successfully");
    // localStorage.clear(userData);
    
    if(fname ==''){
      setFnameError('please enter first name')
    }

    if(lname ==''){
      setLnameError('please enter last name')
    }

    if(email ==''){
      setEmailError('please enter email')
    }

    if(pass ==''){
      setPasswordError('please enter password')
    }

    resetForm();
  };
  return (
    <>
      <section className="h-100 bg-dark">
        <form onSubmit={handleOnSubmit}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col">
                <div className="card card-registration my-4">
                  <div className="row g-0">
                    <div className="col-xl-6">
                      <div className="card-body p-md-5 text-black">
                        <h3 className="mb-5 text-uppercase">

                          Registration form
                        </h3>

                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                            <label
                                className="form-label"
                                htmlFor="form3Example1m"
                              >
                                First name
                              </label>
                              <input
                                type="text"
                                id="form3Example1m"
                                className="form-control form-control-lg"
                                value={fname}
                                onChange={onChangeFname}
                                
                              />{fnameError &&<div className="error-msg"> {fnameError}</div>}
                             
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                            <label
                                className="form-label"
                                htmlFor="form3Example1n"
                              >
                                Last name
                              </label>
                              <input
                                type="text"
                                id="form3Example1n"
                                className="form-control form-control-lg"
                                value={lname}
                                onChange={onChangeLname}
                                
                              />{lnameError &&<div className="error-msg"> {lnameError}</div>}
                          
                            </div>
                          </div>
                        </div>


                        <div className="form-outline mb-4">
                        <label
                            className="form-label"
                            htmlFor="form3Example97"
                          >
                            Email ID
                          </label>
                          <input
                            type="email"
                            id="form3Example97"
                            className="form-control form-control-lg"
                            value={email}
                            onChange={onChangeEmail}
                            
                          />{emailError &&<div className="error-msg"> {emailError}</div>}
                     
                        </div>

                        <div className="form-outline mb-4">
                        <label
                            className="form-label"
                            htmlFor="form3Example97"
                          >
                            Password
                          </label>
                          <input
                            type="text"
                            id="form3Example97"
                            className="form-control form-control-lg"
                            value={pass}
                            onChange={onChangePass}
                            
                          />{passwordError &&<div className="error-msg"> {passwordError}</div>}
                  
                        </div>

                        <div class="d-flex justify-content-end pt-3">
                          <button
                            type="button"
                            class="btn btn-success btn-lg"
                            onClick={() => {
                              navigate("/");
                            }}
                          >
                            Home
                          </button>
                          <button
                            type="submit"
                            className="btn btn-warning btn-lg ms-2"
                          >
                            Submit form
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Signup;






// import React, { useState } from "react";
// import { useNavigate } from "react-router";

// const Signup = () => {
//   const navigate = useNavigate();
//   const [fname, setFname] = useState();
//   const [fnameError, setFnameError] = useState("");
//   const [lname, setLname] = useState();
//   const [lnameError, setLnameError] = useState('');
//   const [email, setEmail] = useState();
//   const [emailError, setEmailError] = useState('');
//   const [pass, setPass] = useState();
//   const [passwordError, setPasswordError] = useState('');



//   const onChangeFname = (e) => {
//     setFnameError("");
//     setFname(e.target.value);
//   };

//   const onChangeLname = (e) => {
//     setLnameError('')
//     setLname(e.target.value);
//   };

//   const onChangeEmail = (e) => {
//     setEmailError('')
//     setEmail(e.target.value);

//   };

//   const onChangePass = (e) => {
//     setPasswordError('');
//     setPass(e.target.value);
//   };

//   const handleOnSubmit = (e) => {
//     e.preventDefault();
//     const userData = JSON.stringify({ email, fname, lname, pass });
//     localStorage.setItem("userData", userData);
//     // alert("Form Submit Successfully");
//     // localStorage.clear(userData);
//     if(fname !==''){
//       setFnameError('please enter first name')
//     }

//     if(lname !==''){
//       setLnameError('please enter last name')
//     }

//     if(email !==''){
//       setFnameError('please enter email')
//     }

//     if(pass !==''){
//       setPasswordError('please enter password')
//     }

//   };
//   return (
//     <>
//       <section className="h-100 bg-dark">
//         <form onSubmit={handleOnSubmit}>
//           <div className="container py-5 h-100">
//             <div className="row d-flex justify-content-center align-items-center h-100">
//               <div className="col">
//                 <div className="card card-registration my-4">
//                   <div className="row g-0">
//                     <div className="col-xl-6">
//                       <div className="card-body p-md-5 text-black">
//                         <h3 className="mb-5 text-uppercase">

//                           Registration form
//                         </h3>

//                         <div className="row">
//                           <div className="col-md-6 mb-4">
//                             <div className="form-outline">
//                               <input
//                                 type="text"
//                                 id="form3Example1m"
//                                 className="form-control form-control-lg"
//                                 value={fname}
//                                 onChange={onChangeFname}
                                
//                               />{fnameError &&<div className="error-msg"> {fnameError}</div>}
//                               <label
//                                 className="form-label"
//                                 htmlFor="form3Example1m"
//                               >
//                                 First name
//                               </label>
//                             </div>
//                           </div>
//                           <div className="col-md-6 mb-4">
//                             <div className="form-outline">
//                               <input
//                                 type="text"
//                                 id="form3Example1n"
//                                 className="form-control form-control-lg"
//                                 value={lname}
//                                 onChange={onChangeLname}
                                
//                               />{lnameError &&<div className="error-msg"> {lnameError}</div>}
//                               <label
//                                 className="form-label"
//                                 htmlFor="form3Example1n"
//                               >
//                                 Last name
//                               </label>
//                             </div>
//                           </div>
//                         </div>


//                         <div className="form-outline mb-4">
//                           <input
//                             type="email"
//                             id="form3Example97"
//                             className="form-control form-control-lg"
//                             value={email}
//                             onChange={onChangeEmail}
                            
//                           />{emailError &&<div className="error-msg"> {emailError}</div>}
//                           <label
//                             className="form-label"
//                             htmlFor="form3Example97"
//                           >
//                             Email ID
//                           </label>
//                         </div>

//                         <div className="form-outline mb-4">
//                           <input
//                             type="text"
//                             id="form3Example97"
//                             className="form-control form-control-lg"
//                             value={pass}
//                             onChange={onChangePass}
                            
//                           />{passwordError &&<div className="error-msg"> {passwordError}</div>}
//                           <label
//                             className="form-label"
//                             htmlFor="form3Example97"
//                           >
//                             Password
//                           </label>
//                         </div>

//                         <div class="d-flex justify-content-end pt-3">
//                           <button
//                             type="button"
//                             class="btn btn-success btn-lg"
//                             onClick={() => {
//                               navigate("/");
//                             }}
//                           >
//                             Home
//                           </button>
//                           <button
//                             type="submit"
//                             className="btn btn-warning btn-lg ms-2"
//                           >
//                             Submit form
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </form>
//       </section>
//     </>
//   );
// };

// export default Signup;
