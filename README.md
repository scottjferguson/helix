<img src="https://github.com/sfergusonATX/helix/raw/master/resources/icon.png?raw=true" alt="Helix" style="max-width:100%; float: left; padding-right: 50px; margin: 20px 0;" height="200" width="200">

# Helix

[![Build status](https://ci.appveyor.com/api/projects/status/uy3l50i1p1gxu1pe/branch/master?svg=true)](https://ci.appveyor.com/project/sfergusonATX/helix/branch/master)

A Customer management platform

> <sup>Helix is a set of microservices that facilitates common customer management tasks. The microservices expose a RESTful API that requires token-based header authentication. Each domain also supports handling events raised within the platform.</sup>
>
> <sup>Helix is built on ASP.NET Core 2.2 and WebAPI. It is deployed to Azure using Docker.
>
> <sup>Communication amongst microservices is achieved using a generic abstraction of an Event Bus. There are 2 implementations; RabbitMQ and Azure Service Bus. They can be toggled by way of configuration.</sup>

<br />

<img src="https://github.com/sfergusonATX/helix/raw/master/resources/break.jpg?raw=true">

### Production Deployment

https://helix-prod.azurewebsites.net/