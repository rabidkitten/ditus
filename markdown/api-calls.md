# Calling the API

[Axios](https://github.com/axios/axios) is used for all API calls in DITUS.

## Interceptors

When the product loads, interceptors are added to Axios to do such things as add the content-type to the header of every request and to handle the refreshing of OAuth access tokens that are issued when the user logs on. These interceptors are unit tested.

## Services

The [services folder](https://github.com/rabidkitten/ditus-ui/tree/main/src/services) contains a service class for each module in the product. These classes contain static methods that correspond to the APIs available in the product and encapsulate the logic required to do the following:

* Build the URL of the request;
* Build the payload or data sent to the API; and,
* Cache any returned settings or values.

Each service is unit tested.

The services folder also contains a '__mocks__' folder, which is used to mock the services for when testing those components that use them. This is important since the tests should not call the actual APIs, which will be unavailable on the CI server.

## Web Service URL

The base web service URL used by the services is set in an environment variable named 'REACT_APP_WEB_SERVICE_URL'. This allows the URL to be configured upon installation on a production server and to be changed without recompiling the code.
