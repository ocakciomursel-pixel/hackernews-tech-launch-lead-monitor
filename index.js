#!/usr/bin/env node
/**
 * Hacker News Launch, Show HN & Tech Founder Lead Monitor — Hybrid CLI & Cloud API Runner
 * Cloud Actor: https://apify.com/lucacelli/hackernews-tech-launch-lead-monitor ($0.50 / 1,000 storys)
 */
const token = process.env.APIFY_TOKEN;
const sampleInput = {
  "feedType": "show",
  "maxItems": 50
};

async function main() {
  console.log('========================================================================');
  console.log(' ⚡ Hacker News Launch, Show HN & Tech Founder Lead Monitor');
  console.log(' 🌐 Apify Cloud Endpoint: https://apify.com/lucacelli/hackernews-tech-launch-lead-monitor');
  console.log(' 💰 Pricing: $0.50 per 1,000 storys ($0/mo subscription)');
  console.log('========================================================================\n');

  if (!token) {
    console.log('ℹ️  [LOCAL PREVIEW MODE — No APIFY_TOKEN detected in environment]');
    console.log('Showing sample input payload for hackernews-tech-launch-lead-monitor:\n');
    console.log(JSON.stringify(sampleInput, null, 2));
    console.log('\n🚀 TO RUN FULL PRODUCTION EXTRACTION IN THE CLOUD (WITH ANTI-BOT PROXIES):');
    console.log('   1. Open Actor on Apify Store (includes $5 free monthly credit):');
    console.log('      👉 https://apify.com/lucacelli/hackernews-tech-launch-lead-monitor');
    console.log('   2. Or run directly from your terminal with your Apify API token:');
    console.log('      APIFY_TOKEN="apify_api_..." node index.js\n');
    return;
  }

  console.log('🚀 Executing cloud run on Apify (lucacelli/hackernews-tech-launch-lead-monitor)...');
  const res = await fetch('https://api.apify.com/v2/acts/lucacelli~hackernews-tech-launch-lead-monitor/run-sync-get-dataset-items?token=' + encodeURIComponent(token), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(sampleInput)
  });

  if (!res.ok) {
    console.error('API Error:', res.status, await res.text());
    process.exit(1);
  }

  const items = await res.json();
  console.log(`✅ Extracted ${items.length} items from Apify Cloud:\n`);
  console.log(JSON.stringify(items.slice(0, 5), null, 2));
}

main();
