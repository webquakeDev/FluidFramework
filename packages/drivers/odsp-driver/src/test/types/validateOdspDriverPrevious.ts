/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */
/*
 * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 * Generated by fluid-type-validator in @fluidframework/build-tools.
 */
import * as old from "@fluidframework/odsp-driver-previous";
import * as current from "../../index";

type TypeOnly<T> = {
    [P in keyof T]: TypeOnly<T[P]>;
};

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_checkUrl": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_checkUrl():
    TypeOnly<typeof old.checkUrl>;
declare function use_current_FunctionDeclaration_checkUrl(
    use: TypeOnly<typeof current.checkUrl>);
use_current_FunctionDeclaration_checkUrl(
    get_old_FunctionDeclaration_checkUrl());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_checkUrl": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_checkUrl():
    TypeOnly<typeof current.checkUrl>;
declare function use_old_FunctionDeclaration_checkUrl(
    use: TypeOnly<typeof old.checkUrl>);
use_old_FunctionDeclaration_checkUrl(
    get_current_FunctionDeclaration_checkUrl());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "EnumDeclaration_ClpCompliantAppHeader": {"forwardCompat": false}
*/
declare function get_old_EnumDeclaration_ClpCompliantAppHeader():
    TypeOnly<old.ClpCompliantAppHeader>;
declare function use_current_EnumDeclaration_ClpCompliantAppHeader(
    use: TypeOnly<current.ClpCompliantAppHeader>);
use_current_EnumDeclaration_ClpCompliantAppHeader(
    get_old_EnumDeclaration_ClpCompliantAppHeader());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "EnumDeclaration_ClpCompliantAppHeader": {"backCompat": false}
*/
declare function get_current_EnumDeclaration_ClpCompliantAppHeader():
    TypeOnly<current.ClpCompliantAppHeader>;
declare function use_old_EnumDeclaration_ClpCompliantAppHeader(
    use: TypeOnly<old.ClpCompliantAppHeader>);
use_old_EnumDeclaration_ClpCompliantAppHeader(
    get_current_EnumDeclaration_ClpCompliantAppHeader());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_createOdspCreateContainerRequest": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_createOdspCreateContainerRequest():
    TypeOnly<typeof old.createOdspCreateContainerRequest>;
declare function use_current_FunctionDeclaration_createOdspCreateContainerRequest(
    use: TypeOnly<typeof current.createOdspCreateContainerRequest>);
use_current_FunctionDeclaration_createOdspCreateContainerRequest(
    get_old_FunctionDeclaration_createOdspCreateContainerRequest());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_createOdspCreateContainerRequest": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_createOdspCreateContainerRequest():
    TypeOnly<typeof current.createOdspCreateContainerRequest>;
declare function use_old_FunctionDeclaration_createOdspCreateContainerRequest(
    use: TypeOnly<typeof old.createOdspCreateContainerRequest>);
use_old_FunctionDeclaration_createOdspCreateContainerRequest(
    get_current_FunctionDeclaration_createOdspCreateContainerRequest());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_createOdspUrl": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_createOdspUrl():
    TypeOnly<typeof old.createOdspUrl>;
declare function use_current_FunctionDeclaration_createOdspUrl(
    use: TypeOnly<typeof current.createOdspUrl>);
use_current_FunctionDeclaration_createOdspUrl(
    get_old_FunctionDeclaration_createOdspUrl());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_createOdspUrl": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_createOdspUrl():
    TypeOnly<typeof current.createOdspUrl>;
declare function use_old_FunctionDeclaration_createOdspUrl(
    use: TypeOnly<typeof old.createOdspUrl>);
use_old_FunctionDeclaration_createOdspUrl(
    get_current_FunctionDeclaration_createOdspUrl());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_encodeOdspFluidDataStoreLocator": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_encodeOdspFluidDataStoreLocator():
    TypeOnly<typeof old.encodeOdspFluidDataStoreLocator>;
declare function use_current_FunctionDeclaration_encodeOdspFluidDataStoreLocator(
    use: TypeOnly<typeof current.encodeOdspFluidDataStoreLocator>);
