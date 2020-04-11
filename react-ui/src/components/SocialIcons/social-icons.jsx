import React from 'react';
import PropTypes from 'prop-types';

import facebookLogo from '../../assets/social-facebook.svg';
import facebookWhiteLogo from '../../assets/social-facebook-white.svg';
import linkedInLogo from '../../assets/social-linkedin.svg';
import linkedInWhiteLogo from '../../assets/social-linkedin-white.svg';
import twitterLogo from '../../assets/social-twitter.svg';
import twitterWhiteLogo from '../../assets/social-twitter-white.svg';
import instagramLogo from '../../assets/social-instagram.svg';
import instagramWhiteLogo from '../../assets/social-instagram-white.svg';

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
        <a
            href={socialNetworkUrls.facebook[mode]}
            className="facebook"
            aria-label={`${mode} on Facebook`}
        >
            <img src={variant === 'white' ? facebookWhiteLogo : facebookLogo} alt="" />
        </a>
        <a
            href={socialNetworkUrls.linkedin[mode]}
            className="linkedin"
            aria-label={`${mode} on LinkedIn`}
        >
            <img src={variant === 'white' ? linkedInWhiteLogo : linkedInLogo} alt="" />
        </a>
        <a
            href={socialNetworkUrls.twitter[mode]}
            className="twitter"
            aria-label={`${mode} on Twitter`}
        >
            <img src={variant === 'white' ? twitterWhiteLogo : twitterLogo} alt="" />
        </a>
        { mode === 'follow' && (
            <a
                href={socialNetworkUrls.instagram[mode]}
                className="instagram"
                aria-label="Follow on Instagram"
            >
                <img src={variant === 'white' ? instagramWhiteLogo : instagramLogo} alt="" />
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
