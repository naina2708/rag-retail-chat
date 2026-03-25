from pathlib import Path
import os

from dotenv import load_dotenv


BASE_DIR = Path(__file__).resolve().parent
load_dotenv(BASE_DIR / ".env")


GROQ_API_KEY = os.getenv("GROQ_API_KEY", "")
VECTOR_DB_PATH = str((BASE_DIR / os.getenv("VECTOR_DB_PATH", "./vector_db")).resolve())
DOCUMENT_PATH = str((BASE_DIR / os.getenv("DOCUMENT_PATH", "../documents/")).resolve()) + os.sep
