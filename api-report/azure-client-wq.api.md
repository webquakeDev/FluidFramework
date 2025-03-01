## API Report File for "@fluidframework/azure-client-wq"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { ContainerSchema } from '@fluidframework/fluid-static';
import { IClient } from '@fluidframework/protocol-definitions';
import { IFluidContainer } from '@fluidframework/fluid-static';
import { IMember } from '@fluidframework/fluid-static';
import { IServiceAudience } from '@fluidframework/fluid-static';
import { ITelemetryBaseEvent } from '@fluidframework/common-definitions';
import { ITelemetryBaseLogger } from '@fluidframework/common-definitions';
import { ITokenClaims } from '@fluidframework/protocol-definitions';
import { ITokenProvider } from '@fluidframework/routerlicious-driver';
import { ITokenResponse } from '@fluidframework/routerlicious-driver';
import { IUser } from '@fluidframework/protocol-definitions';
import { ScopeType } from '@fluidframework/protocol-definitions';
import { ServiceAudience } from '@fluidframework/fluid-static';

// @public (undocumented)
export class AzureAudience extends ServiceAudience<AzureMember> implements IAzureAudience {
    // @internal (undocumented)
    protected createServiceMember(audienceMember: IClient): AzureMember;
}

// @public
export class AzureClient {
    constructor(props: AzureClientProps);
    createContainer(containerSchema: ContainerSchema): Promise<{
        container: IFluidContainer;
        services: AzureContainerServices;
    }>;
    getContainer(id: string, containerSchema: ContainerSchema): Promise<{
        container: IFluidContainer;
        services: AzureContainerServices;
    }>;
}

// @public
export interface AzureClientProps {
    readonly connection: AzureConnectionConfig;
    readonly logger?: ITelemetryBaseLogger;
}

// @public
export interface AzureConnectionConfig {
    orderer: string;
    storage: string;
    tenantId: "local" | string;
    tokenProvider: ITokenProvider;
}

// @public
export interface AzureContainerServices {
    audience: IAzureAudience;
}

// @public
export class AzureFunctionTokenProvider implements ITokenProvider {
    constructor(azFunctionUrl: string, user?: Pick<AzureMember<any>, "userId" | "userName" | "additionalDetails"> | undefined);
    // (undocumented)
    fetchOrdererToken(tenantId: string, documentId?: string): Promise<ITokenResponse>;
    // (undocumented)
    fetchStorageToken(tenantId: string, documentId: string): Promise<ITokenResponse>;
}

// @public
export interface AzureMember<T = any> extends IMember {
    // (undocumented)
    additionalDetails?: T;
    // (undocumented)
    userName: string;
}

// @public
export type IAzureAudience = IServiceAudience<AzureMember>;

export { ITelemetryBaseEvent }

export { ITelemetryBaseLogger }

export { ITokenClaims }

export { ITokenProvider }

export { ITokenResponse }

export { IUser }

// @public
export const LOCAL_MODE_TENANT_ID = "local";

export { ScopeType }

```
