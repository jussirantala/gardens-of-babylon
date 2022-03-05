import * as oa from 'openapi3-ts';
import { MetadataArgsStorage, RoutingControllersOptions } from 'routing-controllers';
export * from './decorators';
export * from './generateSpec';
export * from './parseMetadata';
export declare function routingControllersToSpec(storage: MetadataArgsStorage, routingControllerOptions?: RoutingControllersOptions, additionalProperties?: Partial<oa.OpenAPIObject>): oa.OpenAPIObject;
