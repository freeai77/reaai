import requests
from bs4 import BeautifulSoup

# Yahan apni target website ka link daal
url = "https://example.com"

print("Scanning and extracting target behavior...")
response = requests.get(url)

if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')
    print(f"Title Found: {soup.title.string}")
    
    # Saare links nikalne ke liye
    for link in soup.find_all('a'):
        print("Found Endpoint:", link.get('href'))
else:
    print("Failed to connect to target.")