/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */
/*
 * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 * Generated by fluid-type-validator in @fluidframework/build-tools.
 */
import * as old from "@fluidframework/fluid-static-previous";
import * as current from "../../index";

type TypeOnly<T> = {
    [P in keyof T]: TypeOnly<T[P]>;
};

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ContainerSchema": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ContainerSchema():
    TypeOnly<old.ContainerSchema>;
declare function use_current_InterfaceDeclaration_ContainerSchema(
    use: TypeOnly<current.ContainerSchema>);
use_current_InterfaceDeclaration_ContainerSchema(
    get_old_InterfaceDeclaration_ContainerSchema());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ContainerSchema": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ContainerSchema():
    TypeOnly<current.ContainerSchema>;
declare function use_old_InterfaceDeclaration_ContainerSchema(
    use: TypeOnly<old.ContainerSchema>);
use_old_InterfaceDeclaration_ContainerSchema(
    get_current_InterfaceDeclaration_ContainerSchema());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_DataObjectClass": {"forwardCompat": false}
*/
declare function get_old_TypeAliasDeclaration_DataObjectClass():
    TypeOnly<old.DataObjectClass<any>>;
declare function use_current_TypeAliasDeclaration_DataObjectClass(
    use: TypeOnly<current.DataObjectClass<any>>);
use_current_TypeAliasDeclaration_DataObjectClass(
    get_old_TypeAliasDeclaration_DataObjectClass());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_DataObjectClass": {"backCompat": false}
*/
declare function get_current_TypeAliasDeclaration_DataObjectClass():
    TypeOnly<current.DataObjectClass<any>>;
declare function use_old_TypeAliasDeclaration_DataObjectClass(
    use: TypeOnly<old.DataObjectClass<any>>);
use_old_TypeAliasDeclaration_DataObjectClass(
    get_current_TypeAliasDeclaration_DataObjectClass());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_DOProviderContainerRuntimeFactory": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_DOProviderContainerRuntimeFactory():
    TypeOnly<old.DOProviderContainerRuntimeFactory>;
declare function use_current_ClassDeclaration_DOProviderContainerRuntimeFactory(
    use: TypeOnly<current.DOProviderContainerRuntimeFactory>);
use_current_ClassDeclaration_DOProviderContainerRuntimeFactory(
    get_old_ClassDeclaration_DOProviderContainerRuntimeFactory());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_DOProviderContainerRuntimeFactory": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_DOProviderContainerRuntimeFactory():
    TypeOnly<current.DOProviderContainerRuntimeFactory>;
declare function use_old_ClassDeclaration_DOProviderContainerRuntimeFactory(
    use: TypeOnly<old.DOProviderContainerRuntimeFactory>);
use_old_ClassDeclaration_DOProviderContainerRuntimeFactory(
    get_current_ClassDeclaration_DOProviderContainerRuntimeFactory());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_FluidContainer": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_FluidContainer():
    TypeOnly<old.FluidContainer>;
declare function use_current_ClassDeclaration_FluidContainer(
    use: TypeOnly<current.FluidContainer>);
use_current_ClassDeclaration_FluidContainer(
    get_old_ClassDeclaration_FluidContainer());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_FluidContainer": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_FluidContainer():
    TypeOnly<current.FluidContainer>;
declare function use_old_ClassDeclaration_FluidContainer(
    use: TypeOnly<old.FluidContainer>);
use_old_ClassDeclaration_FluidContainer(
    get_current_ClassDeclaration_FluidContainer());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IConnection": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IConnection():
    TypeOnly<old.IConnection>;
declare function use_current_InterfaceDeclaration_IConnection(
    use: TypeOnly<current.IConnection>);
use_current_InterfaceDeclaration_IConnection(
    get_old_InterfaceDeclaration_IConnection());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IConnection": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IConnection():
    TypeOnly<current.IConnection>;
declare function use_old_InterfaceDeclaration_IConnection(
    use: TypeOnly<old.IConnection>);
use_old_InterfaceDeclaration_IConnection(
    get_current_InterfaceDeclaration_IConnection());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFluidContainer": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IFluidContainer():
    TypeOnly<old.IFluidContainer>;
declare function use_current_InterfaceDeclaration_IFluidContainer(
    use: TypeOnly<current.IFluidContainer>);
use_current_InterfaceDeclaration_IFluidContainer(
    get_old_InterfaceDeclaration_IFluidContainer());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFluidContainer": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IFluidContainer():
    TypeOnly<current.IFluidContainer>;
declare function use_old_InterfaceDeclaration_IFluidContainer(
    use: TypeOnly<old.IFluidContainer>);
use_old_InterfaceDeclaration_IFluidContainer(
    get_current_InterfaceDeclaration_IFluidContainer());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFluidContainerEvents": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IFluidContainerEvents():
    TypeOnly<old.IFluidContainerEvents>;
