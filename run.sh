source venv/bin/activate
env $(cat .env.development | xargs) python3 -m movieRatings.app "$@"
