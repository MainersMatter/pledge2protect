import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import ConfirmationDialog from '../ConfirmationDialog/confirmation-dialog';
import PrivacyTermsDialog from '../PrivacyAndTerms/privacy-terms-dialog';

import './pledge-form.scss';


const PledgeForm = () => {
    const {
        register, handleSubmit, errors, formState,
    } = useForm({
        mode: 'onChange',
    });

    const [isConfirmationDialogOpen, setConfirmationDialogOpen] = useState(false);
    const [isPrivacyAndTermsDialogOpen, setPrivacyAndTermsDialogOpen] = useState(false);

    const onSubmit = async (data) => {
        try {
            await axios.post('/pledge', data);
            setConfirmationDialogOpen(true);
        } catch (error) {
            console.error(`Error occurred posting pledge: ${error}`);
            // TODO: replace with something nicer
            // eslint-disable-next-line no-alert
            alert('Sorry there was an issue saving your pledge.  Please try again.');
        }
    };

    return (
        <div className="pledge-form-container">
            <form className="pledge-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-1_row-1">
                    <label htmlFor="field-email">Email<span aria-hidden="true">*</span>:
                        <input
                            id="field-email"
                            name="emailAddress"
                            type="email"
                            aria-describedby={`${errors.emailAddress ? 'error-email' : ''}`}
                            aria-required="true"
                            aria-invalid={errors.emailAddress}
                            ref={register({ required: true })}
                        />
                    </label>
                    { errors.emailAddress && <p className="error" id="error-email" aria-live="polite">This field is required</p> }
                </div>
                <div className="col-1_row-2">
                    <label htmlFor="field-firstname">First Name<span aria-hidden="true">*</span>:
                        <input
                            id="field-firstname"
                            name="firstName"
                            type="text"
                            aria-describedby={`${errors.emailAddress ? 'error-firstname' : ''}`}
                            aria-required="true"
                            aria-invalid={errors.firstName}
                            ref={register({ required: true })}
                        />
                    </label>
                    { errors.firstName && <p className="error" id="error-firstname" aria-live="polite">This field is required</p> }
                </div>
                <div className="col-2_row-2">
                    <label htmlFor="field-lastname">Last Name<span aria-hidden="true">*</span>:
                        <input
                            id="field-lastname"
                            name="lastName"
                            type="text"
                            aria-describedby={`${errors.emailAddress ? 'error-lastname' : ''}`}
                            aria-required="true"
                            aria-invalid={errors.lastName}
                            ref={register({ required: true })}
                        />
                    </label>
                    { errors.lastName && <p className="error" id="error-lastname" aria-live="polite">This field is required</p> }
                </div>
                <div className="col-1_row-5">
                    <label htmlFor="field-zip">Zip Code:
                        <input
                            id="field-zip"
                            name="zipCode"
                            type="tel"
                            aria-describedby={`${errors.emailAddress ? 'error-zip' : ''}`}
                            aria-invalid={errors.zipCode}
                            ref={register({ minLength: 5, maxLength: 10 })}
                        />
                    </label>
                    { errors.zipCode && <p className="error" id="error-zip" aria-live="polite">Zip Code must be either 5 or 10 digits</p>}
                </div>
                <div className="col-1_row-6">
                    <span id="required-fields-msg" aria-hidden="true">* Indicates this field is required.</span>
                </div>
                <div className="col-1_row-7">
                    <div className="inline-field">
                        <div className="form-group">
                            <input
                                type="checkbox"
                                id="privacy-policy-check"
                                name="acceptPrivacyPolicy"
                                aria-labelledby="privacy-terms-link"
                                ref={register({ required: true })}
                            />
                            <button
                                id="privacy-terms-link"
                                className="btn-link privacy-terms-link"
                                type="button"
                                onClick={() => setPrivacyAndTermsDialogOpen(true)}
                            >
                                I have read and agree with the Terms and Conditions and Privacy Policy
                            </button>
                        </div>
                    </div>

                    <button className="btn" type="submit" disabled={!formState.isValid}>Take The Pledge</button>
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
