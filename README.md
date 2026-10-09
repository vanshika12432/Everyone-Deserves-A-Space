# Everyone Deserves A Space

Next.js 14 (App Router) + Tailwind CSS + HeroUI.

    npm install
    cp .env.example .env.local   # add SMTP details for the contact form
    npm run dev

- **Change colours:** edit the tokens at the top of `app/globals.css` (light and dark sets).
- **Edit content** (bio, events, testimonials): `lib/data.js`.
- **Add an event:** add an object to `events` in `lib/data.js`; its page is generated automatically.
- Testimonials are placeholders; new comments live in browser state only until you connect a database.
