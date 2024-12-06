import fs from 'fs';
import at from '@commitlint/config-angular-type-enum';

const angularTypes = at.value();

/*
  Let's get widget names as valid list of scopes.
*/
const scopes = [
	'schematics',
	'animations',
	'positioning',
	...fs
		.readdirSync('./src', { withFileTypes: true })
		.filter((d) => d.isDirectory())
		.filter((d) => !['test', 'util'].includes(d.name))
		.map((d) => d.name),
];

const types = ['demo', ...angularTypes];

export default {
	extends: ['@commitlint/config-angular'],
	rules: {
		'scope-enum': [2, 'always', scopes],
		'type-enum': [2, 'always', types],
	},
};
