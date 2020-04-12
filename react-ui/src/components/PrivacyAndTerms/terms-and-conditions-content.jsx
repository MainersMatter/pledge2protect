import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const TermsAndConditionsContent = ({ mode }) => {
    const PrivacyPolicyLink = ({ children }) => {
        if (mode === 'modal') {
            return (<>{children} below</>);
        }

        if (mode === 'page') {
            return (
                <Link to="/privacy">{children}</Link>
            );
        }

        return children;
    };

    return (
        <>
            <h2>User Agreement</h2>
            <p>
                This PledgeToProtectME User Agreement (<b>&quot;Agreement&quot;</b>) is a binding agreement between you
                (<b>&quot;End User&quot;</b> or <b>&quot;you&quot;</b>) and MyHealthMath, Inc. (<b>&quot;Company&quot;</b>).
                This Agreement governs all use that you may make of (a) the Pledge to Protect Software-as-a-Service
                application made available by Company and accessed
                at www.pledgetoprotectme.org (the <b>&quot;SaaS Application&quot;</b>), (b) the Pledge to Protect mobile software
                applications made available in third party mobile platforms
                (together, the <b>&quot;Website Apps&quot;</b>), in both cases including all related documentation (the
                <b>&quot;Website Application&quot;</b>) or (c) products and services accessible in the
                Application, and certain features, functionality, and content accessible on or through the Application
                (collectively, <b>&quot;Content and Services&quot;</b>). The Mobile Apps
                are licensed, not sold, to you, and this Agreement provides you with a right of access to the SaaS
                Application rather than a license to it or ownership of it.
            </p>
            <p>
                BY VISITING, ACCESSING, DOWNLOADING OR OTHERWISE USING THE APPLICATION, YOU (A) ACKNOWLEDGE THAT YOU HAVE
                READ AND UNDERSTAND THIS AGREEMENT; (B) REPRESENT THAT
                YOU ARE OF LEGAL AGE TO ENTER INTO A BINDING AGREEMENT; AND (C) ACCEPT THIS AGREEMENT AND AGREE THAT YOU ARE
                LEGALLY BOUND BY ITS TERMS. IF YOU DO NOT AGREE TO THESE
                TERMS, DO NOT VISIT, ACCESS, DOWNLOAD OR USE THE APPLICATION AND DELETE IT FROM YOUR MOBILE DEVICE IF YOU
                HAVE DOWNLOADED IT.
            </p>
            <h3>1. License and Access.</h3>
            <h4>a. License Grant for Mobile Apps.</h4>
            <p>
                Subject to the terms of this Agreement, to the extent you
                choose to download, install or use a Mobile App, Company grants you a limited, non-exclusive,
                and nontransferable license to:
                <ol type="I">
                    <li>
                        download, install, and use the Application for your personal, non-commercial use on a single mobile
                        device owned or otherwise controlled by you (<b>&quot;Mobile Device&quot;</b>)
                        strictly in accordance with the Application&apos;s documentation; and
                    </li>
                    <li>
                        access, stream, download, and use on such Mobile Device the Content and Services made available in
                        or otherwise accessible through the Application, strictly in accordance with this Agreement and the
                        Terms of Use applicable to such Content and Services.
                    </li>
                </ol>
            </p>
            <h4>b. Access Right for SaaS Application.</h4>
            <p>
                Subject to the terms of this Agreement, to the extent
                you choose to use the SaaS Application,
                <u>Company hereby grants you a non-exclusive, non-transferable right to access and use the Application during the Term.</u>
            </p>
            <h3>2. License and Access Restrictions.</h3>
            <p>
                You shall not:
                <ol type="a">
                    <li>copy the Application, except as expressly permitted by this license;</li>
                    <li>modify, translate, adapt, or otherwise create derivative works or improvements, whether or not
                        patentable, of the Application;
                    </li>
                    <li>reverse engineer, disassemble, decompile, decode, or otherwise attempt to derive or gain access to
                        the source code of the Application or any part thereof;
                    </li>
                    <li>remove, delete, alter, or obscure any trademarks or any copyright, trademark, patent, or other
                        intellectual property or proprietary rights notices from the Application, including any copy
                        thereof;
                    </li>
                    <li>rent, lease, lend, sell, sublicense, assign, distribute, publish, transfer, or otherwise make
                        available the Application,
                        or any features or functionality of the Application, to any third party for any reason, including by
                        making the Application
                        available on a network where it is capable of being accessed by more than one device at any time;
                    </li>
                    <li>remove, disable, circumvent, or otherwise create or implement any workaround to any copy protection,
                        rights management, or security features in or protecting the Application; or
                    </li>
                    <li>use the Application in, or in association with, the design, construction, maintenance, or operation
                        of
                        any mission critical environments or systems, including any safety-critical applications, including
                        medical or
                        life-support systems, vehicle operation applications or any emergency personnel, police, fire, or
                        other safety response systems.
                    </li>
                </ol>
            </p>
            <h3>3. Reservation of Rights.</h3>
            <p>
                You acknowledge and agree that the Application is provided under license, and not sold, to you. You do not
                acquire
                any ownership interest in the Application under this Agreement, or any other rights thereto other than to
                use the
                Application in accordance with the license granted, and subject to all terms, conditions, and restrictions,
                under
                this Agreement. Company and its licensors and service providers reserve and shall retain their entire right,
                title,
                and interest in and to the Application, including all copyrights, trademarks, and other intellectual
                property rights
                therein or relating thereto, except as expressly granted to you in this Agreement.
            </p>
            <h3>4. Collection and Use of Your Information.</h3>
            <p>
                You acknowledge that when you download, install, or use the Application, Company may use automatic means
                (including,
                for example, cookies and web beacons) to collect information about your Mobile Device and about your use of
                the
                Application. You also may be required to provide certain information about yourself as a condition to
                downloading,
                installing, or using the Application or certain of its features or functionality, and the Application may
                provide you
                with opportunities to share information about yourself with others. All information Company collects through
                or in
                connection with this Application is subject to the <PrivacyPolicyLink>PledgeToProtectME Privacy Policy (the <b>&quot;Privacy Policy&quot;</b>)</PrivacyPolicyLink>.
                By downloading, installing, using, and providing information to or through this Application, you consent to
                all actions taken by Company
                with respect to your information in compliance with the Privacy Policy.
            </p>
            <h3>5. Updates.</h3>
            <p>
                Company may from time to time in its sole discretion develop and provide Application updates, which may
                include
                upgrades, bug fixes, patches, error corrections, and/or new features (collectively, including related
                documentation, <b>&quot;Updates&quot;</b>). Updates may also modify or delete in their entirety certain features and
                functionality.
                You agree that Company has no obligation to provide any Updates or to continue to provide or enable any
                particular
                features or functionality.
            </p>
            <h3>6. Geographic Restrictions.</h3>
            <p>
                The Content and Services are based in the United States and provided for access and use only by persons
                located in the
                United States. You acknowledge that you may not be able to access all or some of the Content and Services
                outside of the
                United States and that access thereto may not be legal by certain persons or in certain countries. If you
                access the
                Content and Services from outside the United States, you are responsible for compliance with local laws.
            </p>
            <h3>7. Third-Party Materials.</h3>
            <p>
                The Application may display, include, or make available third-party content (including data, information,
                applications,
                and other products, services, and/or materials) or provide links to third-party websites or services,
                including through
                third-party advertising (<b>&quot;Third-Party Materials&quot;</b>). You acknowledge and agree that Company is not
                responsible for
                Third-Party Materials, including their accuracy, completeness, timeliness, validity, copyright compliance,
                legality,
                decency, quality, or any other aspect thereof. Company does not assume and will not have any liability or
                responsibility
                to you or any other person or entity for any Third-Party Materials. Third-Party Materials and links thereto
                are provided
                solely as a convenience to you, and you access and use them entirely at your own risk and subject to such
                third parties&apos;
                terms and conditions.
            </p>
            <h3>8. Term and Termination.</h3>
            <p>
                <ol type="a">
                    <li>The term of Agreement commences when you download/install the Application and will continue in
                        effect until terminated by you or Company as set forth in this Section 8.
                    </li>
                    <li>You may terminate this Agreement by deleting the Application and all copies thereof from your Mobile
                        Device.
                    </li>
                    <li>Company may terminate this Agreement at any time without notice in its sole discretion. In addition,
                        this Agreement will terminate immediately and automatically without any notice if you violate any of
                        the terms and conditions of this Agreement.
                    </li>
                    <li>
                        Upon termination:
                        <ol type="I">
                            <li>all rights granted to you under this Agreement will also terminate; and</li>
                            <li>you must cease all use of the Application and delete all copies of the Application from your
                                Mobile Device and account.
                            </li>
                            <li>Termination will not limit any of Company&apos;s rights or remedies at law or in equity.</li>
                        </ol>
                    </li>
                </ol>
            </p>
            <h3>9. Disclaimer of Warranties.</h3>
            <p>
                THE APPLICATION IS PROVIDED TO LICENSEE &quot;AS IS&quot; AND WITH ALL FAULTS AND DEFECTS WITHOUT WARRANTY OF ANY
                KIND. TO
                THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, COMPANY, ON ITS OWN BEHALF AND ON BEHALF OF ITS
                AFFILIATES AND
                ITS AND THEIR RESPECTIVE LICENSORS AND SERVICE PROVIDERS, EXPRESSLY DISCLAIMS ALL WARRANTIES, WHETHER
                EXPRESS,
                IMPLIED, STATUTORY, OR OTHERWISE, WITH RESPECT TO THE APPLICATION, INCLUDING ALL IMPLIED WARRANTIES OF
                MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT, AND WARRANTIES THAT MAY ARISE OUT OF COURSE
                OF DEALING,
                COURSE OF PERFORMANCE, USAGE, OR TRADE PRACTICE. WITHOUT LIMITATION TO THE FOREGOING, COMPANY PROVIDES NO
                WARRANTY OR
                UNDERTAKING, AND MAKES NO REPRESENTATION OF ANY KIND THAT THE APPLICATION WILL MEET YOUR REQUIREMENTS,
                ACHIEVE ANY
                INTENDED RESULTS, BE COMPATIBLE, OR WORK WITH ANY OTHER SOFTWARE, APPLICATIONS, SYSTEMS, OR SERVICES,
                OPERATE WITHOUT
                INTERRUPTION, MEET ANY PERFORMANCE OR RELIABILITY STANDARDS, OR BE ERROR-FREE, OR THAT ANY ERRORS OR DEFECTS
                CAN
                OR WILL BE CORRECTED.
            </p>
            <p>
                SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF OR LIMITATIONS ON IMPLIED WARRANTIES OR THE LIMITATIONS ON
                THE
                APPLICABLE STATUTORY RIGHTS OF A CONSUMER, SO SOME OR ALL OF THE ABOVE EXCLUSIONS AND LIMITATIONS MAY NOT
                APPLY TO YOU.
            </p>
            <h3>10. Limitation of Liability.</h3>
            <p>
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL COMPANY OR ITS AFFILIATES, OR ANY OF ITS
                OR
                THEIR RESPECTIVE LICENSORS OR SERVICE PROVIDERS, HAVE ANY LIABILITY ARISING FROM OR RELATED TO YOUR USE OF
                OR INABILITY
                TO USE THE APPLICATION OR THE CONTENT AND SERVICES FOR:
            </p>
            <ol type="a">
                <li>
                    PERSONAL INJURY, PROPERTY DAMAGE, LOST PROFITS, COST OF SUBSTITUTE GOODS OR SERVICES, LOSS OF DATA, LOSS
                    OF GOODWILL,
                    BUSINESS INTERRUPTION, COMPUTER FAILURE OR MALFUNCTION, OR ANY OTHER CONSEQUENTIAL, INCIDENTAL,
                    INDIRECT, EXEMPLARY,
                    SPECIAL, OR PUNITIVE DAMAGES.
                </li>
                <li>
                    DIRECT DAMAGES IN AMOUNTS THAT IN THE AGGREGATE EXCEED THE AMOUNT ACTUALLY PAID BY YOU FOR THE
                    APPLICATION.
                </li>
            </ol>
            <p>
                THE FOREGOING LIMITATIONS WILL APPLY WHETHER SUCH DAMAGES ARISE OUT OF BREACH OF CONTRACT, TORT (INCLUDING
                NEGLIGENCE),
                OR OTHERWISE AND REGARDLESS OF WHETHER SUCH DAMAGES WERE FORESEEABLE OR COMPANY WAS ADVISED OF THE
                POSSIBILITY OF
                SUCH DAMAGES. SOME JURISDICTIONS DO NOT ALLOW CERTAIN LIMITATIONS OF LIABILITY SO SOME OR ALL OF THE ABOVE
                LIMITATIONS
                OF LIABILITY MAY NOT APPLY TO YOU.
            </p>
            <h3>11. Indemnification</h3>
            <p>
                You agree to indemnify, defend, and hold harmless Company and its officers, directors, employees, agents,
                affiliates,
                successors, and assigns from and against any and all losses, damages, liabilities, deficiencies, claims,
                actions,
                judgments, settlements, interest, awards, penalties, fines, costs, or expenses of whatever kind, including
                reasonable
                attorneys&apos; fees, arising from or relating to your use or misuse of the Application or your breach of this
                Agreement,
                including but not limited to the content you submit or make available through this Application.
            </p>
            <h3>12. Export Regulation.</h3>
            <p>
                The Application may be subject to United States export control laws, including the Export Control Reform Act
                and its
                associated regulations. You shall not, directly or indirectly, export, re-export, or release the Application
                to, or
                make the Application accessible from, any jurisdiction or country to which export, re-export, or release is
                prohibited
                by law, rule, or regulation. You shall comply with all applicable federal laws, regulations, and rules, and
                complete
                all required undertakings (including obtaining any necessary export license or other governmental approval),
                prior to
                exporting, re-exporting, releasing, or otherwise making the Application available outside the United States.
            </p>
            <n3>13. US Government Rights.</n3>
            <p>
                The Application is commercial computer software, as such term is defined in 48 C.F.R. §2.101. Accordingly,
                if you
                are an agency of the United States Government or any contractor therefor, you receive only those rights with
                respect to the Application as are granted to all other end users under license, in accordance with (a) 48
                C.F.R. §227.7201
                through 48 C.F.R. §227.7204, with respect to the Department of Defense and their contractors, or (b) 48
                C.F.R. §12.212,
                with respect to all other United States Government licensees and their contractors.
            </p>
            <h3>14. Severability.</h3>
            <p>
                If any provision of this Agreement is illegal or unenforceable under applicable law, the remainder of the
                provision
                will be amended to achieve as closely as possible the effect of the original term and all other provisions
                of this
                Agreement will continue in full force and effect.
            </p>
            <h3>15. Governing Law.</h3>
            <p>
                This Agreement is governed by and construed in accordance with the internal laws of the State of Maine
                without giving
                effect to any choice or conflict of law provision or rule. Any legal suit, action, or proceeding arising out
                of or
                related to this Agreement or the Application shall be instituted exclusively in the federal courts of the
                United States
                or the courts of the State of Maine in each case located in Cumberland County. You waive any and all
                objections to the
                exercise of jurisdiction over you by such courts and to venue in such courts.
            </p>
            <h3>16. Limitation of Time to File Claims.</h3>
            <p>
                ANY CAUSE OF ACTION OR CLAIM YOU MAY HAVE ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE APPLICATION
                MUST
                BE COMMENCED WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES OTHERWISE SUCH CAUSE OF ACTION OR CLAIM
                IS
                PERMANENTLY BARRED.
            </p>
            <h3>17. Entire Agreement.</h3>
            <p>
                This Agreement and the Privacy Policy constitute the entire agreement between you and Company with respect
                to
                the Application and supersede all prior or contemporaneous understandings and agreements, whether written or
                oral,
                with respect to the Application.
            </p>
            <h3>18. Waiver.</h3>
            <p>
                No failure to exercise, and no delay in exercising, on the part of either party, any right or any power
                hereunder
                shall operate as a waiver thereof, nor shall any single or partial exercise of any right or power hereunder
                preclude
                further exercise of that or any other right hereunder. In the event of a conflict between this Agreement and
                any
                applicable purchase or other terms, the terms of this Agreement shall govern.
            </p>
            <h3>19. Terms Applicable to Google Device Users.</h3>
            <p>
                If you download the Application from Google Play to an Android- or Google-branded Mobile Device, then you
                agree
                to contact us, not Google, regarding any defects or performance issues you may experience relating to the
                Application.
            </p>
            <h3>20. Terms Applicable to Apple Device Users.</h3>
            <p>
                If you download the Application from the Apple Store to an Apple-branded Mobile Device, then the following
                terms
                apply to you in addition to the other provisions in this Agreement.
            </p>
            <ol type="a">
                <li>
                    The Mobile App license in this Agreement is limited to Apple-branded products that you own or control
                    and are
                    subject to the Usage Rules in the Apple App Store Terms of Service, except that the Application may be
                    accessed
                    and used by other accounts associated with you via Family Sharing or volume purchasing.
                </li>
                <li>
                    Apple is not a party to this Agreement. Company, not Apple, is solely responsible for the Application
                    and the
                    Content and Services. You acknowledge that Apple has no obligation whatsoever to furnish any maintenance
                    or support
                    services with respect to the Application.
                </li>
                <li>
                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, APPLE WILL HAVE NO WARRANTY OBLIGATIONS WHATESOEVER
                    WITH RESPECT
                    TO THE APPLICATION AND ANY CLAIMS, LOSSES, LIABILITIES, DAMAGES, COSTS OR EXPENSES ATTRIBUTABLE TO ANY
                    FAILURE TO
                    CONFORM TO ANY WARRANTY APPLICABLE TO COMPANY WILL BE COMPANY’S SOLE RESPONSIBILITY. TO THE EXTENT THAT
                    ANY WARRANTY
                    MAY APPLY TO YOU NOTWITHSTANDING THIS AGREEMENT’S EXPRESS PROVISIONS AND THE APPLICATION FAILS TO
                    CONFORM TO THAT
                    WARRANTY, YOU MAY NOTIFY APPLE AND APPLE WILL REFUND ANY PURCHASE PRICE THAT YOU MAY HAVE PAID FOR THE
                    APPLICATION.
                </li>
                <li>
                    YOU ACKNOWLEDGE THAT COMPANY, NOT APPLE, IS RESPONSIBLE FOR ADDRESSING ANY CLAIMS BY YOU OR BY ANY THIRD
                    PARTY RELATING TO THE APPLICATION OR TO YOUR POSSESSION OR USE OF THE APPLICATION, INCLUDING WITHOUT
                    LIMITATION (I) PRODUCTION LIABILITY CLAIMS, (II) ANY CLAIM THAT THE APPLICATION FAILS TO CONFORM TO
                    APPLICABLE LEGAL OR REGULATORY REQUIREMENTS AND (III) CLAIMS ARISING UNDER CONSUMER PROTECTION, PRIVACY
                    OR SIMILAR LAWS, TO THE EXTENT THAT ANY OF THE FOREGOING CLAIMS ARE PERMITTED UNDER THIS AGREEMENT.
                </li>
                <li>
                    You acknowledge that in the event of a third-party claim that the Application or your possession or use
                    of the Application infringes on that third party’s intellectual property rights, Company, not Apple,
                    will be solely responsible for the investigation, defense, settlement and discharge of any such claim.
                </li>
                <li>
                    You acknowledge that Apple and its subsidiaries are third-party beneficiaries of this Agreement and that
                    upon your acceptance of this Agreement Apple will have the right (and will be deemed to have accepted
                    the right) to enforce the Agreement against you as a third-party beneficiary.
                </li>
                <li>
                    You represent and warrant that you are not located in a country that is subject to a United States
                    government embargo or which the United States government has designed as a “terrorist supporting”
                    country and that you are not listed on any United States government list of prohibited or restricted
                    parties.
                </li>
            </ol>
            <p>
                The Application is offered by MyHealthMath, Inc., whose mailing address is One Monument Way, Suite 250,
                Portland, Maine 04101. With any questions, complaints or claims, please contact 207-221-0201
                or <a href="mailto:dave@pledgetoprotectme.org">dave@pledgetoprotectme.org</a>.
            </p>
        </>
    );
};

TermsAndConditionsContent.propTypes = {
    mode: PropTypes.oneOf(['page', 'modal']).isRequired
};


export default TermsAndConditionsContent;
