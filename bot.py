import discord
import responses
import requests


async def send_message(message, user_message, is_private, webhook_url):
	try:
		response = responses.get_response(user_message, webhook_url)
		await message.author.send(response) if is_private else await message.channel.send(response)
	except Exception as e:
		print(e)


def run_discord_bot():
	token = 'MTE2MTI3MDU1NTA3NzUwOTIxMQ.GXNN33.KUrjOsielKYeS3An8U7uZEbV1ba07FAlPvZKFY'  # Bot token
	webhook_url = 'http://localhost:5678/webhook-test/2e33f4ce-f1be-4ef5-886d-a76beb04b874'  # Url van n8n

	intents = discord.Intents.default()
	intents.message_content = True
	client = discord.Client(intents=intents)  # Pass the intents as an argument

	# Laat weten wanneer de bot werkt
	@client.event
	async def on_ready():
		print(f'{client.user} is now running!')

	# Laat weten wanneer er een nieuw bericht in kanaal word geplaatst.
	@client.event
	async def on_message(message):
		if message.author == client.user:
			return

		username = str(message.author)
		user_message = str(message.content)
		channel = str(message.channel)

		print(f'{username} said: "{user_message}" ({channel})')

		if user_message[0] == '?':
			user_message = user_message[1:]
			await send_message(message, user_message, is_private=True, webhook_url=webhook_url)
		else:
			await send_message(message, user_message, is_private=True, webhook_url=webhook_url)

	client.run(token)


if __name__ == "__main__":
	run_discord_bot()
