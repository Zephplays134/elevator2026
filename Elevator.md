# Elevator

Elevator is the agent AI model built into this site. It powers the onboard assistant that answers every question a visitor might have about the cruise line, the fleet, and planning a trip.

## What Elevator is

| | |
| --- | --- |
| **Name** | Elevator |
| **Type** | Agent AI model |
| **Role** | Cruise assistant for visitors of this site |
| **Home** | The chat window in the corner of every page |
| **Status** | Live |

## Core properties

- **Real-time** — answers the moment a visitor sends a message, no waiting
- **Keyless** — no API key, no account, no sign-up required to talk to it
- **Fully free** — costs nothing for anyone who uses it
- **Unlimited** — no message caps, no rate limits, no usage quotas
- **Reliable** — always on, with graceful fallbacks if the tally or connection hiccups

## What Elevator can help with

- Ships: fleet details, capacities, and build years
- Destinations: where the line sails and starting prices
- Deals: current offers and discounts
- Dining and entertainment: restaurants, shows, and onboard fun
- Kids and family programs
- Booking guidance: how to reserve and where to call

## How it works in this repo

Elevator runs in `script.js` through the `callCarnivalAPI` function. It reads the visitor's message, matches the intent, and answers instantly from the site's own data (ships, destinations, deals), with a typing indicator while it thinks. Visitors' conversations stay in their browser.

## Update log

- **Oct 28, 2026** — Agent spec file added. Elevator confirmed real-time, keyless, fully free, unlimited, and reliable.
- **July 2026** — Elevator launched as the site's assistant.
