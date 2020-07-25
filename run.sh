source venv/bin/activate
env $(cat local.env | xargs) python3 -m movieRatings.app "$@"
