import React from 'react';

import PledgeForm from '../components/Pledge/PledgeForm';


const WhyTakePledgePage = () => (
	<section className="page-content">
		<div className="blurb-wrapper">
			<h1>Why Take Pledge</h1>
			<p>I pledge to protect myself and everyone around me by staying home during this critical time. No exceptions. I pledge to never allow mine and others’ risk of infection, illness, hospitalization, critical care and death. I pledge this because I believe the more who adopt these actions will play an active role in minimizing the spread of COVID-19 to end the illness, anxiety and disruption it causes. I pledge to foster a sense of calm and control during these challenging times because we have the ability to actively slow the spread of this disease. I pledge to be an advocate for the cause, to lead by example and spread the message.</p>
			<ol>
				<li>I will avoid in person physical contact with people who do not live in my household.</li>
				<li>I will encourage people in my household to stay at home whenever possible, working from home and keeping children home from school.</li>
				<li>I will not visit restaurants, bars, playground equipment or other places where people gather.</li>
				<li>I will use drive-thru, pickup and delivery options whenever possible.</li>
				<li>I will avoid travel, shopping trips, physical visits and play dates.</li>
				<li>I will not visit hospitals, nursing homes or long-term care facilities unless to provide critical assistance.</li>
				<li>When outside my home I will keep 6 feet away from others.</li>
				<li>I will practice good hygiene</li>
				<li>I will wash my hands, especially after touching any frequently used item or surface</li>
				<li>I will avoid touching my face.</li>
				<li>I will sneeze or cough into a tissue or the inside of my elbow</li>
				<li>I will disinfect frequently used items and surfaces as much as possible.</li>
				<li>If I experience fever (above 100.4, cough, shortness of breath or a loss of smell) I will call my doctors office or 211. In an emergency dial 911.</li>
			</ol>
		</div>
		<PledgeForm />
	</section>
) 


export default WhyTakePledgePage;