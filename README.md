# ServiceFlow Media Website

A React-based marketing website for a lead generation agency.

## Configuration

### Booking Link
To change the booking link (e.g., Cal.com or Calendly), open `constants.ts` and edit:
```typescript
export const BOOKING_URL = "https://cal.com/serviceflow/15min";
```

### Contact Form
Currently, the form constructs a "mailto" link to open the user's email client.
To use a real backend service like Formspree:
1. Go to `pages/Contact.tsx`.
2. Look for the `handleSubmit` function.
3. Uncomment the `fetch` block and add your Formspree endpoint URL.

### AI Chatbot
The site uses Google Gemini for the chat assistant.
1. Create a `.env` file in the root.
2. Add: `REACT_APP_GEMINI_API_KEY=your_key_here` (or just `API_KEY` if using a build system that supports it).
*Note: In this static output, the key is accessed via `process.env.API_KEY`. ensure your build tool injects this.*

### Colors
Colors are defined in `index.html` within the Tailwind config script.
Primary dark: `slate-900`
Primary accent: `blue-600`
