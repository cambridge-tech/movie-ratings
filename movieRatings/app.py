
import json
import random

from typing import Union, List, cast
from collections.abc import Mapping
import asyncio
from aiohttp import web


from schematics.models import Model
import schematics.types as T


class Request(Model):
    movie = T.StringType(required=True)


class MovieRatingTimelineResponse(Model):
    date = T.IntType(required=True, min_value=0)
    criticRating = T.IntType()
    audienceRating = T.IntType()


class Response(Model):
    movie = T.StringType(required=True)
    timeline = T.ListType(T.ModelType(MovieRatingTimelineResponse))


def _json_object_hook(d): return namedtuple('X', d.keys())(*d.values())
def json2obj(data): return json.dumps(data)#, object_hook=_json_object_hook)


async def handle(request) -> web.Response:
    # audience gets better
    a1= random.randint(50,95)
    a2= random.randint(75,90)

    # critic gets worse
    c1= random.randint(80,95)
    c2= random.randint(60,85)

    j1 = {"date" : "1595625999","criticRating": c1,"audienceRating" :a1}

    j2 = {"date" : "1595712399","criticRating": c2, "audienceRating" :a2}

    statIs1 = MovieRatingTimelineResponse(j1)
    statIs2 = MovieRatingTimelineResponse(j2)

    resp = Response({"movie": request.match_info['movie']})

    resp.timeline = [statIs1, statIs2]

    return web.json_response(json.dumps(resp.to_primitive()))


app = web.Application()
app.add_routes([web.get('/{movie}', handle)])


if __name__ == "__main__":
    web.run_app(app)
