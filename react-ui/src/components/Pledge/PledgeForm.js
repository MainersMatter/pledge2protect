import React from 'react';
import { useForm } from 'react-hook-form'
import './Pledge.scss';
import stateMapping from './states';


const PledgeForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        // TODO: Make sure that pledge form data is correctly posting to endpoint, add error handling
        // fetch('/pledge', {
        //     method: 'POST',
        //     body: data
        // });s
    };
    return (
        <div className="pledge-form-container">
          <form className="pledge-form" onSubmit={handleSubmit(onSubmit)}>
              <div className='col-1_row-1'>
                  <label htmlFor="field-email">Email*:</label>
                  <input id="field-email" name='email' ref={register({ required: true })}/>
                  { errors.email && <p className='error'>This field is required</p> }
              </div>
              <div className='col-1_row-2'>
                  <label htmlFor="field-firstname">First Name*:</label>
                  <input id="field-firstname" name='firstName' ref={register({ required: true })}/>
                  { errors.firstName && <p className='error'>This field is required</p> }
              </div>
              <div className='col-2_row-2'>
                  <label htmlFor="field-lastname">Last Name*:</label>
                  <input id="field-lastname" name='lastName' ref={register({ required: true })}/>
                  { errors.lastName && <p className='error'>This field is required</p> }
              </div>
              <div className='col-1_row-3'>
                  <label htmlFor="field-address1">Address Line 1:</label>
                  <input id="field-address1" name='addressLineOne' ref={register({ required: true })}/>
              </div>
              <div className='col-2_row-3'>
                  <label htmlFor="field-address2">Address Line 2:</label>
                  <input id="field-address2" name='addressLineTwo'/>
              </div>
              <div className='col-1_row-4'>
                  <label htmlFor="field-city">City:</label>
                  <input id="field-city" name='city' ref={register({ required: true })}/>
              </div>
              <div className='col-2_row-4'>
                  <label htmlFor="field-state">State:</label>
                  <select id="field-state" name='state-input' ref={register({ required: true })}>
                      { stateMapping.map((state, index) => {
                          if (state.value === 'ME'){
                              return <option key={state.value} value={state.value} selected>{state.label}</option>
                          }
                          return <option key={state.value} value={state.value}>{state.label}</option>
                        })
                      }
                  </select>
              </div>
              <div className='col-1_row-5'>
                  <label htmlFor="field-zip">Zip Code:</label>
                  <input id="field-zip" name='zipCode' ref={register({ required: true, maxLength: 5 })}/>
              </div>
              <div className='col-1_row-6'>
                  <label>* Indicates this field is required.</label>
                <input className='btn' type='submit' value='Take The Pledge'/>
              </div>
          </form>
        </div>
    );
};

export default PledgeForm;
