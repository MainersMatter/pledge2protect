import React from 'react';
import { useForm } from 'react-hook-form'
import './Pledge.css';
import stateMapping from './states';


const PledgeForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        // fetch('/user', {
        //     method: 'POST',
        //     body: data
        // });
    };
    return (
        <div className="pledge-form-container">
          <form className="pledge-form" onSubmit={handleSubmit(onSubmit)}>
              <div className='col-1_row-1'>
                  <label>First Name:</label>
                  <input name='firstName' ref={register({ required: true })}/>
                  { errors.firstName && <p className='error'>This field is required</p> }
              </div>
              <div className='col-2_row-1'>
                  <label>Last Name:</label>
                  <input name='lastName' ref={register({ required: true })}/>
                  { errors.lastName && <p className='error'>This field is required</p> }
              </div>
              <div className='col-1_row-2'>
                  <label>Address Line 1:</label>
                  <input name='addressLineOne' ref={register({ required: true })}/>
                  { errors.addressLineOne && <p className='error'>This field is required</p> }
              </div>
              <div className='col-2_row-2'>
                  <label>Address Line 2:</label>
                  <input name='addressLineTwo'/>
              </div>
              <div className='col-1_row-3'>
                  <label>City:</label>
                  <input name='city' ref={register({ required: true })}/>
                  { errors.city && <p className='error'>This field is required</p> }
              </div>
              <div className='col-2_row-3'>
                  <label>State:</label>
                  <select name='state-input' ref={register({ required: true })}>
                      { stateMapping.map((state, index) => {
                          return <option key={state.value} value={state.value}>{state.label}</option>
                        })
                      }
                  </select>
                  { errors.state && <p className='error'>This field is required</p> }
                  </div>
              <div className='col-1_row-4'>
                  <label>Zip Code:</label>
                  <input name='zipCode' ref={register({ required: true, maxLength: 5 })}/>
                  { errors.zipCode && <p className='error'>This field is required</p> }
              </div>
              <div className='col-1_row-5'>
                <input className='btn' type='submit' value='Take The Pledge'/>
              </div>
          </form>
        </div>
    );
};

export default PledgeForm;
