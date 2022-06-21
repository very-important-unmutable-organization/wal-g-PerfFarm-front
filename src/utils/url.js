import { compile } from 'path-to-regexp';
import { stringify } from 'query-string';

class Url {
    constructor(template, parseOptions={}) {
        this.pathGenerator = compile(template, parseOptions);
    }

    build(pathArgs, queryArgs = {}, options = {}) {
        const path = this.pathGenerator(pathArgs);

        if (!queryArgs || Object.keys(queryArgs).length === 0) {
            return path;
        }

        const queryString = stringify(queryArgs, options.query);

        return queryString ? `${path}?${queryString}` : path;
    }
}

export { Url };
