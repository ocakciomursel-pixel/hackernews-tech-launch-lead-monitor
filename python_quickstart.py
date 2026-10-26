"""
Hacker News Launch, Show HN & Tech Founder Lead Monitor — Python Quickstart
Official Apify Store Actor: https://apify.com/lucacelli/hackernews-tech-launch-lead-monitor ($0.50 / 1,000 storys)
"""
import os
import requests

APIFY_TOKEN = os.getenv("APIFY_TOKEN", "YOUR_APIFY_TOKEN")
ENDPOINT = "https://api.apify.com/v2/acts/lucacelli~hackernews-tech-launch-lead-monitor/run-sync-get-dataset-items"

payload = {
    "feedType": "show",
    "maxItems": 50
}

if __name__ == "__main__":
    print(f"Running Hacker News Launch, Show HN & Tech Founder Lead Monitor on Apify Cloud ({ENDPOINT})...")
    response = requests.post(f"{ENDPOINT}?token={APIFY_TOKEN}", json=payload, timeout=300)
    response.raise_for_status()
    data = response.json()
    print(f"Extracted {len(data)} records! Sample:")
    print(data[:3])
