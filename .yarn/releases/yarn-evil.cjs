// Would run during `yarn install` if Yarn honored yarnPath. Draft Fixer v19 refuses
// the install before any command starts, so this file is never executed on the server.
require("node:fs").writeFileSync("/tmp/YARNPATH-RAN", "pwned\n");
process.exit(0);
