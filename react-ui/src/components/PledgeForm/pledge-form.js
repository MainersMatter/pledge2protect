import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import ConfirmationDialog from '../ConfirmationDialog/confirmation-dialog';
import PrivacyTermsDialog from '../PrivacyAndTerms/privacy-terms-dialog';
import Dialog from '../Dialog/dialog';
import stateMappings from './states';
import { errors as sharedErrors } from '../../shared/errors';

import './pledge-form.scss';


const GET_WELL_LOOP_URL = 'https://apps.getwellnetwork.com/loop-enroll/welcome-to-maine/';

const DEPENDENT_RELATIONSHIP_CHOICES = [
    { value: 'son-daughter', label: 'Son/Daughter' },
    { value: 'niece-nephew', label: 'Niece/Nephew' },
    { value: 'grandson-granddaughter', label: 'Grandson/Granddaughter' },
];

const PledgeForm = (props, ref) => {
    const {
        register, handleSubmit, errors, formState,
    } = useForm({
        mode: 'onChange',
    });

    const { visitIntention } = props;

    const [isConfirmationDialogOpen, setConfirmationDialogOpen] = useState(false);
    const [isCovidTestDialogOpen, setCovidTestDialogOpen] = useState(false);
    const [isStateDialogOpen, setStateDialogOpen] = useState(false);
    const [isDestinationEmailsDialogOpen, setDestinationEmailsDialogOpen] = useState(false);
    const [isPrivacyAndTermsDialogOpen, setPrivacyAndTermsDialogOpen] = useState(false);
    const [partyMembersCount, setPartyMembersCount] = useState(1);
    const partyMembersArray = new Array(partyMembersCount).fill(0);
    const [dependentsCount, setDependentsCount] = useState(0);
    const dependentsArray = new Array(dependentsCount).fill(0);
    const [destinationsCount, setDestinationsCount] = useState(1);
    const destinationsArray = new Array(destinationsCount).fill(0);

    const onSubmit = async (data) => {
        if (visitIntention !== 'return') {
            try {
                await axios.post('/pledge', data);
                window.location = GET_WELL_LOOP_URL;
                return;
            } catch (error) {
                console.error(`Error occurred posting pledge: ${error}`);
                let errorMessage = 'Sorry there was an issue saving your pledge.  Please try again.';
                if (error?.response?.data?.code === sharedErrors.EMAIL_RATE_LIMIT_EXCEEDED.code) {
                    errorMessage = sharedErrors.EMAIL_RATE_LIMIT_EXCEEDED.message;
                }
                // TODO: replace with something nicer
                // eslint-disable-next-line no-alert
                alert(errorMessage);
            }
        } else {
            window.location = GET_WELL_LOOP_URL;
            return;
        }
    };

    return (
        <div className="pledge-form-container">
            <form className="pledge-form" id="pledge" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <h3>Before arriving I pledge that,</h3>
                    <ul className="symptoms">
                        <li className="inline-field">
                            I have not experienced any of the COVID-19 symptoms in the last 24 hours:
                            <ul>
                                <li>Fever or chills</li>
                                <li>Sore throat, cough, shortness of breath, or other respiratory symptoms</li>
                                <li>Muscle aches, severe fatigue, or chills</li>
                                <li>Changes in taste or smell</li>
                            </ul>
                        </li>
                        <li className="inline-field">
                            I have not had close contact with anyone over the last 14 days who is confirmed to have
                            COVID-19
                        </li>
                    </ul>
                    <p className="select-one">Please select ONE:</p>
                    { errors['preRequirement'] && (
                        <p className="error" id="error-pre-requirement" aria-live="polite">You must select an option</p>
                    ) }
                    <ul className="pledge-requirements bullet-points">
                        <li className="inline-field">
                            <input
                                type="radio"
                                id="requirement-origin"
                                name="preRequirement"
                                value="origin"
                                ref={register({ required: true })}
                            />
                            <label htmlFor="requirement-origin">
                                1. I am from an exempt state with a low incidence of COVID-19; Vermont, Massachusetts,
                                New Hampshire
                            </label>
                        </li>
                        <li className="inline-field">
                            <input
                                type="radio"
                                id="requirement-tested"
                                name="preRequirement"
                                value="tested"
                                ref={register({ required: true })}
                            />
                            <label htmlFor="requirement-tested">
                                2. I have received a negative test result for COVID-19 on a specimen taken no longer
                                than 72 hours prior to my arrival, consistent with Maine CDC guidance
                            </label>
                            <button
                                type="button"
                                className="tooltip-icon"
                                onClick={() => setCovidTestDialogOpen(true)}
                            >
                                <span className="sr-only">Testing information</span>
                            </button>
                        </li>
                        <li className="inline-field">
                            <input
                                type="radio"
                                id="requirement-quarantined"
                                name="preRequirement"
                                value="quarantined"
                                ref={register({ required: true })}
                            />
                            <label htmlFor="requirement-quarantined">
                                3. I will quarantine for 14 days upon arrival in Maine or for the duration of the stay
                            </label>
                        </li>
                        <li className="inline-field">
                            <input
                                type="radio"
                                id="requirement-maineQuarantined"
                                name="preRequirement"
                                value="maineQuarantined"
                                ref={register({ required: true })}
                            />
                            <label htmlFor="requirement-maineQuarantined">
                                4. I have completed a 14-day quarantine <em>in Maine</em> prior to my stay
                            </label>
                        </li>
                    </ul>
                    <p>
                        (visitors may be tested for COVID-19 in Maine, but remain in quarantine while awaiting the
                        results)
                    </p>

                    <h3>
                        While in Maine, I will try to Keep Maine Healthy and:
                    </h3>
                    <ul className="try-my-best">
                        <li>
                            Keep a distance of
                            <strong>&nbsp;six feet&nbsp;</strong>
                            from people who are not in my traveling party.
                        </li>
                        <li>Wash my hands for 20 seconds with soap and water frequently.</li>
                        <li>
                            Wear a mask to help protect myself, others, and the employees of Maine businesses.
                        </li>
                        <li>
                            Contact a health care professional or dial 211 if I have a fever or symptoms. In an
                            emergency I will call 911.
                        </li>
                    </ul>
                    <div className="get-well-loop">
                        <p>
                            (Optional) Enroll in GetWell Loop, a simple symptom self-monitoring system to monitor my
                            symptoms during my visit in Maine.
                            <a
                                href={GET_WELL_LOOP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {GET_WELL_LOOP_URL}
                            </a>
                        </p>
                    </div>
                </div>

                { visitIntention !== 'return' && (
                    <>
                        <h3>Now complete these 3 easy steps and click Submit!</h3>

                        <div className="pledge-info">
                            <h4>Your Info</h4>
                            <div className="pledge-form-grid">
                                <div className="wrap-firstname">
                                    <label htmlFor="field-firstname">First Name<span aria-hidden="true">*</span>:
                                        <input
                                            id="field-firstname"
                                            name="firstName"
                                            type="text"
                                            aria-describedby={`${errors.firstName ? 'error-firstname' : ''}`}
                                            aria-required="true"
                                            aria-invalid={errors.firstName !== undefined}
                                            ref={register({ required: true })}
                                        />
                                    </label>
                                    { errors.firstName && (
                                        <p className="error" id="error-firstname" aria-live="polite">This field is required</p>
                                    ) }
                                </div>
                                <div className="wrap-lastname">
                                    <label htmlFor="field-lastname">Last Name<span aria-hidden="true">*</span>:
                                        <input
                                            id="field-lastname"
                                            name="lastName"
                                            type="text"
                                            aria-describedby={`${errors.lastName ? 'error-lastname' : ''}`}
                                            aria-required="true"
                                            aria-invalid={errors.lastName !== undefined}
                                            ref={register({ required: true })}
                                        />
                                    </label>
                                    { errors.lastName && (
                                        <p className="error" id="error-lastname" aria-live="polite">This field is required</p>
                                    ) }
                                </div>
                                <div className="wrap-email">
                                    <label htmlFor="field-email">E-mail<span aria-hidden="true">*</span>:
                                        <input
                                            id="field-email"
                                            name="emailAddress"
                                            type="email"
                                            inputMode="email"
                                            autoCorrect="off"
                                            spellCheck="false"
                                            aria-describedby={`${errors.emailAddress ? 'error-email' : ''}`}
                                            aria-required="true"
                                            aria-invalid={errors.emailAddress !== undefined}
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
                                <div className="wrap-phone">
                                    <label htmlFor="field-phone">Home phone<span aria-hidden="true">*</span>:
                                        <input
                                            id="field-phone"
                                            name="phoneNumber"
                                            type="tel"
                                            autoCorrect="off"
                                            spellCheck="false"
                                            aria-describedby={`${errors.phoneNumber ? 'error-phone' : ''}`}
                                            aria-required="true"
                                            aria-invalid={errors.phoneNumber !== undefined}
                                            ref={(e) => {
                                                register(e, { required: true, pattern: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/ });
                                                // eslint-disable-next-line no-param-reassign
                                                ref.current = e;
                                            }}
                                        />
                                    </label>
                                    { errors.phoneNumber && (
                                        <p className="error" id="error-phone" aria-live="polite">
                                            Please enter a valid phone number
                                        </p>
                                    ) }
                                </div>
                                <div className="wrap-maine-phone">
                                    <label htmlFor="field-mainePhone">Phone while in Maine:
                                        <input
                                            id="field-mainePhone"
                                            name="mainePhoneNumber"
                                            type="tel"
                                            autoCorrect="off"
                                            spellCheck="false"
                                            aria-describedby={`${errors.mainePhoneNumber ? 'error-mainePhone' : ''}`}
                                            aria-invalid={errors.mainePhoneNumber !== undefined}
                                            ref={(e) => {
                                                register(e, { pattern: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/ });
                                                // eslint-disable-next-line no-param-reassign
                                                ref.current = e;
                                            }}
                                        />
                                    </label>
                                    { errors.mainePhoneNumber && (
                                        <p className="error" id="error-mainePhone" aria-live="polite">
                                            Please enter a valid phone number
                                        </p>
                                    ) }
                                </div>
                                <div className="wrap-state">
                                    <label htmlFor="field-state">
                                        State<span aria-hidden="true">*</span>:
                                        <button
                                            type="button"
                                            className="tooltip-icon"
                                            onClick={() => setStateDialogOpen(true)}
                                        >
                                            <span className="sr-only">State information</span>
                                        </button>
                                        <select
                                            id="field-state"
                                            name="state"
                                            aria-describedby={`${errors.state ? 'error-state' : ''}`}
                                            aria-required="true"
                                            aria-invalid={errors.state !== undefined}
                                            ref={register({ required: true })}
                                        >
                                            <option value="" key="none"> </option>
                                            { stateMappings.map((stateObj) => (
                                                <option value={stateObj.value} key={stateObj.value}>{stateObj.label}</option>
                                            )) }
                                        </select>
                                    </label>
                                    { errors.state && (
                                        <p className="error" id="error-state" aria-live="polite">This field is required</p>
                                    ) }
                                </div>
                                <div className="wrap-zip">
                                    <label htmlFor="field-zip">Zip Code<span aria-hidden="true">*</span>:
                                        <input
                                            id="field-zip"
                                            name="zipCode"
                                            type="tel"
                                            aria-describedby={`${errors.zipCode ? 'error-zip' : ''}`}
                                            aria-required="true"
                                            aria-invalid={errors.zipCode !== undefined}
                                            ref={register({ required: true, pattern: /^\d{5}(-\d{4})?$/ })}
                                        />
                                    </label>
                                    { errors.zipCode && (
                                        <p className="error" id="error-zip" aria-live="polite">
                                            Zip Code must be either 5 or 10 digits
                                        </p>
                                    ) }
                                </div>
                            </div>

                            <div className="dependents">
                                <div className="wrap-dependents">
                                    <div className="inline-field">
                                        <div className="form-group">
                                            <input
                                                type="checkbox"
                                                id="dependents-certification"
                                                name="dependentsCertification"
                                                onChange={(evt) => {
                                                    if (evt.target.checked && dependentsCount === 0) {
                                                        setDependentsCount(1);
                                                    }
                                                }}
                                                ref={register()}
                                            />
                                            <label htmlFor="dependents-certification">
                                                I also certify that all persons in my care who are under the age of 18, or
                                                who are dependent on my care, meet the criteria described in this pledge.
                                                Please provide the ages of such persons in your care.
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="pledge-form-grid">
                                    { dependentsArray.map((_, dependentIndex) => (
                                        <>
                                            <div className="wrap-dependent-relationship">
                                                <label htmlFor={`field-dependent-relationship-${dependentIndex}`}>
                                                    Relationship:
                                                    <select
                                                        id={`field-dependent-relationship-${dependentIndex}`}
                                                        name={`dependentRelationship-${dependentIndex}`}
                                                        aria-describedby={`${
                                                            errors[`dependentRelationship-${dependentIndex}`] ?
                                                                `error-dependent-relationship-${dependentIndex}` : ''}
                                                        `}
                                                        aria-required="true"
                                                        aria-invalid={errors[`dependentRelationship-${dependentIndex}`] !== undefined}
                                                        ref={register({})}
                                                    >
                                                        <option value="" key="none"> </option>
                                                        { DEPENDENT_RELATIONSHIP_CHOICES.map((choiceObj) => (
                                                            <option value={choiceObj.value} key={choiceObj.value}>{choiceObj.label}</option>
                                                        )) }
                                                    </select>
                                                </label>
                                            </div>
                                            <div className={
                                                `wrap-dependent-age ${(dependentIndex === dependentsCount - 1 ? 'is-last' : '')}`
                                            }
                                            >
                                                <label htmlFor={`field-dependent-age-${dependentIndex}`}>
                                                    Age:
                                                    <input
                                                        id={`field-dependent-age-${dependentIndex}`}
                                                        name={`dependentAge-${dependentIndex}`}
                                                        type="tel"
                                                        aria-describedby={`${
                                                            errors[`dependentAge-${dependentIndex}`] ?
                                                                `error-dependent-age-${dependentIndex}` : ''}
                                                        `}
                                                        aria-required="true"
                                                        aria-invalid={errors[`dependentAge-${dependentIndex}`] !== undefined}
                                                        ref={register({ pattern: /^\d{1,3}$/ })}
                                                    />
                                                </label>
                                                { (dependentIndex === dependentsCount - 1 && (
                                                    <button
                                                        type="button"
                                                        className="remove-dependent"
                                                        onClick={() => { setDependentsCount(dependentsCount - 1); }}
                                                        title="Remove dependent"
                                                    >
                                                        <span className="sr-only">Remove dependent</span>
                                                    </button>
                                                )) }
                                            </div>
                                            { errors[`dependentAge-${dependentIndex}`] && (
                                                <p className="error" id={`error-dependent-age-${dependentIndex}`} aria-live="polite">
                                                    Please enter a valid dependent age between 0 and 120
                                                </p>
                                            ) }
                                        </>
                                    )) }
                                </div>

                                <button
                                    type="button"
                                    className="add-dependent"
                                    onClick={() => {
                                        setDependentsCount(dependentsCount + 1);
                                    }}
                                >
                                    Add minor or dependent
                                </button>
                            </div>

                            <h4>Party Members (18+)</h4>

                            <p className="instructions">
                                Send a copy of this pledge to each member of your travel party.
                            </p>

                            { partyMembersArray.map((_, memberIndex) => (
                                <div className="pledge-form-grid">
                                    <div className="wrap-member-firstname">
                                        <label htmlFor={`field-member-firstname-${memberIndex}`}>
                                            First Name:
                                            <input
                                                id={`field-member-firstname-${memberIndex}`}
                                                name={`memberFirstName-${memberIndex}`}
                                                type="text"
                                                aria-describedby={`${
                                                    errors[`memberFirstName-${memberIndex}`] ?
                                                        `error-member-firstname-${memberIndex}` : ''}
                                                `}
                                                aria-required="true"
                                                aria-invalid={errors[`memberFirstName-${memberIndex}`] !== undefined}
                                                ref={register({})}
                                            />
                                        </label>
                                        { errors[`memberFirstName-${memberIndex}`] && (
                                            <p className="error" id={`error-member-firstname-${memberIndex}`} aria-live="polite">
                                                This field is required
                                            </p>
                                        ) }
                                    </div>
                                    <div className="wrap-member-lastname">
                                        <label htmlFor={`field-member-lastname-${memberIndex}`}>
                                            Last Name:
                                            <input
                                                id={`field-member-lastname-${memberIndex}`}
                                                name={`memberLastName-${memberIndex}`}
                                                type="text"
                                                aria-describedby={`${
                                                    errors[`memberLastName-${memberIndex}`] ?
                                                        `error-member-lastname-${memberIndex}` : ''}
                                                `}
                                                aria-required="true"
                                                aria-invalid={errors[`memberLastName-${memberIndex}`] !== undefined}
                                                ref={register({})}
                                            />
                                        </label>
                                        { errors[`memberLastName-${memberIndex}`] && (
                                            <p className="error" id={`error-member-lastname-${memberIndex}`} aria-live="polite">
                                                This field is required
                                            </p>
                                        ) }
                                    </div>
                                    <div className={
                                        `wrap-member-email ${(memberIndex === partyMembersCount - 1 ? 'is-last' : '')}`
                                    }
                                    >
                                        <label htmlFor={`field-member-email-${memberIndex}`}>
                                            E-mail:
                                            <input
                                                id={`field-member-email-${memberIndex}`}
                                                name={`memberEmail-${memberIndex}`}
                                                type="email"
                                                inputMode="email"
                                                aria-describedby={`${
                                                    errors[`memberEmail-${memberIndex}`] ?
                                                        `error-member-email-${memberIndex}` : ''}
                                                `}
                                                aria-required="true"
                                                aria-invalid={errors[`memberEmail-${memberIndex}`] !== undefined}
                                                ref={register({ pattern: /^[\w-.+]+@([\w-]+.)+[\w-]{2,4}$/ })}
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
                                    </div>
                                    { errors[`memberEmail-${memberIndex}`] && (
                                        <p className="error" id={`error-member-email-${memberIndex}`} aria-live="polite">
                                            Please enter a valid email address
                                        </p>
                                    ) }
                                </div>
                            )) }

                            <button
                                type="button"
                                className="add-member"
                                onClick={() => {
                                    setPartyMembersCount(partyMembersCount + 1);
                                }}
                            >
                                Add participant
                            </button>

                            <h4>(OPTIONAL) Where will you be staying?</h4>

                            <p className="instructions">
                                To help facilitate the check-in process at your destination(s), send a copy of this
                                pledge including your name and date of arrival to a lodging establishment, campground,
                                and/or rental property by providing us with the email address and arrival date for each
                                destination you plan to visit while in Maine.
                            </p>

                            <div className="pledge-form-grid">
                                { destinationsArray.map((_, destinationIndex) => (
                                    <>
                                        <div className="wrap-destination-email">
                                            <label htmlFor={`field-destination-email-${destinationIndex}`}>
                                                Destination E-mail:
                                                <input
                                                    id={`field-destination-email-${destinationIndex}`}
                                                    name={`destinationEmail-${destinationIndex}`}
                                                    type="text"
                                                    inputMode="email"
                                                    autoCorrect="off"
                                                    spellCheck="false"
                                                    aria-describedby={`${
                                                        errors[`destinationEmail-${destinationIndex}`] ?
                                                            `error-destination-email-${destinationIndex}` : ''}
                                                    `}
                                                    aria-invalid={errors[`destinationEmail-${destinationIndex}`] !== undefined}
                                                    ref={register({
                                                        pattern: /^[\w-.+]+@([\w-]+.)+[\w-]{2,4}$/,
                                                    })}
                                                />
                                            </label>
                                            { errors[`destinationEmail-${destinationIndex}`] && (
                                                <p
                                                    className="error"
                                                    id={`error-destination-email-${destinationIndex}`}
                                                    aria-live="polite"
                                                >
                                                    Please enter a valid email address
                                                </p>
                                            ) }
                                        </div>
                                        <div className={
                                            `wrap-arrival-date ${(destinationIndex === destinationsCount - 1 ? 'is-last' : '')}`
                                        }
                                        >
                                            <label htmlFor={`field-arrival-date-${destinationIndex}`}>
                                                Date:
                                                <input
                                                    id={`field-arrival-date-${destinationIndex}`}
                                                    name={`arrivalDate-${destinationIndex}`}
                                                    type="date"
                                                    min={`${new Date().getFullYear()}-${('0' + (new Date().getMonth() + 1)).slice(-2)}-${('0' + new Date().getDate()).slice(-2)}`}
                                                    aria-describedby={`${
                                                        errors[`arrivalDate-${destinationIndex}`] ?
                                                            `error-arrival-date-${destinationIndex}` : ''}
                                                    `}
                                                    aria-invalid={errors[`arrivalDate-${destinationIndex}`] !== undefined}
                                                    ref={register()}
                                                />
                                            </label>
                                            { errors[`arrivalDate-${destinationIndex}`] && (
                                                <p
                                                    className="error"
                                                    id={`error-arrival-date-${destinationIndex}`}
                                                    aria-live="polite"
                                                >
                                                    Please enter a valid date
                                                </p>
                                            ) }
                                            { (destinationsCount > 1 && destinationIndex === destinationsCount - 1 && (
                                                <button
                                                    type="button"
                                                    className="remove-destination"
                                                    onClick={() => { setDestinationsCount(destinationsCount - 1); }}
                                                    title="Remove destination"
                                                >
                                                    <span className="sr-only">Remove destination</span>
                                                </button>
                                            )) }
                                        </div>
                                    </>
                                )) }
                            </div>
                            <button
                                type="button"
                                className="add-destination"
                                onClick={() => {
                                    setDestinationsCount(destinationsCount + 1);
                                }}
                            >
                                Add destination
                            </button>
                        </div>
                    </>
                ) }

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
            { isCovidTestDialogOpen && (
                <Dialog
                    classNames="covid-test-dialog minor-dialog"
                    title="Information on test results"
                    closeHandler={() => setCovidTestDialogOpen(false)}
                >
                    Please keep in mind you might need to provide evidence, so we encourage you to carry your results
                    with you.
                </Dialog>
            ) }
            { isStateDialogOpen && (
                <Dialog
                    classNames="state-dialog minor-dialog"
                    title="Information on states of origin"
                    closeHandler={() => setStateDialogOpen(false)}
                >
                    If members of the travel party come from different states, you will have to sign a pledge per state.
                </Dialog>
            ) }
            { isDestinationEmailsDialogOpen && (
                <Dialog
                    classNames="destination-emails-dialog minor-dialog"
                    title="Information on destination emails"
                    closeHandler={() => setDestinationEmailsDialogOpen(false)}
                >
                    If visiting multiple destinations, enter email addresses separated by a comma.
                </Dialog>
            ) }
            { isPrivacyAndTermsDialogOpen && (
                <PrivacyTermsDialog closeHandler={() => setPrivacyAndTermsDialogOpen(false)} />
            ) }
        </div>
    );
};

export default React.forwardRef(PledgeForm);
