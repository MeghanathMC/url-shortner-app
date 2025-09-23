nanoid -> is used to genernate an unique 21 character id which is better and secure than UUID(i.e, 36 chars) that are used for secure-friendly url's.

 npx tsc --init = is used to create a tsconfig file 

 - to install typescript
// npm i typescript -D - as dev dependency

## Development / Run notes

- Development (recommended): nodemon + ts-node/esm
	- Because this project uses "type": "module" in package.json, Node treats source files as ESM and will not execute .ts files directly. For local development we run the TypeScript files with the ts-node ESM loader.
	- Example dev command (used by nodemon):

```sh
node --loader ts-node/esm src/server.ts
```

	- This lets you run .ts files without precompiling. Keep this for fast feedback during development.

- Production (recommended): compile then run
	- For production builds it's safer and more stable to compile TypeScript to JavaScript and run the compiled output with plain Node.
	- Add these npm scripts to `package.json`:

```json
"scripts": {
	"build": "tsc",
	"start": "node dist/server.js",
	"dev": "nodemon --watch src --exec \"node --loader ts-node/esm src/server.ts\""
}
```

	- Usage:

```sh
npm run build
npm start
```

- Alternatives
	- Convert the project to CommonJS (remove `"type": "module"`) and use `ts-node/register` or `ts-node` directly for dev.
	- Always transpile (`tsc`) and run the output with Node for production or CI.
	- Containerize the compiled output (Docker) to create reproducible production images.

- Notes on warnings you may see
	- You might see an "ExperimentalWarning: --experimental-loader" message when using the ESM loader — this is expected and informational while Node's loader API evolves.
	- A "DeprecationWarning: fs.Stats constructor is deprecated" usually comes from a dependency; it is a warning, not a fatal error.

If you'd like, I can add the `build`/`start` scripts to `package.json` and create a small `dist` example so production runs are ready.