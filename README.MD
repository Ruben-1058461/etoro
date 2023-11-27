# Coinmarket Node



## Over de Coinmarket Node

Dit is een custom made node waarmee je de gegevens kunt opvragen van de laatste coins op de markt.
Deze gegevens worden opgevraagd en opgestuurd via het discord kanaal.

## Functionaliteiten

- **Prijzen Ophalen:** Haal actuele prijzen op voor specifieke cryptocurrencies.
- **Marktkapitalisatie:** Ontvang marktkapitalisatiegegevens voor geselecteerde cryptocurrencies.
- **Dagelijkse Handelsvolumes:** Krijg inzicht in de dagelijkse handelsvolumes van cryptocurrencies.

## Waaruit bestaat de Node?

Deze repository bevat een Node met:<br>
- Een python discord bot<br>
- Coinmarket typescript<br>
- Coinmarket API credentials<br>
- De bijbehorende workflow<br>
- Test verslag

## Structuur

- De code van de Node zit in de /nodes/coinmarket
- De benodigde code voor de discord bot zit in ./bot

## Hoe start je de node?
Het is aangeraden om de onderstaande stappen te volgen indien je het wilt gebruiken op uw eigen discord server.
### Discord-bot

**Discord Developer Account:**
   - Zorg ervoor dat je een Discord Developer-account hebt. Maak er een aan op [Discord Developer Portal](https://discord.com/developers/applications).

**Maak een Nieuwe Applicatie:**
   - Creëer een nieuwe applicatie op de Discord Developer Portal. Hier kun je je bot token ontvangen, dat nodig is voor de werking van de bot.

**Voeg de Bot toe aan je Server:**
   - Ga naar de "OAuth2" sectie, selecteer de vereiste scopes (waarschijnlijk "bot"), en kopieer de gegenereerde OAuth2 URL om je bot aan je Discord-server toe te voegen.

**Krijg Bot Token:**
   - Ga naar de "Bot" sectie op de Discord Developer Portal en kopieer de bot token. Voeg deze toe aan het bestand `/bot/.env` als `DISCORD_TOKEN=JOUW_BOT_TOKEN`.

**Start de Bot:**
   - Navigeer naar de `/bot` directory en start de Discord-bot met het commando:
     ```bash
     python main.py
     ```
     Zorg ervoor dat je de benodigde Python-pakketten hebt geïnstalleerd via `pip install -r requirements.txt`.
```
pip install virtualenv
virtualenv venv
.\venv\sripts\activate
pip install -r requirements.txt

```
Vervolgens type je "n8n start" in de terminal om de node te runnen.


### Coinmarket Node in n8n

**n8n Installatie:**
   - Zorg ervoor dat n8n is geïnstalleerd op je systeem door de instructies op de [n8n installatiepagina](https://docs.n8n.io/getting-started/installation.html) te volgen.

**Node Configuratie:**
   - Voeg de Coinmarket Node toe aan je n8n-workflow.
   - Configureer de node met de vereiste parameters, zoals API-sleutels en valuta. Dit kan worden gedaan via de n8n-gebruikersinterface.

**Start n8n:**
   - Start n8n met het commando:
     ```bash
     n8n start
     ```
     Zorg ervoor dat je de juiste versie van Node.js hebt geïnstalleerd en alle afhankelijkheden hebt opgelost zoals vermeld in de n8n-documentatie.

**Voer de Workflow Uit:**
   - Voer de workflow uit waarin de Coinmarket Node is opgenomen. Controleer de uitvoer om ervoor te zorgen dat de marktgegevens correct worden opgehaald en naar het Discord-kanaal worden gestuurd.

Nu zou je Discord-bot moeten draaien, en je kunt de Coinmarket Node gebruiken in je n8n-workflows.




## Beperking van de Code
Het is helaas (nog) niet mogelijk via de node in de workflow meerdere opties te kiezen
met betrekking tot API Call.

Dat houdt in dat er momenteel maar 2 coins worden weergeven en dat je niet kunt aanpassen welke informatie je verder wil
ontvangen.

Ook is het nog niet mogelijk om de valuta te wijzigen naar andere waardes via de node in N8N.

## Ontwikkelaars van de webapplicatie
- Ruben Voogt


## Bronnen

- ChatGPT, versie GPT-3, ontwikkeld door OpenAI, gebruikt als hulpmiddel bij het programmeren
- Link naar [website](https://github.com/Maarten-vd-Sande/voorbeeldRepo) gebruikt als voorbeeld voor deze readme.md
