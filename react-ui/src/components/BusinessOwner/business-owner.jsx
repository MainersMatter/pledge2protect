import React, {useState} from 'react';

import './business-owner.scss';
import badge from '../../assets/badge-update.png';


const BusinessOwner = () => {
    const [isEmbedCodeOpen, setEmbedCodeOpen] = useState(false);

    return (
        <div className="business-owner-section" id="business-owner">
            <div className="actions">
                <h3>For Lodging Properties</h3>

                <p>
                    Place this badge on your website and around your installations to notify people that you are doing
                    everything to keep Maine community as healthy as possible.
                </p>

                <button
                    type="button"
                    className="btn squarish"
                    onClick={() => {
                        const xhr = new XMLHttpRequest();
                        xhr.open('GET', badge);
                        xhr.responseType = 'blob';

                        xhr.onload = function() {
                            const a = document.createElement('a');
                            document.body.appendChild(a);
                            a.style = 'display: none';

                            const url = window.URL.createObjectURL(this.response);
                            a.href = url;
                            a.download = 'PledgeToProtectME-badge.png';
                            a.click();
                            window.URL.revokeObjectURL(url);
                            document.body.removeChild(a);
                        };
                        xhr.send();
                    }}
                >
                    Download
                </button>
                <button
                    type="button"
                    className="btn squarish"
                    onClick={() => { setEmbedCodeOpen(true) }}
                >
                    &lt;/&gt;
                </button>

                { isEmbedCodeOpen && (
                    <code className="embed-code">
                        &lt;img src="{badge}" width="351" height="307" alt="Pledge to Protect ME badge" /&gt;
                    </code>
                ) }
            </div>
            <div className="badge">
                <img src={badge} width="351" height="307" alt="Pledge to Protect ME badge" />
            </div>
        </div>
    );
};

export default BusinessOwner;
