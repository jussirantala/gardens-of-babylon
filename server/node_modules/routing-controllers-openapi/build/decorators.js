"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseSchema = exports.setOpenAPIMetadata = exports.getOpenAPIMetadata = exports.applyOpenAPIDecorator = exports.OpenAPI = void 0;
const tslib_1 = require("tslib");
const lodash_merge_1 = tslib_1.__importDefault(require("lodash.merge"));
require("reflect-metadata");
const index_1 = require("./index");
const OPEN_API_KEY = Symbol('routing-controllers-openapi:OpenAPI');
function OpenAPI(spec) {
    return (...args) => {
        if (args.length === 1) {
            const [target] = args;
            const currentMeta = getOpenAPIMetadata(target);
            setOpenAPIMetadata([spec, ...currentMeta], target);
        }
        else {
            const [target, key] = args;
            const currentMeta = getOpenAPIMetadata(target, key);
            setOpenAPIMetadata([spec, ...currentMeta], target, key);
        }
    };
}
exports.OpenAPI = OpenAPI;
function applyOpenAPIDecorator(originalOperation, route) {
    const { action } = route;
    const openAPIParams = [
        ...getOpenAPIMetadata(action.target),
        ...getOpenAPIMetadata(action.target.prototype, action.method),
    ];
    return openAPIParams.reduce((acc, oaParam) => {
        return typeof oaParam === 'function'
            ? oaParam(acc, route)
            : lodash_merge_1.default({}, acc, oaParam);
    }, originalOperation);
}
exports.applyOpenAPIDecorator = applyOpenAPIDecorator;
function getOpenAPIMetadata(target, key) {
    return ((key
        ? Reflect.getMetadata(OPEN_API_KEY, target.constructor, key)
        : Reflect.getMetadata(OPEN_API_KEY, target)) || []);
}
exports.getOpenAPIMetadata = getOpenAPIMetadata;
function setOpenAPIMetadata(value, target, key) {
    return key
        ? Reflect.defineMetadata(OPEN_API_KEY, value, target.constructor, key)
        : Reflect.defineMetadata(OPEN_API_KEY, value, target);
}
exports.setOpenAPIMetadata = setOpenAPIMetadata;
function ResponseSchema(responseClass, options = {}) {
    const setResponseSchema = (source, route) => {
        var _a;
        const contentType = options.contentType || index_1.getContentType(route);
        const description = options.description || '';
        const isArray = options.isArray || false;
        const statusCode = (options.statusCode || index_1.getStatusCode(route)) + '';
        let responseSchemaName = '';
        if (typeof responseClass === 'function' && responseClass.name) {
            responseSchemaName = responseClass.name;
        }
        else if (typeof responseClass === 'string') {
            responseSchemaName = responseClass;
        }
        if (responseSchemaName) {
            const reference = {
                $ref: `#/components/schemas/${responseSchemaName}`,
            };
            const schema = isArray
                ? { items: reference, type: 'array' }
                : reference;
            const responses = {
                [statusCode]: {
                    content: {
                        [contentType]: {
                            schema,
                        },
                    },
                    description,
                },
            };
            const oldSchema = (_a = source.responses[statusCode]) === null || _a === void 0 ? void 0 : _a.content[contentType].schema;
            if ((oldSchema === null || oldSchema === void 0 ? void 0 : oldSchema.$ref) || (oldSchema === null || oldSchema === void 0 ? void 0 : oldSchema.items) || (oldSchema === null || oldSchema === void 0 ? void 0 : oldSchema.oneOf)) {
                const newStatusCodeResponse = lodash_merge_1.default({}, source.responses[statusCode], responses[statusCode]);
                const newSchema = oldSchema.oneOf
                    ? {
                        oneOf: [...oldSchema.oneOf, schema],
                    }
                    : { oneOf: [oldSchema, schema] };
                newStatusCodeResponse.content[contentType].schema = newSchema;
                source.responses[statusCode] = newStatusCodeResponse;
                return source;
            }
            return lodash_merge_1.default({}, source, { responses });
        }
        return source;
    };
    return OpenAPI(setResponseSchema);
}
exports.ResponseSchema = ResponseSchema;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNvcmF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSx3RUFBaUM7QUFPakMsNEJBQXlCO0FBRXpCLG1DQUErRDtBQUUvRCxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMscUNBQXFDLENBQUMsQ0FBQTtBQWVsRSxTQUFnQixPQUFPLENBQUMsSUFBa0I7SUFFeEMsT0FBTyxDQUFDLEdBQUcsSUFBdUQsRUFBRSxFQUFFO1FBQ3BFLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDckIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQTtZQUNyQixNQUFNLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUM5QyxrQkFBa0IsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLFdBQVcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFBO1NBQ25EO2FBQU07WUFDTCxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQTtZQUMxQixNQUFNLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDbkQsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxXQUFXLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUE7U0FDeEQ7SUFDSCxDQUFDLENBQUE7QUFDSCxDQUFDO0FBYkQsMEJBYUM7QUFLRCxTQUFnQixxQkFBcUIsQ0FDbkMsaUJBQWtDLEVBQ2xDLEtBQWE7SUFFYixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFBO0lBQ3hCLE1BQU0sYUFBYSxHQUFHO1FBQ3BCLEdBQUcsa0JBQWtCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNwQyxHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFF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