use_current_FunctionDeclaration_encodeOdspFluidDataStoreLocator(
    get_old_FunctionDeclaration_encodeOdspFluidDataStoreLocator());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_encodeOdspFluidDataStoreLocator": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_encodeOdspFluidDataStoreLocator():
    TypeOnly<typeof current.encodeOdspFluidDataStoreLocator>;
declare function use_old_FunctionDeclaration_encodeOdspFluidDataStoreLocator(
    use: TypeOnly<typeof old.encodeOdspFluidDataStoreLocator>);
use_old_FunctionDeclaration_encodeOdspFluidDataStoreLocator(
    get_current_FunctionDeclaration_encodeOdspFluidDataStoreLocator());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_getApiRoot": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_getApiRoot():
    TypeOnly<typeof old.getApiRoot>;
declare function use_current_FunctionDeclaration_getApiRoot(
    use: TypeOnly<typeof current.getApiRoot>);
use_current_FunctionDeclaration_getApiRoot(
    get_old_FunctionDeclaration_getApiRoot());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_getApiRoot": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_getApiRoot():
    TypeOnly<typeof current.getApiRoot>;
declare function use_old_FunctionDeclaration_getApiRoot(
    use: TypeOnly<typeof old.getApiRoot>);
use_old_FunctionDeclaration_getApiRoot(
    get_current_FunctionDeclaration_getApiRoot());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_getHashedDocumentId": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_getHashedDocumentId():
    TypeOnly<typeof old.getHashedDocumentId>;
declare function use_current_FunctionDeclaration_getHashedDocumentId(
    use: TypeOnly<typeof current.getHashedDocumentId>);
use_current_FunctionDeclaration_getHashedDocumentId(
    get_old_FunctionDeclaration_getHashedDocumentId());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_getHashedDocumentId": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_getHashedDocumentId():
    TypeOnly<typeof current.getHashedDocumentId>;
declare function use_old_FunctionDeclaration_getHashedDocumentId(
    use: TypeOnly<typeof old.getHashedDocumentId>);
use_old_FunctionDeclaration_getHashedDocumentId(
    get_current_FunctionDeclaration_getHashedDocumentId());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_getLocatorFromOdspUrl": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_getLocatorFromOdspUrl():
    TypeOnly<typeof old.getLocatorFromOdspUrl>;
declare function use_current_FunctionDeclaration_getLocatorFromOdspUrl(
    use: TypeOnly<typeof current.getLocatorFromOdspUrl>);
use_current_FunctionDeclaration_getLocatorFromOdspUrl(
    get_old_FunctionDeclaration_getLocatorFromOdspUrl());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_getLocatorFromOdspUrl": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_getLocatorFromOdspUrl():
    TypeOnly<typeof current.getLocatorFromOdspUrl>;
declare function use_old_FunctionDeclaration_getLocatorFromOdspUrl(
    use: TypeOnly<typeof old.getLocatorFromOdspUrl>);
use_old_FunctionDeclaration_getLocatorFromOdspUrl(
    get_current_FunctionDeclaration_getLocatorFromOdspUrl());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_getOdspUrlParts": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_getOdspUrlParts():
    TypeOnly<typeof old.getOdspUrlParts>;
declare function use_current_FunctionDeclaration_getOdspUrlParts(
    use: TypeOnly<typeof current.getOdspUrlParts>);
use_current_FunctionDeclaration_getOdspUrlParts(
    get_old_FunctionDeclaration_getOdspUrlParts());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_getOdspUrlParts": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_getOdspUrlParts():
    TypeOnly<typeof current.getOdspUrlParts>;
declare function use_old_FunctionDeclaration_getOdspUrlParts(
    use: TypeOnly<typeof old.getOdspUrlParts>);
use_old_FunctionDeclaration_getOdspUrlParts(
    get_current_FunctionDeclaration_getOdspUrlParts());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IClpCompliantAppHeader": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IClpCompliantAppHeader():
    TypeOnly<old.IClpCompliantAppHeader>;
