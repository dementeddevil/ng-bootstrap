/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-var */

// extracts only the minor version from package.json
// ex. ngBootstrap: "9.0.0" -> "9.0.0"
// ex. bootstrap: "4.0.1" -> "4.0"
declare var require: any;
export const versions = {
	bootstrap: `${require('../../../package.json').devDependencies['bootstrap'].split('.').slice(0, 2).join('.')}`,
	ngBootstrap: `${require('../../../package.json').version}`,
};
