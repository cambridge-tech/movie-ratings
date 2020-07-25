## movie-ratings


```
Setup environment
    $sh setup.sh

```

To set up server open up a separate terminal and run from main project directory

```
$ sh run.sh
```


Then you can make a request to this endpoint 

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
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
```
 
```python

import requests

url = "http://0.0.0.0:8080/movie"

response = requests.request("GET", url)

print(response.text)
```