declare function use_current_InterfaceDeclaration_IClpCompliantAppHeader(
    use: TypeOnly<current.IClpCompliantAppHeader>);
use_current_InterfaceDeclaration_IClpCompliantAppHeader(
    get_old_InterfaceDeclaration_IClpCompliantAppHeader());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IClpCompliantAppHeader": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IClpCompliantAppHeader():
    TypeOnly<current.IClpCompliantAppHeader>;
declare function use_old_InterfaceDeclaration_IClpCompliantAppHeader(
    use: TypeOnly<old.IClpCompliantAppHeader>);
use_old_InterfaceDeclaration_IClpCompliantAppHeader(
    get_current_InterfaceDeclaration_IClpCompliantAppHeader());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ISharingLinkHeader": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ISharingLinkHeader():
    TypeOnly<old.ISharingLinkHeader>;
declare function use_current_InterfaceDeclaration_ISharingLinkHeader(
    use: TypeOnly<current.ISharingLinkHeader>);
use_current_InterfaceDeclaration_ISharingLinkHeader(
    get_old_InterfaceDeclaration_ISharingLinkHeader());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ISharingLinkHeader": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ISharingLinkHeader():
    TypeOnly<current.ISharingLinkHeader>;
declare function use_old_InterfaceDeclaration_ISharingLinkHeader(
    use: TypeOnly<old.ISharingLinkHeader>);
use_old_InterfaceDeclaration_ISharingLinkHeader(
    get_current_InterfaceDeclaration_ISharingLinkHeader());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_isOdcOrigin": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_isOdcOrigin():
    TypeOnly<typeof old.isOdcOrigin>;
declare function use_current_FunctionDeclaration_isOdcOrigin(
    use: TypeOnly<typeof current.isOdcOrigin>);
use_current_FunctionDeclaration_isOdcOrigin(
    get_old_FunctionDeclaration_isOdcOrigin());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_isOdcOrigin": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_isOdcOrigin():
    TypeOnly<typeof current.isOdcOrigin>;
declare function use_old_FunctionDeclaration_isOdcOrigin(
    use: TypeOnly<typeof old.isOdcOrigin>);
use_old_FunctionDeclaration_isOdcOrigin(
    get_current_FunctionDeclaration_isOdcOrigin());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_isOdcUrl": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_isOdcUrl():
    TypeOnly<typeof old.isOdcUrl>;
declare function use_current_FunctionDeclaration_isOdcUrl(
    use: TypeOnly<typeof current.isOdcUrl>);
use_current_FunctionDeclaration_isOdcUrl(
    get_old_FunctionDeclaration_isOdcUrl());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_isOdcUrl": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_isOdcUrl():
    TypeOnly<typeof current.isOdcUrl>;
declare function use_old_FunctionDeclaration_isOdcUrl(
    use: TypeOnly<typeof old.isOdcUrl>);
use_old_FunctionDeclaration_isOdcUrl(
    get_current_FunctionDeclaration_isOdcUrl());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_isSpoUrl": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_isSpoUrl():
    TypeOnly<typeof old.isSpoUrl>;
declare function use_current_FunctionDeclaration_isSpoUrl(
    use: TypeOnly<typeof current.isSpoUrl>);
use_current_FunctionDeclaration_isSpoUrl(
    get_old_FunctionDeclaration_isSpoUrl());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_isSpoUrl": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_isSpoUrl():
    TypeOnly<typeof current.isSpoUrl>;
declare function use_old_FunctionDeclaration_isSpoUrl(
    use: TypeOnly<typeof old.isSpoUrl>);
use_old_FunctionDeclaration_isSpoUrl(
    get_current_FunctionDeclaration_isSpoUrl());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_locatorQueryParamName": {"forwardCompat": false}
*/
declare function get_old_VariableDeclaration_locatorQueryParamName():
    TypeOnly<typeof old.locatorQueryParamName>;
declare function use_current_VariableDeclaration_locatorQueryParamName(
    use: TypeOnly<typeof current.locatorQueryParamName>);
