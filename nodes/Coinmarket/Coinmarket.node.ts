import {
	INodeType,
	INodeTypeDescription,
	IExecuteFunctions,
	ICredentialDataDecryptedObject,
	INodeExecutionData,
} from 'n8n-workflow';
import axios from 'axios';


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
						resource: ['coinMarketInfo', 'latestQuotes'],
					},
				},
				options: [
					{
						name: 'Get Latest Coin Info',
						value: 'getLatestCoinInfo',
						description: 'Get information about a specific cryptocurrency',
					},
					{
						name: 'Get Latest Quotes',
						value: 'getLatestQuotes',
						description: 'Get the latest quotes for a specific cryptocurrency',
					}
				],
				default: 'getLatestCoinInfo',
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		console.log('Received input data:', items); // Log de input data van de node

		if (this.getNodeParameter('operation', 0) === 'getLatestCoinInfo') {
			const credentialData = await this.getCredentials('CoinmarketApi') as ICredentialDataDecryptedObject;
			const apiKey = credentialData.apiKey;

			// Define the API
			const apiUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
			const start = 1;
			const limit = 2;
			const params = {
				start,
				limit,
			};

			// Set up headers met api key
			const headers = {
				'X-CMC_PRO_API_KEY': apiKey,
			};

			console.log('API URL:', apiUrl); // Log de api url
			console.log('API Parameters:', params); // Log de api parameters
			console.log('API Headers:', headers); // Log de API headers

			try {
				// hier maakt hij een api request
				const response = await axios.get(apiUrl, { params, headers });
				const data = response.data.data;
				console.log('API Response Data:', data); // Log de api response data

				// Pak de volgende data van de crypto af
				const outputData = data.map((crypto: any) => {
					const name = crypto.name;
					const symbol = crypto.symbol;
					const price = crypto.quote.USD.price;
					console.log('Extracted Data:', { name, symbol, price }); // Log de extracted data

					return { name, symbol, price };
				});

				// Verstuur de data naar de n8n node
				console.log('Sending Data to N8N:', outputData);
				return [this.helpers.returnJsonArray(outputData)];

			} catch (error) {
				// Handle errors
				console.error('CoinMarketCap API request failed:', error); // log error
				throw new Error(`CoinMarketCap API request failed: ${error.message}`);
			}
		}

		// @ts-ignore
		return items;
	}
}
