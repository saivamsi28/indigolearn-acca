# IndigoLearn – ACCA

A responsive landing page for an ACCA course, built with React.js and Bootstrap.

## Features

- Built only with React (no other framework)
- Bootstrap 5 (via react-bootstrap) for layout and components
- Fully responsive (mobile, tablet, desktop)
- Uses React hooks: `useState`, `useContext`, `useCallback`, `useMemo` and a custom `useForm` hook
- "Request Call Back" button opens a success modal (no page navigation)

## Page Sections

1. Header
2. Become ACCA in 18 months
3. Why Choose Us
4. ACCA – Eligibility
5. What will you Learn in ACCA?
6. 100% Placement Assistance
7. Kick off your ACCA Prep journey

## How to Run

You need Node.js (version 18 or higher) installed.

```bash
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

To create a production build:

```bash
npm run build
```

## Project Structure

```
src/
├── components/   # Header, Hero, LeadForm, CallbackModal, etc.
├── context/      # Modal open/close state
├── data/         # Text content used by the components
├── hooks/        # Custom useForm hook
├── App.jsx       # Puts all sections together
├── main.jsx      # App entry point
└── styles.css    # All custom styling and colours
```

## Changing the Look

All colours are variables at the top of `src/styles.css`. Change them there and the whole page updates.

## How the Modal Works

Both "Request Call Back" forms (top of the page and bottom) use the same `LeadForm` component. Submitting a form opens `CallbackModal` through `CallbackModalContext`. The modal shows a success message and closes with the X button or the Close button.

## Tech Used

- React 18
- Bootstrap 5 and react-bootstrap
- Vite