use_current_VariableDeclaration_locatorQueryParamName(
    get_old_VariableDeclaration_locatorQueryParamName());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_locatorQueryParamName": {"backCompat": false}
*/
declare function get_current_VariableDeclaration_locatorQueryParamName():
    TypeOnly<typeof current.locatorQueryParamName>;
declare function use_old_VariableDeclaration_locatorQueryParamName(
    use: TypeOnly<typeof old.locatorQueryParamName>);
use_old_VariableDeclaration_locatorQueryParamName(
    get_current_VariableDeclaration_locatorQueryParamName());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_OdcApiSiteOrigin": {"forwardCompat": false}
*/
declare function get_old_VariableDeclaration_OdcApiSiteOrigin():
    TypeOnly<typeof old.OdcApiSiteOrigin>;
declare function use_current_VariableDeclaration_OdcApiSiteOrigin(
    use: TypeOnly<typeof current.OdcApiSiteOrigin>);
use_current_VariableDeclaration_OdcApiSiteOrigin(
    get_old_VariableDeclaration_OdcApiSiteOrigin());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_OdcApiSiteOrigin": {"backCompat": false}
*/
declare function get_current_VariableDeclaration_OdcApiSiteOrigin():
    TypeOnly<typeof current.OdcApiSiteOrigin>;
declare function use_old_VariableDeclaration_OdcApiSiteOrigin(
    use: TypeOnly<typeof old.OdcApiSiteOrigin>);
use_old_VariableDeclaration_OdcApiSiteOrigin(
    get_current_VariableDeclaration_OdcApiSiteOrigin());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_OdcFileSiteOrigin": {"forwardCompat": false}
*/
declare function get_old_VariableDeclaration_OdcFileSiteOrigin():
    TypeOnly<typeof old.OdcFileSiteOrigin>;
declare function use_current_VariableDeclaration_OdcFileSiteOrigin(
    use: TypeOnly<typeof current.OdcFileSiteOrigin>);
use_current_VariableDeclaration_OdcFileSiteOrigin(
    get_old_VariableDeclaration_OdcFileSiteOrigin());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_OdcFileSiteOrigin": {"backCompat": false}
*/
declare function get_current_VariableDeclaration_OdcFileSiteOrigin():
    TypeOnly<typeof current.OdcFileSiteOrigin>;
declare function use_old_VariableDeclaration_OdcFileSiteOrigin(
    use: TypeOnly<typeof old.OdcFileSiteOrigin>);
use_old_VariableDeclaration_OdcFileSiteOrigin(
    get_current_VariableDeclaration_OdcFileSiteOrigin());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_OdspDocumentServiceFactory": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_OdspDocumentServiceFactory():
    TypeOnly<old.OdspDocumentServiceFactory>;
declare function use_current_ClassDeclaration_OdspDocumentServiceFactory(
    use: TypeOnly<current.OdspDocumentServiceFactory>);
use_current_ClassDeclaration_OdspDocumentServiceFactory(
    get_old_ClassDeclaration_OdspDocumentServiceFactory());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_OdspDocumentServiceFactory": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_OdspDocumentServiceFactory():
    TypeOnly<current.OdspDocumentServiceFactory>;
declare function use_old_ClassDeclaration_OdspDocumentServiceFactory(
    use: TypeOnly<old.OdspDocumentServiceFactory>);
use_old_ClassDeclaration_OdspDocumentServiceFactory(
    get_current_ClassDeclaration_OdspDocumentServiceFactory());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_OdspDocumentServiceFactoryCore": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_OdspDocumentServiceFactoryCore():
    TypeOnly<old.OdspDocumentServiceFactoryCore>;
declare function use_current_ClassDeclaration_OdspDocumentServiceFactoryCore(
    use: TypeOnly<current.OdspDocumentServiceFactoryCore>);
use_current_ClassDeclaration_OdspDocumentServiceFactoryCore(
    get_old_ClassDeclaration_OdspDocumentServiceFactoryCore());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_OdspDocumentServiceFactoryCore": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_OdspDocumentServiceFactoryCore():
    TypeOnly<current.OdspDocumentServiceFactoryCore>;
