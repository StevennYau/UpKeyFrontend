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

## Frontend Dependencies
The dependencies used in this project and that should be installed are:
```javascript
"bcrypt": "^5.0.1",
"dns": "^0.2.2",
"js-cookie": "^2.2.1",
"jsonwebtoken": "^8.5.1",
"mongoose": "^5.12.6",
"net": "^1.0.2",
"next": "10.2.0",
"react": "17.0.2",
"react-dom": "17.0.2"
```

```mongoose
const userSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true,
      unique: true
   },
   password: {
      type: String,
      required: true
   },
   role: {
      type: String,
      default: 'user'
   },
   root: {
      type: Boolean,
      default: false
   },
   avatar: {
      type: String,
      default: 'https://res.cloudinary.com/djvcz33mm/image/upload/v1619660571/guest-user_kpk4c0.jpg'
   }
}, {
   timestamps: true
})
```

## Backend Dependencies
```ASP.NET
<PackageReference Include="HtmlAgilityPack" Version="1.11.33" />
<PackageReference Include="Microsoft.Extensions.Options" Version="6.0.0-preview.3.21201.4" />
<PackageReference Include="MongoDB.Bson" Version="2.13.0-beta1" />
<PackageReference Include="MongoDB.Driver" Version="2.13.0-beta1" />
 ```

