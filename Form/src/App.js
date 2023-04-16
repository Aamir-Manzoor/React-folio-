/* eslint-disable no-unused-vars */
import { useState } from "react";


import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    firstName:"", lastName:"", email:"", country:"India", state:"" , city : "", street:"",
    comments:"", candidates:"", offers:"", everthing:'', same:"",pushNotications:''
  });


function changeHandler(event){
  const {name, value , checked , type} = event.target;
  setFormData( (prev) => ({...prev,[name] : type === "checkbox" ? checked : value}))
}

function submitHandler(event){
  event.preventDefault();
  console.log(formData)
}


  return (
      <div className="flex flex-col items-center">
          <form onSubmit={submitHandler}>

          <label htmlFor="firstName"> First Name</label>
          <br />
          <input 
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Amir"
          value={formData.firstName}
          onChange = {changeHandler}
          className="outline"
           />
           <br />
           <label htmlFor="lastName"> Last Name</label>
          <br />
          <input 
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Manzoor"
          value={formData.lastName}
          onChange={changeHandler}
          className="outline"
           />
           <br />
           <label htmlFor="email"> Email </label>
          <br />
          <input 
          type="text"
          name="email"
          id="email"
          placeholder="Amir@gmail.com"
          value={formData.email}
          onChange={changeHandler}
          className="outline"
           />
          
          <br />
          <br />

          <label htmlFor="country"></label>
          <select 
          name="country"
          id="country"
          value={formData.country}
          onChange={changeHandler}
          className="outline"
          >

          <option > India </option>
          <option > United States</option>
          <option > Cananda </option>
          <option > Dubai </option>
          
          </select>
        
          <br />
          <label htmlFor="street"> Street Address </label>
         <br />
         <input 
         type="text"
         name="street"
         id="street"
         placeholder="Street Address"
         value={formData.street}
         onChange={changeHandler}
         className="outline"
          />

          <br />
          <label htmlFor="city"> City </label>
         <br />
         <input 
         type="text"
         name="city"
         id="city"
         placeholder="City"
         value={formData.city}
         onChange={changeHandler}
         className="outline"
          />

          <br />
          <label htmlFor="State"> State / Province </label>
         <br />
         <input 
         type="text"
         name="state"
         id="state"
         placeholder="State"
         value={formData.state}
         onChange={changeHandler}
         className="outline"
          />
    <br />
    <br />
          <fieldset>
              <legend>By Email</legend>
              <br />
              <div className="flex">
              <input 
                  type="checkbox"
                  name="comments"
                  id="comments"
                  value={formData.comments}
                  onChange={changeHandler}
               />
               <div className="">
               <label htmlFor="comments"> Comments</label>
               <p>Get Notified when someone posts something</p>
               </div>
              </div>
              <br />

              <div className="flex">
              <input 
                  type="checkbox"
                  name="candidates"
                  id="candidates"
                  value={formData.candidates}
                  onChange={changeHandler}
               />
               <div className="">
               <label htmlFor="candidates"> Candidates</label>
               <p>Get Notified when a candidate applys for a job</p>
               </div>
              </div>
              <br />

              <div className="flex">
              <input 
                  type="checkbox"
                  name="offers"
                  id="offers"
                  value={formData.offers}
                  onChange={changeHandler}
               />
               <div className="">
               <label htmlFor="offers"> Offers</label>
               <p>Get Notified when someone accepts or rejects offer</p>
               </div>
              </div>
          
          </fieldset>
            <br />
            <fieldset>
            <legend>Push Notifications</legend>
            <p>These are delivered via SMS to your Phone </p>
            
            <input 
            type="radio" 
            id="evertyhing"
            name="everything"
            value={formData.everthing}
            />
            <label htmlFor="everything">Everthing</label>
            
            <br />

            <input 
            type="radio" 
            id="same"
            name="same"
            value={formData.same}
            />
            <label htmlFor="same">Same as Email</label>
            
            <br />
            <input 
            type="radio" 
            id="pushNotifications"
            name="pushNotifications"
            value={formData.pushNotications}
            />
            <label htmlFor="pushNotifications">No Push Notifications</label>
            
            <br />

            </fieldset>

          <button>Save</button>

          </form>
      </div>
  );
}

export default App;
