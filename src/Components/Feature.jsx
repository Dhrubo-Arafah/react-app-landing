import React from 'react';
import FeatureBox from './FeatureBox';
import feature_1 from '../images/feature_1.png';
import feature_2 from '../images/feature_2.png';
import feature_3 from '../images/feature_3.png';

function Feature() {
    return (
        <div id="features">
            <div className="a-container">
                <FeatureBox image={feature_1} title='Development Course'/>
                <FeatureBox image={feature_2} title='Money Saving Services'/>
                <FeatureBox image={feature_3} title='Usability Interface'/>
            </div>
        </div>
    )
}

export default Feature;