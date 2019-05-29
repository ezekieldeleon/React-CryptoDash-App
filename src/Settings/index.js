import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import ConfirmButton from './ConfirmedButton';
import Page from '../Shared/Page'

export default function() {
	return (
		<Page name="settings">
			<WelcomeMessage />
			<ConfirmButton />
		</Page>
	);
}
