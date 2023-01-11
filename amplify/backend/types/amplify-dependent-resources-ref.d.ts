export type AmplifyDependentResourcesAttributes = {
    "api": {
        "GateGuard": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "auth": {
        "gateguard4cdbbbcc": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        },
        "userPoolGroups": {
            "gateguardGroupRole": "string"
        }
    },
    "storage": {
        "gateguardstorage": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}