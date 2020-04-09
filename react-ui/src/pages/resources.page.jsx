/* eslint-disable react/jsx-indent */
import React from 'react';

import Collapse from '../components/Collapse/collapse';

const ResourcesPage = () => (
    <div className="page-content">
        <h1>Resources</h1>
        <p>This is an ever-growing list of resources to help you get what you need. We will constantly add to this list, so renew your pledge, get 3 friends to join you and check back here often!</p>
        
        <Collapse title="About COVID-19">
            <div>
                <ol>
                    <li>blah</li>
                </ol>
            </div>
        </Collapse>
        <Collapse title="About COVID-19">
            <div>
                <ol>
                    <li>blah</li>
                </ol>
            </div>
        </Collapse>
        <Collapse title="About COVID-19">
            <div>
                <ol>
                    <li>blah</li>
                </ol>
            </div>
        </Collapse>
        <Collapse title="About COVID-19">
            <div>
                <ol>
                    <li>blah</li>
                </ol>
            </div>
        </Collapse>
    </div>
);


export default ResourcesPage;
