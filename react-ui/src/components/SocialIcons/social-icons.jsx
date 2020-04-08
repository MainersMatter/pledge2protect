import React from 'react';
import PropTypes from 'prop-types';

import './social-icons.scss';


const siteUrl = 'https://www.pledgetoprotectme.org/';
const socialShareBlurb = 'COVID-19 is spreading fast in Maine. Anyone can get it, anyone can spread it and it can be deadly. PledgeToProtectME and help stop COVID-19 in its tracks.';
const encodedSiteUrl = encodeURIComponent(siteUrl);
const encodedShareBlurb = encodeURIComponent(socialShareBlurb);

const socialNetworkUrls = {
    facebook: {
        follow: 'https://www.facebook.com/PledgetoProtectME',
        share: `https://www.facebook.com/sharer/sharer.php?u=${encodedSiteUrl}`,
    },
    linkedin: {
        follow: 'https://www.linkedin.com/company/pledge-to-protect-me',
        share: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedSiteUrl}&summary=${encodedShareBlurb}`,
    },
    twitter: {
        follow: 'https://twitter.com/PledgeProtectME',
        share: `https://twitter.com/intent/tweet?text=${encodedShareBlurb}&url=${encodedSiteUrl}`,
    },
    instagram: {
        follow: 'https://www.instagram.com/pledgetoprotectme/',
        // Instagram does not support share links
    },
};

const SocialIcons = ({ mode, variant }) => (
    <div className={`social-icons variant-${variant}`}>
        <a href={socialNetworkUrls.facebook[mode]} className="facebook" title="Facebook">
            <span className="sr-only">
                Facebook
            </span>
        </a>
        <a href={socialNetworkUrls.linkedin[mode]} className="linkedin" title="LinkedIn">
            <span className="sr-only">
                LinkedIn
            </span>
        </a>
        <a href={socialNetworkUrls.twitter[mode]} className="twitter" title="Twitter">
            <span className="sr-only">
                Twitter
            </span>
        </a>
        { mode === 'follow' && (
            <a href={socialNetworkUrls.instagram[mode]} className="instagram" title="Instagram">
                <span className="sr-only">
                    Instagram
                </span>
            </a>
        ) }
    </div>
);

SocialIcons.propTypes = {
    mode: PropTypes.oneOf(['follow', 'share']).isRequired,
    variant: PropTypes.string,
};

SocialIcons.defaultProps = {
    variant: 'purple',
};

export default SocialIcons;
