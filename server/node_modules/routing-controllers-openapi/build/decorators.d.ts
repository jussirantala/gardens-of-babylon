import { OperationObject } from 'openapi3-ts';
import 'reflect-metadata';
import { IRoute } from './index';
export declare type OpenAPIParam = Partial<OperationObject> | ((source: OperationObject, route: IRoute) => OperationObject);
export declare function OpenAPI(spec: OpenAPIParam): (...args: [Function] | [object, string, PropertyDescriptor]) => void;
export declare function applyOpenAPIDecorator(originalOperation: OperationObject, route: IRoute): OperationObject;
export declare function getOpenAPIMetadata(target: object, key?: string): OpenAPIParam[];
export declare function setOpenAPIMetadata(value: OpenAPIParam[], target: object, key?: string): void;
export declare function ResponseSchema(responseClass: Function | string, options?: {
    contentType?: string;
    description?: string;
    statusCode?: string | number;
    isArray?: boolean;
}): (...args: [Function] | [object, string, PropertyDescriptor]) => void;
