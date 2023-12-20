# Coinmarket Node



## Over de Coinmarket Node

Dit is een custom made node waarmee je de gegevens kunt opvragen van de laatste coins op de markt.
Deze gegevens worden opgevraagd en opgestuurd via het discord kanaal.

## Functionaliteiten

- **Prijzen Ophalen:** Haal de actuele prijzen op voor de specifieke cryptocurrencies op de actuele markt van de "Coinmarket".
- **Marktkapitalisatie:** Ontvang marktkapitalisatiegegevens voor de geselecteerde cryptocurrencies op het "Coinmarket" platform.
- **Dagelijkse Handelsvolumes:** Krijg inzicht in de dagelijkse handelsvolumes van cryptocurrencies naar keuze.

## Waaruit bestaat de Node?

Deze repository bevat een Node met:<br>
- Een geprogrammeerde discord bot in python<br>
- Een Coinmarket typescript. Deze code verricht de taken achter de schermen.<br>
- Een Coinmarket API credentials<br>
- De bijbehorende workflow van N8N die je kan gemakkelijk kan importeren (Coinmarket.json)<br>
- Een bijbehorend test verslag om de n8n node te testen samen met de coinmarket workflow

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


## Test 1: Basisfunctionaliteit

**Doel:** Verifieer of de node correct werkt voor de standaardinstellingen en de "Get Latest Coin Info" operatie.

**Stappen:**
1. Creëer een workflow in N8N en voeg de "Coinmarket" node toe.
2. Configureer de node om de "Get Latest Coin Info" operatie uit te voeren.
3. Voer de workflow uit. (Grote oranje play/stop knop)

**Resultaten:**
- De node maakt met succes een verzoek naar de CoinMarketCap API en haalt gegevens op voor de eerste twee cryptocurrencies.
- De opgehaalde gegevens worden correct in het JSON-formaat teruggestuurd naar de uitvoer van de node.

## Test 2: Foutafhandeling

**Doel:** Test de foutafhandeling van de node in het geval van een ongeldige API-sleutel of een ander probleem.

**Stappen:**
1. Configureer de "Coinmarket" node met een ongeldige API-sleutel.
2. Voer de workflow uit. (Grote oranje play/stop knop)

**Resultaten:**
- De node zou een fout moeten genereren en de foutmelding moeten weergeven in de console dat de CoinMarketCap API-aanvraag is mislukt vanwege een ongeldige API-sleutel.

## Test 3: Aangepaste instellingen

**Doel:** Test de node met aangepaste parameters, zoals een andere startwaarde en limiet voor het aantal cryptocurrencies om op te halen.

**Stappen:**
1. Configureer de "Coinmarket" node met de aangepaste start- en limietwaarden. Zo kan je andere cryptocurrencies ophalen
2. Voer de workflow uit. (Grote oranje play/stop knop)

**Resultaten:**
- De node zou met succes gegevens moeten ophalen op basis van de aangepaste parameters.
- Het aantal opgehaalde cryptocurrencies komt overeen met de opgegeven limiet.

## Test 4: "Get Latest Quotes" Operatie

**Doel:** Test de "Get Latest Quotes" operatie van de node.

**Stappen:**
1. Configureer de "Coinmarket" node om de "Get Latest Quotes" operatie uit te voeren.
2. Voer de workflow uit. (Grote oranje play/stop knop)

**Resultaten:**
- De node zou met succes gegevens moeten ophalen voor de opgegeven cryptocurrencies en de bijbehorende citaten.
- De gegevens moeten correct worden teruggestuurd naar de uitvoer van de node.

## Test 5: Algemene Test voor Custom Operations

**Doel:** Test de node met aangepaste operaties en parameters om te controleren of deze correct functioneert met verschillende instellingen. (In N8N)

**Stappen:**
1. Configureer de "Coinmarket" node met verschillende aangepaste parameters en operaties. Klik dus op de opties knop en selecteer eentje naar keuze
2. Voer de workflow uit. (Grote oranje play/stop knop)

**Resultaten:**
- De node zou de gegevens moeten ophalen en terugsturen op basis van de ingestelde parameters en operaties via de discord bot.

### Problemen en Oplossingen

Tijdens het testproces zijn de volgende problemen geïdentificeerd en opgelost:

- **Probleem 1:** Fout bij het ophalen van gegevens vanwege een ongeldige API-sleutel.
  - **Oplossing:** De node geeft nu een duidelijke foutmelding in dit geval. Controleer of je de juiste sleutel hebt ingevoerd en pas hem aan.

## Testopzet Handleiding

Hier is een stapsgewijze handleiding voor anderen om de "Coinmarket" node zelfstandig te testen:

**Stap 1: Installatie**

1. Zorg ervoor dat je N8N hebt geïnstalleerd en hebt geconfigureerd volgens de officiële documentatie op de website.

**Stap 2: Node installatie**

1. Voeg de "Coinmarket" node toe aan je N8N-installatie. Dit kan worden gedaan door de nodige code in je N8N-project op te nemen en de dependencies te installeren.

**Stap 3: Node-configuratie**

1. Creëer een nieuwe "workflow" in N8N. (Klik op workflows en klik vervolgens op een "create new workflow")
2. Voeg de "Coinmarket" node toe aan de workflow.(De coinmarket.json)
3. Configureer de node met de vereiste instellingen. Hiermee word bedoelt dat je de juiste API-sleutel invoert die jij hebt aangevraagd op de site.

**Stap 4: Uitvoeren van de Test**

1. Voer de workflow uit en observeer de resultaten. Verschijnen er geen errors of rode letters met foutafhandelingen? Uitstekend de node werkt!
2. Zodra er wel errors worden weergeven is het belangrijk om goed te kijken naar de foutmelding en terug te koppelen naar dit testverslag om erachter te komen wat er precies is misgegaan en hoe je het kan oplossen.
2. Controleer of de gegevens correct worden opgehaald en verwerkt volgens de configuratie van de node. De configuratie is een succes als er geen meldingen over foutafhandelingen op uw beeld verschijnen. Als dat wel het geval is is het belangrijk om het vorige puntje nog een keer goed door te lezen.

Met deze handleiding kunnen anderen de "Coinmarket" node zelfstandig testen en de werking ervan verifiëren.







## Ontwikkelaars van de webapplicatie
- Ruben Voogt


## Bronnen

- ChatGPT, versie GPT-3, ontwikkeld door OpenAI, gebruikt als hulpmiddel bij het programmeren
- Link naar [website](https://github.com/Maarten-vd-Sande/voorbeeldRepo) gebruikt als voorbeeld voor deze readme.md
