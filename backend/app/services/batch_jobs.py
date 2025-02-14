import os
import pickle

# Mock function to extract parameters from a document
def extract_parameters_from_document(doc_path):
    # Replace this logic with real parameter extraction
    return {"document_name": os.path.basename(doc_path), "parameters": {"param1": "value1", "param2": "value2"}}

# Function to process documents in batches
def process_documents_in_batches(doc_folder, cache_folder):
    if not os.path.exists(cache_folder):
        os.makedirs(cache_folder)

    for filename in os.listdir(doc_folder):
        if filename.endswith(".docx"):  # Adjust for your document format
            doc_path = os.path.join(doc_folder, filename)
            # Extract parameters
            extracted_data = extract_parameters_from_document(doc_path)

            # Save as .pkl file in the cache folder
            cache_file_path = os.path.join(cache_folder, f"{filename}.pkl")
            with open(cache_file_path, "wb") as cache_file:
                pickle.dump(extracted_data, cache_file)
            print(f"Processed and cached: {filename}")
