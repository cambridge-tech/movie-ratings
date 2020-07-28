import json
import random

from typing import Union, List, cast
from collections.abc import Mapping
import asyncio
from aiohttp import web
import aiohttp_cors

from schematics.models import Model
import schematics.types as T

from . import config


class Request(Model):
    title = T.StringType(required=True)


class MovieRatingTimelineResponse(Model):
    date = T.IntType(required=True, min_value=0)
    criticRating = T.IntType()
    audienceRating = T.IntType()


class Response(Model):
    title = T.StringType(required=True)
    timeline = T.ListType(T.ModelType(MovieRatingTimelineResponse))

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

    resp = Response({"title": request.match_info['title']})

    resp.timeline = [statIs1, statIs2]

    return web.json_response(resp.to_primitive())


app = web.Application()
cors = aiohttp_cors.setup(app)

resource = cors.add(app.router.add_resource("/{title}"))
route = cors.add(
    resource.add_route("GET", handle), {
        config.FRONTEND_ADDRESS: aiohttp_cors.ResourceOptions(
            allow_credentials=True,
            expose_headers=("X-Custom-Server-Header",),
            allow_headers=("X-Requested-With", "Content-Type"),
            max_age=3600,
        )
    })


if __name__ == "__main__":
    web.run_app(app)
