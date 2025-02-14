from fastapi import APIRouter
from app.services.cache_manager import list_cached_files, read_cached_file

router = APIRouter()
CACHE_FOLDER = "app/cached"

# List all available cached contracts
@router.get("/contracts")
def list_contracts():
    cached_files = list_cached_files(CACHE_FOLDER)
    return {"contracts": cached_files}

# Get insights from a specific cached contract
@router.get("/contracts/{filename}")
def get_contract_insights(filename: str):
    insights = read_cached_file(CACHE_FOLDER, filename)
    if insights:
        return {"filename": filename, "insights": insights}
    else:
        return {"error": "File not found"}