declare function use_current_InterfaceDeclaration_IFluidContainerEvents(
    use: TypeOnly<current.IFluidContainerEvents>);
use_current_InterfaceDeclaration_IFluidContainerEvents(
    get_old_InterfaceDeclaration_IFluidContainerEvents());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFluidContainerEvents": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IFluidContainerEvents():
    TypeOnly<current.IFluidContainerEvents>;
declare function use_old_InterfaceDeclaration_IFluidContainerEvents(
    use: TypeOnly<old.IFluidContainerEvents>);
use_old_InterfaceDeclaration_IFluidContainerEvents(
    get_current_InterfaceDeclaration_IFluidContainerEvents());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IMember": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IMember():
    TypeOnly<old.IMember>;
declare function use_current_InterfaceDeclaration_IMember(
    use: TypeOnly<current.IMember>);
use_current_InterfaceDeclaration_IMember(
    get_old_InterfaceDeclaration_IMember());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IMember": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IMember():
    TypeOnly<current.IMember>;
declare function use_old_InterfaceDeclaration_IMember(
    use: TypeOnly<old.IMember>);
use_old_InterfaceDeclaration_IMember(
    get_current_InterfaceDeclaration_IMember());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IServiceAudience": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IServiceAudience():
    TypeOnly<old.IServiceAudience<any>>;
declare function use_current_InterfaceDeclaration_IServiceAudience(
    use: TypeOnly<current.IServiceAudience<any>>);
use_current_InterfaceDeclaration_IServiceAudience(
    get_old_InterfaceDeclaration_IServiceAudience());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IServiceAudience": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IServiceAudience():
    TypeOnly<current.IServiceAudience<any>>;
declare function use_old_InterfaceDeclaration_IServiceAudience(
    use: TypeOnly<old.IServiceAudience<any>>);
use_old_InterfaceDeclaration_IServiceAudience(
    get_current_InterfaceDeclaration_IServiceAudience());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IServiceAudienceEvents": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IServiceAudienceEvents():
    TypeOnly<old.IServiceAudienceEvents<any>>;
declare function use_current_InterfaceDeclaration_IServiceAudienceEvents(
    use: TypeOnly<current.IServiceAudienceEvents<any>>);
use_current_InterfaceDeclaration_IServiceAudienceEvents(
    get_old_InterfaceDeclaration_IServiceAudienceEvents());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IServiceAudienceEvents": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IServiceAudienceEvents():
    TypeOnly<current.IServiceAudienceEvents<any>>;
declare function use_old_InterfaceDeclaration_IServiceAudienceEvents(
    use: TypeOnly<old.IServiceAudienceEvents<any>>);
use_old_InterfaceDeclaration_IServiceAudienceEvents(
    get_current_InterfaceDeclaration_IServiceAudienceEvents());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_LoadableObjectClass": {"forwardCompat": false}
*/
declare function get_old_TypeAliasDeclaration_LoadableObjectClass():
    TypeOnly<old.LoadableObjectClass<any>>;
declare function use_current_TypeAliasDeclaration_LoadableObjectClass(
    use: TypeOnly<current.LoadableObjectClass<any>>);
use_current_TypeAliasDeclaration_LoadableObjectClass(
    get_old_TypeAliasDeclaration_LoadableObjectClass());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_LoadableObjectClass": {"backCompat": false}
*/
declare function get_current_TypeAliasDeclaration_LoadableObjectClass():
    TypeOnly<current.LoadableObjectClass<any>>;
declare function use_old_TypeAliasDeclaration_LoadableObjectClass(
    use: TypeOnly<old.LoadableObjectClass<any>>);
use_old_TypeAliasDeclaration_LoadableObjectClass(
    get_current_TypeAliasDeclaration_LoadableObjectClass());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_LoadableObjectClassRecord": {"forwardCompat": false}
*/
declare function get_old_TypeAliasDeclaration_LoadableObjectClassRecord():
    TypeOnly<old.LoadableObjectClassRecord>;
declare function use_current_TypeAliasDeclaration_LoadableObjectClassRecord(
    use: TypeOnly<current.LoadableObjectClassRecord>);
use_current_TypeAliasDeclaration_LoadableObjectClassRecord(
    get_old_TypeAliasDeclaration_LoadableObjectClassRecord());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_LoadableObjectClassRecord": {"backCompat": false}
*/
declare function get_current_TypeAliasDeclaration_LoadableObjectClassRecord():
    TypeOnly<current.LoadableObjectClassRecord>;
declare function use_old_TypeAliasDeclaration_LoadableObjectClassRecord(
    use: TypeOnly<old.LoadableObjectClassRecord>);
use_old_TypeAliasDeclaration_LoadableObjectClassRecord(
    get_current_TypeAliasDeclaration_LoadableObjectClassRecord());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_LoadableObjectCtor": {"forwardCompat": false}
