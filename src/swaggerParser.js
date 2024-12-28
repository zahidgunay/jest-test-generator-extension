const OpenAPIParser = require('@readme/openapi-parser');

async function parseSwagger(swaggerPath) {
    try {
        const api = await  OpenAPIParser.validate(swaggerPath);
        const endpoints = [];

        for (const [endpoint, methods] of Object.entries(api.paths)) {
            for (const method of Object.keys(methods)) {
                endpoints.push({ endpoint, method });
            }
        }

        return endpoints;
    } catch (err) {
        throw new Error("Error during parsing swagger: " + err.message);
    }
}

module.exports = { parseSwagger };
