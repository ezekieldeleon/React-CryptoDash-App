import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import ConfirmButton from './ConfirmedButton';
import Page from '../Shared/Page';
import CoinGrid from './CoinGrid';

export default function() {
	return (
		<Page name="settings">
			<WelcomeMessage />
			<CoinGrid topSection />
			<ConfirmButton />
			<CoinGrid />
		</Page>
	);
}
