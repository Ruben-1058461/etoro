## Test 1: Basisfunctionaliteit

**Doel:** Verifieer of de node correct werkt voor de standaardinstellingen en de "Get Latest Coin Info" operatie.

**Stappen:**
1. Creëer een workflow in N8N en voeg de "Coinmarket" node toe.
2. Configureer de node om de "Get Latest Coin Info" operatie uit te voeren.
3. Voer de workflow uit.

**Resultaten:**
- De node maakt met succes een verzoek naar de CoinMarketCap API en haalt gegevens op voor de eerste twee cryptocurrencies.
- De opgehaalde gegevens worden correct in het JSON-formaat teruggestuurd naar de uitvoer van de node.

## Test 2: Foutafhandeling

**Doel:** Test de foutafhandeling van de node in het geval van een ongeldige API-sleutel of een ander probleem.

**Stappen:**
1. Configureer de "Coinmarket" node met een ongeldige API-sleutel.
2. Voer de workflow uit.

**Resultaten:**
- De node zou een fout moeten genereren en de foutmelding moeten weergeven in de console dat de CoinMarketCap API-aanvraag is mislukt vanwege een ongeldige API-sleutel.

## Test 3: Aangepaste instellingen

**Doel:** Test de node met aangepaste parameters, zoals een andere startwaarde en limiet voor het aantal cryptocurrencies om op te halen.

**Stappen:**
1. Configureer de "Coinmarket" node met aangepaste start- en limietwaarden.
2. Voer de workflow uit.

**Resultaten:**
- De node zou met succes gegevens moeten ophalen op basis van de aangepaste parameters.
- Het aantal opgehaalde cryptocurrencies komt overeen met de opgegeven limiet.

## Test 4: "Get Latest Quotes" Operatie

**Doel:** Test de "Get Latest Quotes" operatie van de node.

**Stappen:**
1. Configureer de "Coinmarket" node om de "Get Latest Quotes" operatie uit te voeren.
2. Voer de workflow uit.

**Resultaten:**
- De node zou met succes gegevens moeten ophalen voor de opgegeven cryptocurrencies en de bijbehorende citaten.
- De gegevens moeten correct worden teruggestuurd naar de uitvoer van de node.

## Test 5: Algemene Test voor Custom Operations

**Doel:** Test de node met aangepaste operaties en parameters om te controleren of deze correct functioneert met verschillende instellingen.

**Stappen:**
1. Configureer de "Coinmarket" node met verschillende aangepaste parameters en operaties.
2. Voer de workflow uit.

**Resultaten:**
- De node zou de gegevens moeten ophalen en terugsturen op basis van de ingestelde parameters en operaties.

### Problemen en Oplossingen

Tijdens het testproces zijn de volgende problemen geïdentificeerd en opgelost:

- **Probleem 1:** Fout bij het ophalen van gegevens vanwege een ongeldige API-sleutel.
  - **Oplossing:** De node geeft nu een duidelijke foutmelding in dit geval.

## Testopzet Handleiding

Hier is een stapsgewijze handleiding voor anderen om de "Coinmarket" node zelfstandig te testen:

**Stap 1: Installatie**

1. Zorg ervoor dat je N8N hebt geïnstalleerd en hebt geconfigureerd volgens de officiële documentatie.

**Stap 2: Node installatie**

1. Voeg de "Coinmarket" node toe aan je N8N-installatie. Dit kan worden gedaan door de nodige code in je N8N-project op te nemen en de dependencies te installeren.

**Stap 3: Node-configuratie**

1. Creëer een nieuwe workflow in N8N.
2. Voeg de "Coinmarket" node toe aan de workflow.
3. Configureer de node met de vereiste instellingen, zoals de API-sleutel.

**Stap 4: Uitvoeren van de Test**

1. Voer de workflow uit en observeer de resultaten.
2. Controleer of de gegevens correct worden opgehaald en verwerkt volgens de configuratie van de node.

Met deze handleiding kunnen anderen de "Coinmarket" node zelfstandig testen en de werking ervan verifiëren.
