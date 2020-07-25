# movie-ratings


```
Setup environment
    $sh setup.sh

Set up backend server
    $ sh run.sh

```


Make curl
```
   $ curl -XGET http://0.0.0.0:8080/{movie name}

```
 
```javascript
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://0.0.0.0:8080/moviename",
  "method": "GET",
  "headers": {
    "User-Agent": "PostmanRuntime/7.20.1",
    "Accept": "*/*",
    "Cache-Control": "no-cache",
    "Postman-Token": "50a1395d-a5da-4d75-b873-c3eb89a1d331,56494b62-f8bb-4452-a776-0a2d94a8d59c",
    "Host": "0.0.0.0:8080",
    "Accept-Encoding": "gzip, deflate",
    "Connection": "keep-alive",
    "cache-control": "no-cache"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
```
 
