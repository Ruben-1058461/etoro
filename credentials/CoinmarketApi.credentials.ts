import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class CoinmarketApi implements ICredentialType {
	name = 'CoinmarketApi';
	displayName = 'Coinmarket API';
	documentationUrl = 'https://coinmarketcap.com/api/documentation/v1/#section/Introduction';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: 'bc9a39d0-2a45-4454-8015-27f4f8c5efc4',
		},
		{
			displayName: 'API Secret',
			name: 'apiSecret',
			type: 'string',
			default: '',
			required: false, // Maak het gebruik van een secret key optioneel
		},
	];
}
