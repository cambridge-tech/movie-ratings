import os
from pathlib import Path
from dotenv import load_dotenv


env_path = Path('..') / '.env.development'
load_dotenv(dotenv_path=env_path)

FRONTEND_ADDRESS = os.environ.get("FRONTEND_ADDRESS")

