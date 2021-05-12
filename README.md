# UpKey

UpKey is a web scraper for mechanical keyboards on Ebay that allows users to view, browse, and save mechanical keyboards that they desire. This project's frontend uses NextJS and Bootstrap for it's responsive user interface. The HtmlAgilityPack is used to scrape Ebay's website and the RESTful API was built with ASP.NET Core. User and product information is stored with MongoDB.

UpKey's ASP.NET Core backend implements the Swagger UI for clear documentation of the API

## Technology Stack
* ASP.NET Core
* NextJS
* Bootstrap
* MongoDB
* Node.js
* Express

## Database Models
### Product
```C#
public class EbayKeyboard
{
    [BsonId]
    [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
    public string Id { get; set; }

    public string EbayId { get; set; }

    public string Name { get; set; }

    public double Price { get; set; }

    public string Link { get; set; }

    public string Standing { get; set; }

    public string Image { get; set; }
}
 ```

## Frontend Dependancies
The dependencies used in this project and that should be installed are:
```
"@angular/animations": "^11.2.3",
"@angular/cdk": "^11.2.2",
"@angular/common": "~11.2.1",
"@angular/compiler": "~11.2.1",
"@angular/core": "~11.2.1",
"@angular/flex-layout": "^11.0.0-beta.33",
"@angular/forms": "~11.2.1",
"@angular/material": "^11.2.2",
"@angular/platform-browser": "~11.2.1",
"@angular/platform-browser-dynamic": "~11.2.1",
"@angular/router": "~11.2.1",
"@fortawesome/fontawesome-free": "^5.15.2",
"@types/chart.js": "^2.9.31",
"@types/googlemaps": "^3.39.13",
"angular-bootstrap-md": "^11.0.0",
"animate.css": "^4.1.1",
"chart.js": "^2.5.0",
"hammerjs": "^2.0.8",
"rxjs": "~6.6.0",
"tslib": "^2.0.0",
"zone.js": "~0.11.3"
```

## Backend Dependancies
```c#
<PackageReference Include="HtmlAgilityPack" Version="1.11.33" />
<PackageReference Include="Microsoft.Extensions.Options" Version="6.0.0-preview.3.21201.4" />
<PackageReference Include="MongoDB.Bson" Version="2.13.0-beta1" />
<PackageReference Include="MongoDB.Driver" Version="2.13.0-beta1" />
 ```

