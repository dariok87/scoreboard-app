import React from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => {
	<svg ... className={ props.isHighScore ? 'is-high-score' : null }>
		<path ... />
		<rect ... />
	</svg>;

Icon.propTypes = {
	isHighScore: PropTypes.bool
};

export default Icon;