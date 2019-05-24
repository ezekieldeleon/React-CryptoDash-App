import React from 'react';
import { AppContext } from '../App/AppProvider';

export default function({ firstVisit }) {
	return (
		<AppContext.Consumer>
			{({ firstVisit }) =>
				firstVisit ? <div>Welcom to CryptoDash, please select your favorite coins to begin.  </div> : null}
		</AppContext.Consumer>
	);
}
