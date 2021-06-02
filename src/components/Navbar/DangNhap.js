// import { Form, Input, Button } from "antd";
// import "./DangNhap.scss";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { NavLink, useHistory,Link  } from "react-router-dom";


// let buttons;





// function Demo ()  {
  
    
  
//     let history = useHistory();
    
  
  
  
  
//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//   } = useForm();
  
  

//   const onSubmit = async (data) => {
//     try {
      
//       const response = await axios.post("https://oka1kh.azurewebsites.net/api/user/login", data)
//       .then(res => res.data)
//       .catch(err => err);
//       const token = response?.data?.token ;
//       localStorage.setItem('TOKEN',token)
//       console.log("response", response);

     
         
      
        
      

//       if(response.status === 'SUCCES')
//       {
        
//           history.push("/");
//       }
      
//       else {
//         buttons = (
//           alert('Bạn Nhập Sai Thông Tin !!!')
//         )

//       }
      
//     } catch (error) {
//       console.log("error.response.data.message", error.response.data.message);
//     }
//   };
  
//   return (
//     <div className="formLogIn_content">
//     <h2>Đăng nhập vào tài khoản</h2>
//       <form method="post" onSubmit={handleSubmit(onSubmit)}>
//         <label>Nhập Email Hoặc Số Điện Thoại</label> <br />
//         <input id="txtusername" {...register("email", { required: true })} /> <br />
//         <span style={{ color: "red" }}>
//           {errors.email === "required" && "User is required"}
//         </span>

//         <label htmlFor="password">Mật khẩu</label> <br />
//         <input type="password" {...register("pass")} /> <br />
//         <button className='loginsubmit' type="submit"  onChange={{buttons}} > Đăng Nhập </button>
//         <div className="formLogIn_content_box">
//           <div className="formLogIn_content_boxBtnLogIn">
//             {/* <button id="btnSignUp" type='submit' onChange={{buttons}} >Đăng nhập</button> */}
//           </div>
//           <div className="formLogIn_content_boxSignUp">
//             <p className="formLogIn_content_boxSignUp_lb">Bạn chưa có tài khoản?</p>
//             <p className="formLogIn_content_boxSignUp_link">Đăng ký</p>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Demo;
