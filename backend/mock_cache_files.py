import os
import pickle

# Define the folder where the cached files will be stored
CACHE_FOLDER = "app/cached"

# Sample data for different contracts
sample_data = [
    {"document_name": "Contract 1", "parameters": {"param1": "Value A1", "param2": "Value A2"}},
    {"document_name": "Contract 2", "parameters": {"param1": "Value B1", "param2": "Value B2"}},
    {"document_name": "Contract 3", "parameters": {"param1": "Value C1", "param2": "Value C2"}}
]

# Ensure the cache folder exists
if not os.path.exists(CACHE_FOLDER):
    os.makedirs(CACHE_FOLDER)

# Create sample .pkl files
for i, data in enumerate(sample_data, start=1):
    filename = f"contract_{i}.pkl"
    filepath = os.path.join(CACHE_FOLDER, filename)
    with open(filepath, "wb") as file:
        pickle.dump(data, file)
    print(f"Created sample file: {filename}")
