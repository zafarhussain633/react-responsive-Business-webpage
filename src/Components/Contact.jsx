import React,{useState} from 'react'
import home from './home.svg';


function Contact() {
    const [state, setstate] = useState(true);
    return (
    
             (state)? <ContactCard handleSubmit ={()=>setstate(false)} /> : <div className = "d-flex  justify-content-center card-title"><div>Thank you for showing intreast Our team will contact you soon</div></div>
        

   

    )
}



function ContactCard (props){
    return (
        <div className="container mt-5">
      <div className="row ">
        <div className="col-sm d-flex justify-content-center">
         <div>
         <form onSubmit ={props.handleSubmit}> 
        <div className="form-group mt-4">
          <label htmlFor="Email1">Email address</label>
          <input type="email" className="form-control" id="Email1" aria-describedby="emailHelp" placeholder="Enter email" required />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group mt-4">
          <label htmlFor="phone1">Phone</label>
          <input type="tel" className="form-control" id="phone1" placeholder="eg: 9876543210" required/>
        </div>

        <div className="form-group mt-4">
          <label htmlFor="Project1">Project Name</label>
          <input type="text" className="form-control" id="Project1" placeholder="project name" required/>
        </div>

        <div className="form-group mt-4">
          <label htmlFor="ProjectDesc">Project Name</label>
          <textarea  className="form-control" id="ProjectDesc" placeholder="project detail" />
        </div>
        <button id="start-btn" className="mt-4">Submit</button>
      </form>
         </div>
        </div>
          {/* end of row 1  */}

        <div className="col-sm  d-flex justify-content-end ">
         <img src={home} alt="" width="600px" className="img-fluid" />
        </div>   
        {/* end of row 2  */}

      </div>
    </div>
    )
}

export default Contact
