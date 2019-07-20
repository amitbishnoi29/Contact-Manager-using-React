import React, { Component } from 'react'
import {Consumer }from '../../Context'

 class Contact extends Component {
   state={
     showInfo:false
   };
   deleteItem =(id,dispatch) => {
     dispatch({type:'DELETE_CONTACT',payload:id});
     
   }
   
  render() {
    const { id, name , email , phone}=this.props.contact;
    const {showInfo}=this.state;
    return (
      <Consumer>
        { value => { 
          const {dispatch} = value;
          return(
          <div className="card card-body mb-3">
          <h4>{name} <i 
          style={{cursor:'pointer'}}
          onClick={()=>
              this.setState({showInfo:!this.state.showInfo})
          } 
          className="fas fa-caret-down"></i>
            <i 
            style={{cursor:'pointer',float:'right',color:'red'}}
            className="fas fa-times" 
            onClick={this.deleteItem.bind(this,id,dispatch)}
            >
            </i>
          </h4>
  
          {showInfo ? <ul className="list-group">
          <li className="list-group-item">email:
          {email}</li>
          <li className="list-group-item">Phone:
          {phone}</li> 
      </ul> :null }
          
        </div>
        )}}
      </Consumer>
     
    )
  }
}


export default Contact;