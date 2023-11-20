import axios from "axios";
import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class PersonsList extends Component{

state = {
    persons: []
}


componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=10`)
    .then(res => {
        console.log(res.data);
        const persons = res.data.results;
        this.setState({ persons });
    })
    }




    render(){
    return (
        // <div >
        //    <h2 style={{  backgroundColor: '#134a85', color: '#f7f9fa', textAlign: 'center'}  }>User List</h2>

        //   {this.state.persons.map(person => (

        //     <div style={{display: "flex",    flexDirection: 'column',
        //     justifyContent: 'flex-start',
        //     alignItems: 'flex-start',
        //     gap: '20px',
        //     padding: '20px',
        //     backgroundColor: '#f0f0f0',
        //     color: '#333', }}>
            
  

        // <div style={{  backgroundColor: '#7f95a1', color: '#f7f9fa'}  } key={person.login.uuid}>
        //             <h3 style={{ borderWidth: 1, borderColor: 'black', borderStyle: 'solid' }}  >{person.name.first}{person.name.last} -{person.login.uuid}</h3>
        //             <div style={{textAlign: 'center'}} >
        //                 <img style={{width: '150px',height: '150px',borderRadius: '50%',display: 'block',margin: '0'}} src={person.picture.thumbnail}  />
        //                 <button  style={{display: "block", marginTop: "10px"}} >Details</button>
        // </div>
            // <div>
            //     <p>User Name:  {person.login.username}</p>
            //     <p>Gender:  {person.gender}</p>
            //     <p>Time Zone Description:  {person.location.timezone.description}</p>
            //     <p>Address:  {person.location.street.number} {person.location.street.name},
            //                 {person.location.city}, {person.location.state}
            //                 {person.location.country} - {person.location.postcode}</p>
            //     <p>Email:  {person.email}</p>
            //     <p>Birth Data and Age:  {person.dob.date}, ({person.dob.age})</p>
            //     <p>Registered Date:  {person.registered.date}</p>
            //     <p>Phone Number:  {person.phone}</p>
            //     <p>Cell Number:  {person.cell}</p>
            // </div>
              
        // </div>
        // </div>

        //   ))}
        
        // </div>


        
<div>
  <h2 style={{ backgroundColor: '#134a85', color: '#f7f9fa', textAlign: 'center' }}>User List</h2>

  <div style={{
    display: "flex",
    flexDirection: "column",
    gap: '20px',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    color: '#333',
  }}>
    {this.state.persons.map(person => (
       <div>  
     <h3 style={{backgroundColor: '#7f95a1', borderWidth: 1, borderColor: 'black', borderStyle: 'solid', padding: '5px',margin: '0' }}>
       {person.name.first} {person.name.last} - {person.login.uuid}
     </h3>
      <div key={person.login.uuid} style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: '#7f95a1',
        color: '#f7f9fa',
        padding: '10px',
        borderRadius: '8px',
        gap: '20px',
      }}>
        
        <div>
          <img
            style={{ width: '150px', height: '150px', borderRadius: '50%', display: 'block', margin: '0' }}
            src={person.picture.thumbnail}
            alt="User Thumbnail"
          />
          <button style={{ display: "block", marginTop: "10px" }}>Details</button>
        </div>
        <div>
        
                <p>User Name:  {person.login.username}</p>
                <p>Gender:  {person.gender}</p>
                <p>Time Zone Description:  {person.location.timezone.description}</p>
                <p>Address:  {person.location.street.number} {person.location.street.name},
                            {person.location.city}, {person.location.state}
                            {person.location.country} - {person.location.postcode}</p>
                <p>Email:  {person.email}</p>
                <p>Birth Data and Age:  {person.dob.date}, ({person.dob.age})</p>
                <p>Registered Date:  {person.registered.date}</p>
                <p>Phone Number:  {person.phone}</p>
                <p>Cell Number:  {person.cell}</p>
            </div>
      </div>
      </div>
    ))}
  </div>
</div>




    )
}


}



