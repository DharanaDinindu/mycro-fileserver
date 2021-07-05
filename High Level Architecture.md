# Files API Spesification
Files API will serve the necessary files that are being requested by microservices.

Contains 2 main components
- Microservices
- Load Balancers

## Microservices
Will handel the operational functions like processing and data serving.
App structuer will be handeled by the Files server.
Microservices will obtain the component resources and requests from the frontend.

## Load Balancer

- will handel the data traffic of the APIs
- Will manage the flow

## Tech
- planning to use _spring.io_ as the load balancer.
- .NET Core for the microservices