*/
declare function get_old_TypeAliasDeclaration_LoadableObjectCtor():
    TypeOnly<old.LoadableObjectCtor<any>>;
declare function use_current_TypeAliasDeclaration_LoadableObjectCtor(
    use: TypeOnly<current.LoadableObjectCtor<any>>);
use_current_TypeAliasDeclaration_LoadableObjectCtor(
    get_old_TypeAliasDeclaration_LoadableObjectCtor());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_LoadableObjectCtor": {"backCompat": false}
*/
declare function get_current_TypeAliasDeclaration_LoadableObjectCtor():
    TypeOnly<current.LoadableObjectCtor<any>>;
declare function use_old_TypeAliasDeclaration_LoadableObjectCtor(
    use: TypeOnly<old.LoadableObjectCtor<any>>);
use_old_TypeAliasDeclaration_LoadableObjectCtor(
    get_current_TypeAliasDeclaration_LoadableObjectCtor());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_LoadableObjectRecord": {"forwardCompat": false}
*/
declare function get_old_TypeAliasDeclaration_LoadableObjectRecord():
    TypeOnly<old.LoadableObjectRecord>;
declare function use_current_TypeAliasDeclaration_LoadableObjectRecord(
    use: TypeOnly<current.LoadableObjectRecord>);
use_current_TypeAliasDeclaration_LoadableObjectRecord(
    get_old_TypeAliasDeclaration_LoadableObjectRecord());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_LoadableObjectRecord": {"backCompat": false}
*/
declare function get_current_TypeAliasDeclaration_LoadableObjectRecord():
    TypeOnly<current.LoadableObjectRecord>;
declare function use_old_TypeAliasDeclaration_LoadableObjectRecord(
    use: TypeOnly<old.LoadableObjectRecord>);
use_old_TypeAliasDeclaration_LoadableObjectRecord(
    get_current_TypeAliasDeclaration_LoadableObjectRecord());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_RootDataObject": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_RootDataObject():
    TypeOnly<old.RootDataObject>;
declare function use_current_ClassDeclaration_RootDataObject(
    use: TypeOnly<current.RootDataObject>);
use_current_ClassDeclaration_RootDataObject(
    get_old_ClassDeclaration_RootDataObject());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_RootDataObject": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_RootDataObject():
    TypeOnly<current.RootDataObject>;
declare function use_old_ClassDeclaration_RootDataObject(
    use: TypeOnly<old.RootDataObject>);
use_old_ClassDeclaration_RootDataObject(
    get_current_ClassDeclaration_RootDataObject());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_RootDataObjectProps": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_RootDataObjectProps():
    TypeOnly<old.RootDataObjectProps>;
declare function use_current_InterfaceDeclaration_RootDataObjectProps(
    use: TypeOnly<current.RootDataObjectProps>);
use_current_InterfaceDeclaration_RootDataObjectProps(
    get_old_InterfaceDeclaration_RootDataObjectProps());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_RootDataObjectProps": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_RootDataObjectProps():
    TypeOnly<current.RootDataObjectProps>;
declare function use_old_InterfaceDeclaration_RootDataObjectProps(
    use: TypeOnly<old.RootDataObjectProps>);
use_old_InterfaceDeclaration_RootDataObjectProps(
    get_current_InterfaceDeclaration_RootDataObjectProps());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_ServiceAudience": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_ServiceAudience():
    TypeOnly<old.ServiceAudience>;
declare function use_current_ClassDeclaration_ServiceAudience(
    use: TypeOnly<current.ServiceAudience>);
use_current_ClassDeclaration_ServiceAudience(
    get_old_ClassDeclaration_ServiceAudience());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_ServiceAudience": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_ServiceAudience():
    TypeOnly<current.ServiceAudience>;
declare function use_old_ClassDeclaration_ServiceAudience(
    use: TypeOnly<old.ServiceAudience>);
use_old_ClassDeclaration_ServiceAudience(
    get_current_ClassDeclaration_ServiceAudience());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_SharedObjectClass": {"forwardCompat": false}
*/
declare function get_old_TypeAliasDeclaration_SharedObjectClass():
    TypeOnly<old.SharedObjectClass<any>>;
declare function use_current_TypeAliasDeclaration_SharedObjectClass(
    use: TypeOnly<current.SharedObjectClass<any>>);
use_current_TypeAliasDeclaration_SharedObjectClass(
    get_old_TypeAliasDeclaration_SharedObjectClass());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_SharedObjectClass": {"backCompat": false}
*/
declare function get_current_TypeAliasDeclaration_SharedObjectClass():
    TypeOnly<current.SharedObjectClass<any>>;
declare function use_old_TypeAliasDeclaration_SharedObjectClass(
    use: TypeOnly<old.SharedObjectClass<any>>);
use_old_TypeAliasDeclaration_SharedObjectClass(
    get_current_TypeAliasDeclaration_SharedObjectClass());
