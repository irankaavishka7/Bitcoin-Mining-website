# BTCCloud — Cloud Mining Website Starter

This is a responsive **front-end demo**, built with plain HTML, CSS and JavaScript. It does not perform Bitcoin mining, connect to a mining provider, create accounts, store balances, or send BTC.

## Run locally
1. Extract the ZIP file.
2. Open `index.html` in a modern browser.
3. For local development, you can use VS Code with the Live Server extension.

No package installation or API keys are needed for this demo.

## Before launching a real service
- Choose and independently verify a legitimate mining provider. Confirm that its API and contract terms permit your intended use.
- Build a backend with authentication, a database, server-side accounting, rate limits, audit logs and abuse protection.
- Read mining/payout data from the provider server-side; never trust balances supplied by a browser.
- Integrate a reputable payment provider or wallet infrastructure for withdrawals. Keep signing keys in a secret manager or secure server environment; never expose them in frontend JavaScript or ask users for seed phrases/private keys.
- Define minimum payout, network fees, confirmation rules, failed-payment handling and customer support.
- Review applicable laws, taxes, privacy requirements and financial/virtual-asset rules in every country where you operate.
- Test with a testnet or mocked payment adapter before any real funds are involved.

## Important
Do not advertise guaranteed profits or imply demo balances are withdrawable. A cloud-mining website does not generate BTC merely by displaying a dashboard. Real payouts require verifiable mining proceeds or another legitimate, disclosed source of funds.
