This project now aliases the Google "Poppins" font as `Orchids` for a modern look.

Two options to use a custom font named "Orchids":

1) Use the bundled Google font (already wired up)
   - The app loads Poppins and exposes it under the names `Orchids` and `Orchids-Bold`.
   - No local font files are required.

2) Use your own local font files
   - Add your font files here, for example:
     - Orchids-Regular.ttf
     - Orchids-Bold.ttf
   - If you prefer local files instead of Google fonts, I can change `App.js` to load them from this folder.

Install dependencies and run the app:

```bash
npm install
expo start -c
```

If you'd like a different Google font instead of Poppins, tell me which one and I'll swap it.
