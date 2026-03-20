# Coffee Delivery (React + TypeScript + Vite)

This project is a learning app to practice advanced React with hooks. It simulates a coffee shop shopping experience with cart, checkout, and order confirmation.

## Features

- Coffee menu with quantity selection
- Add/edit/remove cart items
- Subtotal, shipping, and total calculations
- Checkout form (address and payment)
- Form validation
- Redirect to confirmed order page

## Project structure

- `src/pages/` (Home, Checkout, ConfirmedOrder)
- `src/components/` (CartButton, Header, CoffeeCard, etc.)
- `src/contexts/` (`CartContext`, `OrderContext`)
- `src/lib/` (`viaCep`, `ibge` for CEP and IBGE lookup)
- `src/utils/` (`formatPrice.ts`)
- `src/styles/` (theme and global styles)

## Requirements

- Node.js 18+ (or equivalent)
- npm

## How to run

From the project root, run:

1. `npm i`
2. `npm run dev`

Then open the local URL shown in the terminal (typically `http://localhost:5173`).

## Useful scripts

- `npm run dev` - run development server
- `npm run build` - create production build in `dist`
- `npm run preview` - preview production build locally

## Manual workflow to test

1. Add coffees and quantity on the home page.
2. Open cart and update/remove items.
3. Go to checkout and enter CEP, address, and payment method.
4. Submit and go to confirmation page.
5. Refresh to confirm checkout state is kept separately (order is finalized).

## React learning points

- Hooks: `useState`, `useEffect`, `useContext`, `useReducer` (and possible `useCallback`)
- Context API for cart/order state
- Data validation and form logic
- API integration with external services (`viaCep`, `ibge`)


---

Thanks for checking out the project!
