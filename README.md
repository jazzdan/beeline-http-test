## What I expected
I expected that the following steps would cause Honeycomb events to be printed in the console:

1. `git clone https://github.com/jazzdan/beeline-http-test.git`
2. `cd beeline-http-test`
3. `npm install`
4. `node index.js`
5. (In a separate terminal) `curl http://localhost:3000`

## What actually happened

No Honeycomb events get printed in the terminal.