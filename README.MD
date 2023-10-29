# Coinmarket Node

## Over de Coinmarket Node

Dit is een custom made node waarmee je de gegevens kunt opvragen van de laatste coins op de markt.
Deze gegevens worden opgevraagd en opgestuurd via het discord kanaal.

## Waaruit bestaat de Node?

Deze repository bevat een Node met:
-Een python discord bot
-Coinmarket typescript
-Coinmarket API credentials
-De bijbehorende workflow
-Test verslag

## Hoe start je de node?
Allereerst is het van belang dat je deelneemt aan de volgende discord server.
Vervolgens moet je de main.py starten in de /bot directory
Want vanuit daar kun je de Node triggeren met "!trigger".
https://discord.gg/UKcSAYqfx
link vervalt over 30 dagen (28 november)



In requirements.txt staan alle benodigde packages
om de code succesvol te draaien. Ze zijn gemakkelijk
te installeren via pip.

Om problemen met versies voorkomen, wordt aangeraden om
een virtual environment te maken en daar de modules in te installeren:
```
pip install virtualenv
virtualenv venv
.\venv\sripts\activate
pip install -r requirements.txt

```
Vervolgens type je "n8n start" in de terminal om de node te runnen.


## Structuur

- De code van de Node zit in de /nodes/coinmarket
- De benodigde code voor de discord bot zit in ./bot

## Beperking van de Code
Het is helaas (nog) niet mogelijk via de node in de workflow meerdere opties te kiezen
met betrekking tot API Call.

## Ontwikkelaars van de webapplicatie
- Ruben Voogt


## Bronnen

- ChatGPT, versie GPT-3, ontwikkeld door OpenAI, gebruikt als hulpmiddel bij het programmeren
- Link naar [website](https://github.com/Maarten-vd-Sande/voorbeeldRepo) gebruikt als voorbeeld voor deze readme.md
