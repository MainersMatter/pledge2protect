import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import axios from 'axios';

import ConfirmationDialog from '../ConfirmationDialog/confirmation-dialog';
import PrivacyTermsDialog from '../PrivacyAndTerms/privacy-terms-dialog';

import './Pledge.scss';
import stateMapping from './states';


const PledgeForm = () => {
    const { register, handleSubmit, errors, formState } = useForm({
        mode: "onChange"
    });

    const [isConfirmationDialogOpen, setConfirmationDialogOpen] = useState(false);
    const [isPrivacyAndTermsDialogOpen, setPrivacyAndTermsDialogOpen] = useState(false);

    const onSubmit = async data => {
        try {
            await axios.post('/pledge', data);
            setConfirmationDialogOpen(true);
        } catch (error) {
            console.error(`Error occurred posting pledge: ${error}`);
            // TODO: replace with something nicer
            alert('Sorry there was an issue saving your pledge.  Please try again.');
        }
    };

    return (
        <div className="pledge-form-container">
            <form className="pledge-form" onSubmit={handleSubmit(onSubmit)} aria-describedby="required-fields-msg">
                <div className='col-1_row-1'>
                    <label htmlFor="field-email">Email*:</label>
                    <input id="field-email" name='emailAddress' ref={register({ required: true })}/>
                    { errors.emailAddress && <p className='error'>This field is required</p> }
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
                    <input id="field-address1" name='addressLine1' ref={register()}/>
                </div>
                <div className='col-2_row-3'>
                    <label htmlFor="field-address2">Address Line 2:</label>
                    <input id="field-address2" name='addressLine2' ref={register()}/>
                </div>
                <div className='col-1_row-4'>
                    <label htmlFor="field-city">City:</label>
                    <input id="field-city" name='city' ref={register()}/>
                </div>
                <div className='col-2_row-4'>
                    <label htmlFor="field-state">State:</label>
                    <select id="field-state" name='state' defaultValue="ME" ref={register()}>
                        { stateMapping.map((state, index) => (
                            <option key={state.value} value={state.value}>
                                {state.label}
                            </option>
                        )) }
                    </select>
                </div>
                <div className='col-1_row-5'>
                    <label htmlFor="field-zip">Zip Code:</label>
                    <input id="field-zip" name='zipCode' ref={register({ minLength: 5, maxLength: 10 })}/>
                    { errors.zipCode && <p className='error'>Zip Code must be either 5 or 10 digits</p> }
                </div>
                <div className='col-1_row-6'>
                    <span id="required-fields-msg">* Indicates this field is required.</span>
                </div>
                <div className='col-1_row-7'>
                    <div className="inline-field">
                        <div className="form-group">
                            <input type="checkbox" id="privacy-policy-check" name="acceptPrivacyPolicy" ref={register({ required: true })} />
                            <a className="btn-link" type="button" onClick={() => setPrivacyAndTermsDialogOpen(true)}>
                                I have read and agree with the Terms and Conditions and Privacy Policy
                            </a>
                        </div>
                    </div>

                    <button className='btn' type='submit' disabled={!formState.isValid}>Take The Pledge</button>
                </div>
            </form>
            { isConfirmationDialogOpen && (
                <ConfirmationDialog closeHandler={() => setConfirmationDialogOpen(false)} />
            ) }
            { isPrivacyAndTermsDialogOpen && (
                <PrivacyTermsDialog closeHandler={() => setPrivacyAndTermsDialogOpen(false)} />
            ) }
        </div>
    );
};

export default PledgeForm;