declare function use_old_ClassDeclaration_OdspDocumentServiceFactoryCore(
    use: TypeOnly<old.OdspDocumentServiceFactoryCore>);
use_old_ClassDeclaration_OdspDocumentServiceFactoryCore(
    get_current_ClassDeclaration_OdspDocumentServiceFactoryCore());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_OdspDocumentServiceFactoryWithCodeSplit": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_OdspDocumentServiceFactoryWithCodeSplit():
    TypeOnly<old.OdspDocumentServiceFactoryWithCodeSplit>;
declare function use_current_ClassDeclaration_OdspDocumentServiceFactoryWithCodeSplit(
    use: TypeOnly<current.OdspDocumentServiceFactoryWithCodeSplit>);
use_current_ClassDeclaration_OdspDocumentServiceFactoryWithCodeSplit(
    get_old_ClassDeclaration_OdspDocumentServiceFactoryWithCodeSplit());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_OdspDocumentServiceFactoryWithCodeSplit": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_OdspDocumentServiceFactoryWithCodeSplit():
    TypeOnly<current.OdspDocumentServiceFactoryWithCodeSplit>;
declare function use_old_ClassDeclaration_OdspDocumentServiceFactoryWithCodeSplit(
    use: TypeOnly<old.OdspDocumentServiceFactoryWithCodeSplit>);
use_old_ClassDeclaration_OdspDocumentServiceFactoryWithCodeSplit(
    get_current_ClassDeclaration_OdspDocumentServiceFactoryWithCodeSplit());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_OdspDriverUrlResolver": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_OdspDriverUrlResolver():
    TypeOnly<old.OdspDriverUrlResolver>;
declare function use_current_ClassDeclaration_OdspDriverUrlResolver(
    use: TypeOnly<current.OdspDriverUrlResolver>);
use_current_ClassDeclaration_OdspDriverUrlResolver(
    get_old_ClassDeclaration_OdspDriverUrlResolver());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_OdspDriverUrlResolver": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_OdspDriverUrlResolver():
    TypeOnly<current.OdspDriverUrlResolver>;
declare function use_old_ClassDeclaration_OdspDriverUrlResolver(
    use: TypeOnly<old.OdspDriverUrlResolver>);
use_old_ClassDeclaration_OdspDriverUrlResolver(
    get_current_ClassDeclaration_OdspDriverUrlResolver());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_OdspDriverUrlResolverForShareLink": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_OdspDriverUrlResolverForShareLink():
    TypeOnly<old.OdspDriverUrlResolverForShareLink>;
declare function use_current_ClassDeclaration_OdspDriverUrlResolverForShareLink(
    use: TypeOnly<current.OdspDriverUrlResolverForShareLink>);
use_current_ClassDeclaration_OdspDriverUrlResolverForShareLink(
    get_old_ClassDeclaration_OdspDriverUrlResolverForShareLink());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_OdspDriverUrlResolverForShareLink": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_OdspDriverUrlResolverForShareLink():
    TypeOnly<current.OdspDriverUrlResolverForShareLink>;
declare function use_old_ClassDeclaration_OdspDriverUrlResolverForShareLink(
    use: TypeOnly<old.OdspDriverUrlResolverForShareLink>);
use_old_ClassDeclaration_OdspDriverUrlResolverForShareLink(
    get_current_ClassDeclaration_OdspDriverUrlResolverForShareLink());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_OdspFluidDataStoreLocator": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_OdspFluidDataStoreLocator():
    TypeOnly<old.OdspFluidDataStoreLocator>;
declare function use_current_InterfaceDeclaration_OdspFluidDataStoreLocator(
    use: TypeOnly<current.OdspFluidDataStoreLocator>);
use_current_InterfaceDeclaration_OdspFluidDataStoreLocator(
    get_old_InterfaceDeclaration_OdspFluidDataStoreLocator());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_OdspFluidDataStoreLocator": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_OdspFluidDataStoreLocator():
    TypeOnly<current.OdspFluidDataStoreLocator>;
