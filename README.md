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

Make curl on command line
```
   $ curl -XGET http://0.0.0.0:8080/{movie name}

```
 

using javascript ajax
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
 
using python requests
```python

import requests

url = "http://0.0.0.0:8080/movie"

response = requests.request("GET", url)

print(response.text)
```

## example response
the json response is of this format
```
{   'movie': 'king_of_staten_island',
    'timeline': [   {   'audienceRating': 86,
                        'criticRating': 94,
                        'date': 1595625999},
                    {   'audienceRating': 86,
                        'criticRating': 73,
                        'date': 1595712399}]}
```


