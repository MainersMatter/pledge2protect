import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import ConfirmationDialog from '../ConfirmationDialog/confirmation-dialog';
import PrivacyTermsDialog from '../PrivacyAndTerms/privacy-terms-dialog';
import Dialog from '../Dialog/dialog';
import stateMappings from './states';

import './pledge-form.scss';


const GET_WELL_LOOP_URL = 'https://apps.getwellnetwork.com/loop-enroll/pledgetoprotectme-covid/';

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
        try {
            await axios.post('/pledge', data);
            if (data['requirement-quarantined'] === false && data['requirement-origin'] === false) {
                window.location = GET_WELL_LOOP_URL;
                return;
            }
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
            <form className="pledge-form" id="pledge" onSubmit={handleSubmit(onSubmit)}>
                <div className="bullet-points">
                    { isPledgePromptShown && (
                        <p className="error" id="error-pledge" aria-live="polite">
                            You must check at least one pledge item
                        </p>
                    ) }
                    <h3>I pledge that,</h3>
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
                                1. I have stayed home "in quarantine" except for essential trips during which I used a
                                mask and hand washing precautions
                                for <strong>14 days before my arrival in Maine</strong>, or
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
                                3. I am from a county with a low incidence of COVID-19 in Vermont or New Hampshire, or
                            </label>
                        </li>
                        <li className="inline-field">
                            <input
                                type="checkbox"
                                id="requirement-getwellloop"
                                name="requirement-getwellloop"
                                onChange={() => setPledgePromptShown(false)}
                                ref={register()}
                            />
                            <label htmlFor="requirement-getwellloop">
                                4. I will enroll in
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

                    <h3>I will try my best to,</h3>
                    <ul className="try-my-best">
                        <li>
                            5. To keep a distance of <strong>six feet</strong> from people who are not in my traveling
                            party.
                        </li>
                        <li>6. To wash my hands for 20 seconds with soap and water frequently.</li>
                        <li>
                            7. To wear a mask at public gatherings and avoid public gatherings with greater than 50
                            people when possible.
                        </li>
                        <li>
                            8. To contact a health care professional or dial 211 if I have a fever or symptoms. In an
                            emergency I will call 911.
                        </li>
                    </ul>
                </div>

                { visitIntention !== 'return' && (
                    <>
                        <p className="instructions">
                            Send a copy of this pledge including your name and date for each member of your travel party to your
                            destinations.
                        </p>

                        <div className="pledge-info">
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
                                            inputMode="email"
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
                                            onClick={() => setStateDialogOpen(true)}
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
                                            onClick={() => setDestinationEmailsDialogOpen(true)}
                                        >
                                            <span className="sr-only">Destination email information</span>
                                        </button>
                                        <input
                                            id="field-destination-email"
                                            name="destinationEmail"
                                            type="text"
                                            inputMode="email"
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
                                                    type="email"
                                                    inputMode="email"
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
                <hr />
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
