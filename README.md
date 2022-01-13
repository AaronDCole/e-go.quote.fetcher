# e-go.quote.fetcher
A tool to fetch live quote from Transvirtual via the e-go website using puppeteer and chromium headless

## Developing:

`npm install`
`npm run watch`

## Running:

`node app.js`

## Demo

'localhost:3000/12180/1180101/15/20/25/53' -> {"quote":"$78.00"}

This is comprised of:

### Sending suburb Id: 12180 (You can query the transverse api for this directly)
### Receiving suburb Id: 1180101
### Length: 15cm
### Width: 20cm
### Height: 25cm
### Weight: 53kgs

## Transvirtual suburb autocomplete

This is a publically accessable api for discovering the unique ID of possible suburbs
