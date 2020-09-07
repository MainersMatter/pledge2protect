import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import ConfirmationDialog from '../ConfirmationDialog/confirmation-dialog';
import PrivacyTermsDialog from '../PrivacyAndTerms/privacy-terms-dialog';
import Dialog from '../Dialog/dialog';
import stateMappings from './states';

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

    const [isPledgePromptShown, setPledgePromptShown] = useState(false);
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
        if (
            data['requirement-quarantined'] === false
            && data['requirement-tested'] === false
            && data['requirement-origin'] === false
            && data['requirement-getwellloop'] === false
        ) {
            setPledgePromptShown(true);
            window.location = '#pledge';
            await false;
            return;
        }

        if (visitIntention !== 'return') {
            try {
                await axios.post('/pledge', data);
                window.location = GET_WELL_LOOP_URL;
                return;
            } catch (error) {
                console.error(`Error occurred posting pledge: ${error}`);
                // TODO: replace with something nicer
                // eslint-disable-next-line no-alert
                alert('Sorry there was an issue saving your pledge.  Please try again.');
            }
        } else {
            window.location = GET_WELL_LOOP_URL;
            return;
        }
    };

    return (
        <div className="pledge-form-container">
            <form className="pledge-form" id="pledge" onSubmit={handleSubmit(onSubmit)}>
                <div className="bullet-points">
                    { isPledgePromptShown && (
                        <p className="error" id="error-pledge" aria-live="polite">
                            You must check at least one pledge item
                        </p>
                    ) }
                    <h3>Before arriving I pledge that,</h3>
                    <ul>
                        <li className="inline-field">
                            <input
                                type="checkbox"
                                id="requirement-quarantined"
                                name="requirement-quarantined"
                                onChange={() => setPledgePromptShown(false)}
                                ref={register()}
                            />
                            <label htmlFor="requirement-quarantined">
                                1. I commit to staying "in quarantine" except for essential trips during which I will
                                use a mask and hand washing precautions
                                for <strong>14 days upon my arrival in Maine</strong>, or
                            </label>
                        </li>
                        <li className="inline-field">
                            <input
                                type="checkbox"
                                id="requirement-tested"
                                name="requirement-tested"
                                onChange={() => setPledgePromptShown(false)}
                                ref={register()}
                            />
                            <label htmlFor="requirement-tested">
                                2. I have had a <strong>negative</strong> COVID-19 RT-PCR test
                                within <strong>72 hours</strong> of arriving in Maine, or
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
                                type="checkbox"
                                id="requirement-origin"
                                name="requirement-origin"
                                onChange={() => setPledgePromptShown(false)}
                                ref={register()}
                            />
                            <label htmlFor="requirement-origin">
                                3. I am from an approved state with a low incidence of COVID-19; Vermont, New Hampshire, Connecticut, New York, New Jersey, and
                            </label>
                        </li>
                        <li className="inline-field get-well-loop">
                            <label>
                                I will enroll in
                                {' '}
                                <a
                                    href={GET_WELL_LOOP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GetWellLoop
                                </a> now, a simple symptom self-monitoring system to monitor my symptoms during my visit
                                in Maine.
                            </label>
                        </li>
                    </ul>

                    <h3>
                        { visitIntention === 'return' ? 'Upon returning ' : 'While in Maine '}
                        I will try my best to,
                    </h3>
                    <ul className="try-my-best">
                        <li>
                            To keep a distance of <strong>six feet</strong> from people who are not in my traveling
                            party.
                        </li>
                        <li>To wash my hands for 20 seconds with soap and water frequently.</li>
                        <li>
                            To wear a mask at public gatherings and avoid public gatherings with greater than 50
                            people when possible.
                        </li>
                        <li>
                            To contact a health care professional or dial 211 if I have a fever or symptoms. In an
                            emergency I will call 911.
                        </li>
                    </ul>
                </div>

                { visitIntention !== 'return' && (
                    <>
                        <h3>Now complete these 3 easy steps and click Submit!</h3>

                        <div className="pledge-info">
                            <h4>Your Info</h4>
                            <div className="pledge-form-grid">
                                <div className="wrap-fullname">
                                    <label htmlFor="field-fullname">Full Name<span aria-hidden="true">*</span>:
                                        <input
                                            id="field-fullname"
                                            name="fullName"
                                            type="text"
                                            aria-describedby={`${errors.fullName ? 'error-fullname' : ''}`}
                                            aria-required="true"
                                            aria-invalid={errors.fullName !== undefined}
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
                                    <label htmlFor="field-phone">Phone number<span aria-hidden="true">*</span>:
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
                                    <label htmlFor="field-zip">Zip Code:
                                        <input
                                            id="field-zip"
                                            name="zipCode"
                                            type="tel"
                                            aria-describedby={`${errors.zipCode ? 'error-zip' : ''}`}
                                            aria-invalid={errors.zipCode !== undefined}
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
                                                    Relationship<span aria-hidden="true">*</span>:
                                                    <select
                                                        id={`field-dependent-relationship-${dependentIndex}`}
                                                        name={`dependentRelationship-${dependentIndex}`}
                                                        aria-describedby={`${
                                                            errors[`dependentRelationship-${dependentIndex}`] ?
                                                                `error-dependent-relationship-${dependentIndex}` : ''}
                                                        `}
                                                        aria-required="true"
                                                        aria-invalid={errors[`dependentRelationship-${dependentIndex}`] !== undefined}
                                                        ref={register({ required: true })}
                                                    >
                                                        <option value="" key="none"> </option>
                                                        { DEPENDENT_RELATIONSHIP_CHOICES.map((choiceObj) => (
                                                            <option value={choiceObj.value} key={choiceObj.value}>{choiceObj.label}</option>
                                                        )) }
                                                    </select>
                                                </label>
                                                { errors[`dependentRelationship-${dependentIndex}`] && (
                                                    <p className="error" id={`error-dependent-relationship-${dependentIndex}`} aria-live="polite">
                                                        This field is required
                                                    </p>
                                                ) }
                                            </div>
                                            <div className={
                                                `wrap-dependent-age ${(dependentIndex === dependentsCount - 1 ? 'is-last' : '')}`
                                            }
                                            >
                                                <label htmlFor={`field-dependent-age-${dependentIndex}`}>
                                                    Age<span aria-hidden="true">*</span>:
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
                                                        ref={register({ required: true, pattern: /^\d{1,3}$/ })}
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
                                                    aria-invalid={errors[`memberFullName-${memberIndex}`] !== undefined}
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
                                                    type="email"
                                                    inputMode="email"
                                                    aria-describedby={`${
                                                        errors[`memberEmail-${memberIndex}`] ?
                                                            `error-member-email-${memberIndex}` : ''}
                                                    `}
                                                    aria-required="true"
                                                    aria-invalid={errors[`memberEmail-${memberIndex}`] !== undefined}
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
                                        </div>
                                        { errors[`memberEmail-${memberIndex}`] && (
                                            <p className="error" id={`error-member-email-${memberIndex}`} aria-live="polite">
                                                Please enter a valid email address
                                            </p>
                                        ) }
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

                            <h4>Where are you heading to?</h4>

                            <p className="instructions">
                                Send a copy of this pledge including your name and date for each member of your travel party to your destinations.
                            </p>

                            <div className="pledge-form-grid">
                                { destinationsArray.map((_, destinationIndex) => (
                                    <>
                                        <div className="wrap-destination-email">
                                            <label htmlFor={`field-destination-email-${destinationIndex}`}>
                                                Destination E-mail<span aria-hidden="true">*</span>:
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
                                                    aria-required="true"
                                                    aria-invalid={errors[`destinationEmail-${destinationIndex}`] !== undefined}
                                                    ref={register({
                                                        required: true,
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
                                                Date<span aria-hidden="true">*</span>:
                                                <input
                                                    id={`field-arrival-date-${destinationIndex}`}
                                                    name={`arrivalDate-${destinationIndex}`}
                                                    type="date"
                                                    min={`${new Date().getFullYear()}-${('0' + (new Date().getMonth() + 1)).slice(-2)}-${('0' + new Date().getDate()).slice(-2)}`}
                                                    aria-describedby={`${
                                                        errors[`arrivalDate-${destinationIndex}`] ?
                                                            `error-arrival-date-${destinationIndex}` : ''}
                                                    `}
                                                    aria-required="true"
                                                    aria-invalid={errors[`arrivalDate-${destinationIndex}`] !== undefined}
                                                    ref={register({
                                                        required: true,
                                                    })}
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

PledgeForm.propTypes = {
    visitIntention: PropTypes.string.isRequired,
};

export default React.forwardRef(PledgeForm);
