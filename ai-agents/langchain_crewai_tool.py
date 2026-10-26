"""
Hacker News Launch, Show HN & Tech Founder Lead Monitor — LangChain, CrewAI & OpenAI Assistants Tool
Official Apify Actor: https://apify.com/lucacelli/hackernews-tech-launch-lead-monitor ($0.50 / 1,000 storys)
"""
import os
import requests
from typing import Dict, Any, List

APIFY_TOKEN = os.getenv("APIFY_TOKEN", "YOUR_APIFY_TOKEN")
ENDPOINT = "https://api.apify.com/v2/acts/lucacelli~hackernews-tech-launch-lead-monitor/run-sync-get-dataset-items"

def run_hackernews_tech_launch_lead_monitor(custom_input: Dict[str, Any] = None) -> List[Dict[str, Any]]:
    """
    Executes Hacker News Launch, Show HN & Tech Founder Lead Monitor on Apify Cloud ($0.50/1k storys).
    Extract top Hacker News stories, Show HN startup launches, Ask HN threads, founder handles, linked domains, GitHub repos, and comment sentiment velocity.
    """
    default_payload = {
    "feedType": "show",
    "maxItems": 50
}
    payload = custom_input if custom_input else default_payload
    res = requests.post(f"{ENDPOINT}?token={APIFY_TOKEN}", json=payload, timeout=300)
    res.raise_for_status()
    return res.json()
