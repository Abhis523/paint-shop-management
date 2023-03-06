import React from "react"
import Axios from "axios";
import "../css/Login.css"
import { Link } from "react-router-dom";


class Login extends React.Component {

    constructor(props) {

        super(props)
        this.state = {

            password: '',
            // emailId: '',
            custEmail: '',
            custId: '',

            checkEmailId: '',
            test: ''

        }

    }


    Handler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    SubmitHandler = e => {
        e.preventDefault()
        // console.log(this.state) ;
        console.log(this.state);
        //  var abc =this.state;
        console.log(this.state);

        Axios.post("http://localhost:8081/paintshop/customer/login", this.state)
            .then(res => {


                localStorage.setItem('abc', JSON.stringify(res.data));

                var xyz = JSON.parse(localStorage.getItem("abc"));

                console.log("Check");

                console.log(typeof (xyz));

                //this.state.test = xyz; 


                if (xyz.length === 0) {
                    //Invalid User
                    this.state.test = 0;
                } else {
                    this.state.test = 1;
                }

                console.log(this.state.test)


                console.log(xyz[0].custId);
                console.log(xyz[0].firstname);

                // var loccustid = xyz[0].custId;
                localStorage.setItem('check_custid', xyz[0].custId);
                localStorage.setItem('check_firstname', xyz[0].firstName);
                localStorage.setItem('check_lastname', xyz[0].lastName);

                this.state.custId = xyz[0].custId;
                this.state.custEmail = xyz[0].custEmail;

                //console.log(abc);


                // localStorage.setItem('customerId', {xyz[0].custId});



                this.check();



            });
    }

    check() {
        if (this.state.test == 1) {

            alert("Valid User");

            window.location = 'http://localhost:3000/invoice';


        }
        else if (this.state.test == 0) {
            alert("Invalid User")
            window.location = 'http://localhost:3000/login';
            ;

        }

    }


    render() {
        // const { password, emailId } = this.state
        const { password, custEmail } = this.state
        return (
           <form onSubmit={this.SubmitHandler}>
               <div class="container">
                <div class="mb-3 row px-4 py-5 px-md-5 text-center text-lg-start background">
                    <label class="col-sm-2 col-form-label ">EMAILID</label>
                    <div class="col-sm-10">
                        <input class="form-control" name="custEmail" onChange={this.Handler} value={custEmail} type="text"  />
                    </div>
                </div>


                <div class="mb-3 row">
                    <label class="col-sm-2 col-form-label">password</label>
                    <div class="col-sm-10">
                        <input class="form-control" name="password" onChange={this.Handler} value={password} type="text"  />
                    </div>
                </div>


                <button type="submit" class="btn btn-secondary"  >Submit</button>
                </div>

            </form>
        


            // <div class="container h-100">
            //     <div class="d-flex justify-content-center h-100">
            //         <div class="user_card">
            //             <div class="d-flex justify-content-center">
            //                 <div class="brand_logo_container">
            //                     <img src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-circle-logo-png-transparent.png" class="brand_logo" alt="Logo" />
            //                 </div>
            //             </div>
            //             <div class="d-flex justify-content-center form_container">
            //                 <form form onSubmit={this.SubmitHandler}>
            //                     <div class="input-group mb-3">


            //                         <div class="input-group-append">
            //                             <span class="input-group-text"><i class="fas fa-user"></i></span>
            //                         </div>

            //                         <input name="" onChange={this.Handler} value={custEmail} type="text"  class="form-control input_user" placeholder="username" />

            //                     </div>


            //                     <div class="input-group mb-2">


            //                         <div class="input-group-append">
            //                             <span class="input-group-text"><i class="fas fa-key"></i></span>
            //                         </div>

            //                         <input  name="" onChange={this.Handler} value={password} type="text" class="form-control input_pass" placeholder="password" />

            //                     </div>
            //                     {/* <div class="form-group">
            //                         <div class="custom-control custom-checkbox">
            //                             <input type="checkbox" class="custom-control-input" id="customControlInline" />
            //                             <label class="custom-control-label" for="customControlInline">Remember me</label>
            //                         </div>
            //                     </div> */}

            //                     <div class="d-flex justify-content-center mt-3 login_container">
            //                         <button type="submit" name="button" class="btn login_btn">Login</button>
            //                     </div>

            //                 </form>
            //             </div>

            //             <div class="mt-4">

            //                 <div class="d-flex justify-content-center links">
            //                     Don't have an account? <a href="#" class="ml-2">Sign Up</a>
            //                 </div>

            //             </div>
            //         </div>
            //     </div>
            // </div>

        );
    }
}



export default Login;