declare function use_old_InterfaceDeclaration_OdspFluidDataStoreLocator(
    use: TypeOnly<old.OdspFluidDataStoreLocator>);
use_old_InterfaceDeclaration_OdspFluidDataStoreLocator(
    get_current_InterfaceDeclaration_OdspFluidDataStoreLocator());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_prefetchLatestSnapshot": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_prefetchLatestSnapshot():
    TypeOnly<typeof old.prefetchLatestSnapshot>;
declare function use_current_FunctionDeclaration_prefetchLatestSnapshot(
    use: TypeOnly<typeof current.prefetchLatestSnapshot>);
use_current_FunctionDeclaration_prefetchLatestSnapshot(
    get_old_FunctionDeclaration_prefetchLatestSnapshot());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_prefetchLatestSnapshot": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_prefetchLatestSnapshot():
    TypeOnly<typeof current.prefetchLatestSnapshot>;
declare function use_old_FunctionDeclaration_prefetchLatestSnapshot(
    use: TypeOnly<typeof old.prefetchLatestSnapshot>);
use_old_FunctionDeclaration_prefetchLatestSnapshot(
    get_current_FunctionDeclaration_prefetchLatestSnapshot());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ShareLinkFetcherProps": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ShareLinkFetcherProps():
    TypeOnly<old.ShareLinkFetcherProps>;
declare function use_current_InterfaceDeclaration_ShareLinkFetcherProps(
    use: TypeOnly<current.ShareLinkFetcherProps>);
use_current_InterfaceDeclaration_ShareLinkFetcherProps(
    get_old_InterfaceDeclaration_ShareLinkFetcherProps());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ShareLinkFetcherProps": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ShareLinkFetcherProps():
    TypeOnly<current.ShareLinkFetcherProps>;
declare function use_old_InterfaceDeclaration_ShareLinkFetcherProps(
    use: TypeOnly<old.ShareLinkFetcherProps>);
use_old_InterfaceDeclaration_ShareLinkFetcherProps(
    get_current_InterfaceDeclaration_ShareLinkFetcherProps());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "EnumDeclaration_SharingLinkHeader": {"forwardCompat": false}
*/
declare function get_old_EnumDeclaration_SharingLinkHeader():
    TypeOnly<old.SharingLinkHeader>;
declare function use_current_EnumDeclaration_SharingLinkHeader(
    use: TypeOnly<current.SharingLinkHeader>);
use_current_EnumDeclaration_SharingLinkHeader(
    get_old_EnumDeclaration_SharingLinkHeader());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "EnumDeclaration_SharingLinkHeader": {"backCompat": false}
*/
declare function get_current_EnumDeclaration_SharingLinkHeader():
    TypeOnly<current.SharingLinkHeader>;
declare function use_old_EnumDeclaration_SharingLinkHeader(
    use: TypeOnly<old.SharingLinkHeader>);
use_old_EnumDeclaration_SharingLinkHeader(
    get_current_EnumDeclaration_SharingLinkHeader());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_storeLocatorInOdspUrl": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_storeLocatorInOdspUrl():
    TypeOnly<typeof old.storeLocatorInOdspUrl>;
declare function use_current_FunctionDeclaration_storeLocatorInOdspUrl(
    use: TypeOnly<typeof current.storeLocatorInOdspUrl>);
use_current_FunctionDeclaration_storeLocatorInOdspUrl(
    get_old_FunctionDeclaration_storeLocatorInOdspUrl());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_storeLocatorInOdspUrl": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_storeLocatorInOdspUrl():
    TypeOnly<typeof current.storeLocatorInOdspUrl>;
declare function use_old_FunctionDeclaration_storeLocatorInOdspUrl(
    use: TypeOnly<typeof old.storeLocatorInOdspUrl>);
use_old_FunctionDeclaration_storeLocatorInOdspUrl(
    get_current_FunctionDeclaration_storeLocatorInOdspUrl());
