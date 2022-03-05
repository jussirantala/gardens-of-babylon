import * as oa from 'openapi3-ts';
import 'reflect-metadata';
import { IRoute } from './index';
export declare function getFullExpressPath(route: IRoute): string;
export declare function getFullPath(route: IRoute): string;
export declare function getOperation(route: IRoute, schemas: {
    [p: string]: oa.SchemaObject;
}): oa.OperationObject;
export declare function getOperationId(route: IRoute): string;
export declare function getPaths(routes: IRoute[], schemas: {
    [p: string]: oa.SchemaObject;
}): oa.PathObject;
export declare function getHeaderParams(route: IRoute): oa.ParameterObject[];
export declare function getPathParams(route: IRoute): oa.ParameterObject[];
export declare function getQueryParams(route: IRoute, schemas: {
    [p: string]: oa.SchemaObject;
}): oa.ParameterObject[];
export declare function getRequestBody(route: IRoute): oa.RequestBodyObject | void;
export declare function getContentType(route: IRoute): string;
export declare function getStatusCode(route: IRoute): string;
export declare function getResponses(route: IRoute): oa.ResponsesObject;
export declare function getSpec(routes: IRoute[], schemas: {
    [p: string]: oa.SchemaObject;
}): oa.OpenAPIObject;
export declare function getSummary(route: IRoute): string;
export declare function getTags(route: IRoute): string[];
export declare function expressToOpenAPIPath(expressPath: string): string;
