import React, { Component } from 'react'
import {Consumer} from '../../Context'
import TextInputGroup from '../layouts/TextInputGroup'
import uuid from 'uuid'

 class AddContact extends Component {

    state={
        
        name:'',
        email:'',
        phone:'',
        errors:{}
    }

    onSubmit = (dispatch,e) => {
        e.preventDefault();
        const { name ,email ,phone} =this.state;

        //checkk for errors

        if(name===''){
            this.setState({errors:{name: 'Name is required'}});
            return ;
        }
        if(email===''){
            this.setState({errors:{email: 'Email is required'}});
            return ;
        }
        if(phone===''){
            this.setState({errors:{phone: 'Phone is required'}});
            return ;
        }

        const newContact={
            id:uuid(),
            name,
            email,
            phone,
            
        };
        dispatch({type:'ADD_CONTACT',payload:newContact});

        //after dispatching clear fields
        this.setState({
            name:'',
            email:'',
            phone:'',
            errors:{}
        })
    }

    onChange = (e)=> 
        this.setState({[e.target.name]: e.target.value}) ;

  render() {
      const { name , email , phone ,errors}=this.state;

      return(
          <Consumer>
            {value => {
                const {dispatch} =value;
                return(
                <div>
                <div className="card mb-3">
                    <div className="card-header">
                        Add Contact
                    </div>
                    <div className="card-body">
                        <form action="" onSubmit={this.onSubmit.bind(this,dispatch)}>
                        
                        <TextInputGroup 
                            label="Name"
                            name="name"
                            placeholder="Enter name..."
                            value={name}
                            onChange={this.onChange}
                            error={errors.name}
                        />


                        <TextInputGroup 
                            label="Email"
                            name="email"
                            placeholder="Enter email..."
                            value={email}
                            type="email"
                            onChange={this.onChange}
                            error={errors.email}
                        />

                        <TextInputGroup 
                            label="Phone"
                            name="phone"
                            placeholder="Enter phone..."
                            value={phone}
                            onChange={this.onChange}
                            error={errors.phone}
                        />
                    <input 
                    type="submit"
                    value="Add Contact"
                    className="btn btn-dark btn-block"
                    />
                        </form>
                    </div>
                </div>
              </div>
            

      )}}
          
          </Consumer>
      
      )
  }
 }


export default AddContact;