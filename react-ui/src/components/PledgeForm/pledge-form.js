import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import ConfirmationDialog from '../ConfirmationDialog/confirmation-dialog';
import PrivacyTermsDialog from '../PrivacyAndTerms/privacy-terms-dialog';
import stateMappings from './states';

import './pledge-form.scss';


const PledgeForm = (props, ref) => {
    const {
        register, handleSubmit, errors, formState,
    } = useForm({
        mode: 'onChange',
    });

    const [isConfirmationDialogOpen, setConfirmationDialogOpen] = useState(false);
    const [isPrivacyAndTermsDialogOpen, setPrivacyAndTermsDialogOpen] = useState(false);
    const [partyMembersCount, setPartyMembersCount] = useState(1);
    const partyMembersArray = new Array(partyMembersCount).fill(0);

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
                <h3>Your Info</h3>
                <div className="pledge-form-grid">
                    <div className="wrap-fullname">
                        <label htmlFor="field-fullname">Full Name<span aria-hidden="true">*</span>:
                            <input
                                id="field-fullname"
                                name="fullName"
                                type="text"
                                aria-describedby={`${errors.fullName ? 'error-fullname' : ''}`}
                                aria-required="true"
                                aria-invalid={errors.fullName}
                                ref={register({ required: true })}
                            />
                        </label>
                        { errors.fullName && (
                            <p className="error" id="error-fullname" aria-live="polite">This field is required</p>
                        ) }
                    </div>
                    <div className="wrap-email">
                        <label htmlFor="field-email">E-mail<span aria-hidden="true">*</span>:
                            <input
                                id="field-email"
                                name="emailAddress"
                                type="email"
                                autoCorrect="off"
                                spellCheck="false"
                                aria-describedby={`${errors.emailAddress ? 'error-email' : ''}`}
                                aria-required="true"
                                aria-invalid={errors.emailAddress}
                                ref={(e) => {
                                    register(e, { required: true, pattern: /^[\w-.+]+@([\w-]+.)+[\w-]{2,4}$/ });
                                    // eslint-disable-next-line no-param-reassign
                                    ref.current = e;
                                }}
                            />
                        </label>
                        { errors.emailAddress && (
                            <p className="error" id="error-email" aria-live="polite">
                                Please enter a valid email address
                            </p>
                        ) }
                    </div>
                    <div className="wrap-state">
                        <label htmlFor="field-state">
                            State<span aria-hidden="true">*</span>:
                            <button
                                type="button"
                                className="tooltip-icon"
                            >
                                <span className="sr-only">State information</span>
                            </button>
                            <select
                                id="field-state"
                                name="state"
                                aria-describedby={`${errors.state ? 'error-state' : ''}`}
                                aria-required="true"
                                aria-invalid={errors.state}
                                ref={register({ required: true })}
                            >
                                <option value=""> </option>
                                { stateMappings.map((stateObj) => (
                                    <option value={stateObj.value}>{stateObj.label}</option>
                                )) }
                            </select>
                        </label>
                        { errors.state && (
                            <p className="error" id="error-state" aria-live="polite">This field is required</p>
                        ) }
                    </div>
                    <div className="wrap-zip">
                        <label htmlFor="field-zip">Zip Code:
                            <input
                                id="field-zip"
                                name="zipCode"
                                type="tel"
                                aria-describedby={`${errors.zipCode ? 'error-zip' : ''}`}
                                aria-invalid={errors.zipCode}
                                ref={register({ pattern: /^\d{5}(-\d{4})?$/ })}
                            />
                        </label>
                        { errors.zipCode && (
                            <p className="error" id="error-zip" aria-live="polite">
                                Zip Code must be either 5 or 10 digits
                            </p>
                        ) }
                    </div>
                </div>
                <h3>Where are you heading to?</h3>
                <div className="pledge-form-grid">
                    <div className="wrap-destination-email">
                        <label htmlFor="field-destination-email">
                            Destination E-mail<span aria-hidden="true">*</span>:
                            <button
                                type="button"
                                className="tooltip-icon"
                            >
                                <span className="sr-only">Destination email information</span>
                            </button>
                            <input
                                id="field-destination-email"
                                name="destinationEmail"
                                type="text"
                                inputmode="email"
                                autoCorrect="off"
                                spellCheck="false"
                                aria-describedby={`${errors.destinationEmail ? 'error-email' : ''}`}
                                aria-required="true"
                                aria-invalid={errors.destinationEmail}
                                ref={register({
                                    required: true,
                                    pattern: /^([\w-.+]+@([\w-]+.)+[\w-]{2,4}( *, *)?)+$/,
                                })}
                            />
                        </label>
                        { errors.destinationEmail && (
                            <p className="error" id="error-destination-email" aria-live="polite">
                                Please enter a valid email address or comma-separated list of email addresses
                            </p>
                        ) }
                    </div>
                </div>

                <h3>Party Members</h3>
                <div className="pledge-form-grid">
                    { partyMembersArray.map((_, memberIndex) => (
                        <>
                            <div className="wrap-member-fullname">
                                <label htmlFor={`field-member-fullname-${memberIndex}`}>
                                    Full Name<span aria-hidden="true">*</span>:
                                    <input
                                        id={`field-member-fullname-${memberIndex}`}
                                        name={`memberFullName-${memberIndex}`}
                                        type="text"
                                        aria-describedby={`${
                                            errors[`memberFullName-${memberIndex}`] ?
                                                `error-member-fullname-${memberIndex}` : ''}
                                        `}
                                        aria-required="true"
                                        aria-invalid={errors[`memberFullName-${memberIndex}`]}
                                        ref={register({ required: true })}
                                    />
                                </label>
                                { errors[`memberFullName-${memberIndex}`] && (
                                    <p className="error" id={`error-member-fullname-${memberIndex}`} aria-live="polite">
                                        This field is required
                                    </p>
                                ) }
                            </div>
                            <div className={
                                `wrap-member-email ${(memberIndex === partyMembersCount - 1 ? 'is-last' : '')}`
                            }
                            >
                                <label htmlFor={`field-member-email-${memberIndex}`}>
                                    E-mail<span aria-hidden="true">*</span>:
                                    <input
                                        id={`field-member-email-${memberIndex}`}
                                        name={`memberEmail-${memberIndex}`}
                                        type="text"
                                        aria-describedby={`${
                                            errors[`memberEmail-${memberIndex}`] ?
                                                `error-member-email-${memberIndex}` : ''}
                                        `}
                                        aria-required="true"
                                        aria-invalid={errors[`memberEmail-${memberIndex}`]}
                                        ref={register({ required: true, pattern: /^[\w-.+]+@([\w-]+.)+[\w-]{2,4}$/ })}
                                    />
                                </label>
                                { (memberIndex === partyMembersCount - 1 && (
                                    <button
                                        type="button"
                                        className="remove-member"
                                        onClick={() => { setPartyMembersCount(partyMembersCount - 1); }}
                                        title="Remove participant"
                                    >
                                        <span className="sr-only">Remove participant</span>
                                    </button>
                                )) }
                                { errors[`memberEmail-${memberIndex}`] && (
                                    <p className="error" id={`error-member-email-${memberIndex}`} aria-live="polite">
                                        This field is required
                                    </p>
                                ) }
                            </div>
                        </>
                    )) }
                </div>

                <button
                    type="button"
                    className="add-member"
                    onClick={() => {
                        setPartyMembersCount(partyMembersCount + 1);
                    }}
                >
                    Add participant
                </button>

                <p id="required-fields-msg" aria-hidden="true">* Indicates this field is required.</p>

                <div className="wrap-privacy">
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
                                I have read and agree with the Privacy Policy
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

export default React.forwardRef(PledgeForm);
