import {
	INodeType,
	INodeTypeDescription,
	IExecuteFunctions,
	ICredentialDataDecryptedObject,
} from 'n8n-workflow';

export class Coinmarket implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Coinmarket',
		name: 'coinmarket',
		icon: 'file:coinmarkets.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
		description: 'Get data from Coinmarket API',
		defaults: {
			name: 'Coinmarket',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'CoinmarketApi',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Coin Market Info',
						value: 'coinMarketInfo',
					},
				],
				default: 'coinMarketInfo',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['coinMarketInfo'],
					},
				},
				options: [
					{
						name: 'Get Coin Info',
						value: 'getCoinInfo',
						description: 'Get information about a specific cryptocurrency',
					},
				],
				default: 'getCoinInfo',
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<any> {
		const credentials = await this.getCredentials('CoinmarketApi') as ICredentialDataDecryptedObject;

		if (!credentials) {
			throw new Error('Credentials not set!');
		}

		try {
			console.log('Requesting data from CoinMarketCap API...');
			console.log('API Key:', credentials.apiKey);

			const responseData = await this.helpers.request({
				method: 'GET',
				uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=1',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					'X-CMC_PRO_API_KEY': credentials.apiKey as string,
				},
				auth: {
					user: credentials.apiKey as string,
					pass: credentials.apiSecret as string,
				},
				port: 443,
			});

			// Log alle data
			console.log('Response Data:', responseData);

			if (responseData && responseData.data && responseData.data.length > 0) {
				// Pak de data van de eerste cryptocurrency
				const firstCrypto = responseData.data[0];

				if (firstCrypto) {
					const name = firstCrypto.name;
					const symbol = firstCrypto.symbol;
					const priceUSD = firstCrypto.quote.USD;

					// Log alle extracted data
					console.log('Name:', name);
					console.log('Symbol:', symbol);
					console.log('Price USD:', priceUSD);

					// Return de data
					return {
						name: name,
						symbol: symbol,
						priceUSD: priceUSD,
						// Meer properties toevoegen nog
					};
				} else {
					console.error('No data or empty data in the response.');
					return null; // Return null of geef error
				}
			}
		} catch (error) {
			console.error('Error making the request:', error.message);
			throw new Error(`Error making the request: ${error.message}`);
		}
	}
}
