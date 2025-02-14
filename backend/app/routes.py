from fastapi import APIRouter
from app.models import Item

router = APIRouter()

items = [{"id": 1, "name": "Item 1"}, {"id": 2, "name": "Item 2"}]

@router.get("/items")
def get_items():
    return items

@router.post("/items")
def create_item(item: Item):
    items.append(item.dict())
    return item
    
# Delete an item by ID
@router.delete("/items/{item_id}")
def delete_item(item_id: int):
    global items
    items = [item for item in items if item["id"] != item_id]
    return {"message": f"Item with id {item_id} deleted"}