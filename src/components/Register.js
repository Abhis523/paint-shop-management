import React from 'react'
import "../css/Register.css"

function Register() {
    return (

        <div class="container login-container">
            <div class="row">
                <div class="col-md-6">
                    <div class="ads">
                        <h3 class="mb-5 text-uppercase" style={{textAlign : 'center'}}>registration form</h3>
                    </div>
                    <img src={ 'https://media.architecturaldigest.com/photos/60d1ef982990a3040500dbb5/3:4/w_2880,h_3840,c_limit/GettyImages-1270527025.jpg'}
                        alt="/" class="img-fluid image" width="500px;" />

                </div>
                <div class="col-md-6 login-form">

                    <div class="card-body p-md-5 text-black">


                        <div class="row">
                            <div class="col-md-6 mb-4">
                                <div class="form-outline">
                                    <input type="text" id="form3Example1m" class="form-control form-control-lg"
                                        placeholder="First Name" />

                                </div>
                            </div>
                            <div class="col-md-6 mb-4">
                                <div class="form-outline">
                                    <input type="text" id="form3Example1m" class="form-control form-control-lg"
                                        placeholder="Last Name" />

                                </div>
                            </div>
                        </div>

                        <div class="form-outline mb-4">
                            <input type="text" id="form3Example8" class="form-control form-control-lg"
                                placeholder="Address" />

                        </div>

                        <div class="row">

                            <div class="col-md-6 mb-4">

                                <select class="select" style={{width: '100%', height: '50px'}}>
                                    <option value="1">City</option>
                                    <option value="2">Pune</option>
                                    <option value="3">Ahmednagar</option>
                                    <option value="4">Satara</option>
                                    <option value="5">Mumbai</option>
                                    <option value="6">Dhule</option>
                                    <option value="7">Nashik</option>
                                    <option value="8">Kolhapur</option>
                                    <option value="9">Jalgaon</option>
                                    <option value="10">Panjim</option>
                                </select>

                            </div>

                            <div class="col-md-6 mb-4">
                                <select class="select" style={{width: '100%', height: '50px'}}>
                                    <option value="1">State</option>
                                    <option value="2">Maharashtra</option>
                                    <option value="3">Kerala</option>
                                    <option value="4">Gujrat</option>
                                    <option value="4">Goa</option>
                                </select>

                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6 mb-4">

                                <select class="select" style={{width: '100%', height: '50px'}}>
                                    <option value="1">Country</option>
                                    <option value="2">India</option>
                                </select>

                            </div>
                        </div>

                        <div class="form-outline mb-4">
                            <input type="text" id="form3Example97" class="form-control form-control-lg"
                                placeholder="Contact No" />

                        </div>

                        <div class="form-outline mb-4">
                            <input type="text" id="form3Example97" class="form-control form-control-lg"
                                placeholder="Email ID" />
                            
                        </div>

                        <div class="form-outline mb-4">
                            <input type="text" id="form3Example90" class="form-control form-control-lg"
                                placeholder="Password" />
                            
                        </div>

                        <div class="d-flex justify-content-end pt-3">
                            <button type="button" class="btn btn-light btn-lg">Reset all</button>
                            <button type="button" class="btn btn-warning btn-lg ms-2">Submit form</button>
                        </div>

                    </div>
                    
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <br/>
    </div >
  )
}

export default Register