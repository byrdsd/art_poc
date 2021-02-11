# Flip Block POC
## Startup
Clone the repository

Start the Docker container and create, migrate, and seed the database.
```
cd art_poc_rails
docker-compose up -d
docker-compose exec app rake db:create db:migrate db:seed
```
Visit localhost:3000/admin for block admin, localhost:3000/blocks for blocks in json format.

Start the yarn application
```
cd art_poc_react
yarn start
```
Visit localhost:3001 for blocks output.

## Overview
First, take a look at the whiteboard diagram, which provides a rough outline of estimated times and some design diagrams.
![whiteboard image](Rise-Whiteboard.png)

Next, feel free to review the design doc [here](https://github.com/byrdsd/art_poc/issues/1), as it outlines the tech design and the approach.

Started out with some simple models and tests to lay out the basic interface, but spent more time than I care to admit on configuration issues with Docker. Also had a false start trying to use react-rails, which backfired on me and caused more trouble than it helped due to some differences in the way it functions as opposed to client-side react, which led to rolling that attempt back and leaning on erb for the admin interface.

I found the React front-end actually much easier to work with than the Rails back-end, and I think that's mostly because of trying to use react-rails. If I hadn't gone down that road I think I would have been in much better shape, and actually delivered the complete project in the timeline.

## Caveats
I ran out of time working on the React front-end, and so didn't get to the pages, as you'll notice from the design doc. Another thirty minutes or so would probably see that done.

The docker container is causing some strangeness where after starting up, if you run `docker-compose down`, then `docker-compose up -d` again, it fails to find the gems. I suspect there is an issue with the way I've configured Docker here with how gems are resolved. I didn't get time to dig deeper on this.
