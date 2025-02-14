import os
import pickle

# Function to get a list of cached contracts
def list_cached_files(cache_folder):
    return [f for f in os.listdir(cache_folder) if f.endswith(".pkl")]

# Function to read a cached file
def read_cached_file(cache_folder, filename):
    file_path = os.path.join(cache_folder, filename)
    if os.path.exists(file_path):
        with open(file_path, "rb") as cache_file:
            return pickle.load(cache_file)
    else:
        return None
