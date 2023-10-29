import random
import requests


def get_response(message: str, webhook_url) -> str:
	p_message = message.lower()

	if p_message == 'hello':
		return 'Hey there'

	if p_message == 'roll':
		return str(random.randint(1, 6))

	if p_message == '!help':
		return "This is help message."

	if p_message == '!trigger':
		# Gebruik webhook om n8n te triggeren
		payload = {'text': 'Trigger from Discord'}
		requests.post(webhook_url, json=payload)
		return "Triggered n8n workflow."

	return "Command not recognized."
