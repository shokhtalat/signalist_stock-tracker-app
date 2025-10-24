# 📈 Signalist – AI-Powered Stock Tracker

Live demo: _[your-live-url.com if any]_

A modern, real-time stock-market platform built for developers and traders.  
Track live prices, set alerts, explore deep company insights, and manage custom watchlists—all powered by event-driven workflows, AI summaries, and sentiment analytics.

---

## 🚀 Key Features

- **Real-Time Dashboard:** View interactive line and candlestick charts with historical data, filter by industry, performance or market-cap.  
- **Smart Search:** Quickly find the best stocks with an intelligent, fast and accurate search system.  
- **Personalized Watchlists & Alerts:** Create custom watchlists, set price/volume alerts and receive instant notifications.  
- **In-Depth Company Insights:** Access PE ratio, EPS, revenues, filings, news, analyst ratings and sentiment scores to make informed decisions.  
- **Automated Event Workflows:** Powered by Inngest — handle price updates, alert scheduling, AI-driven digests and more.  
- **AI-Powered Notifications & Summaries:** Receive personalized daily digests, earnings reports and market summaries.  
- **Custom Notifications:** Fine-tune alerts based on your own watchlists and preferences.  
- **Business & Trading Analytics:** View user behaviour, trading trends and engagement metrics for smarter decisions.

---

## 🛠 Tech Stack

| Area                  | Technologies                              |
|------------------------|-------------------------------------------|
| Frontend               | Next.js · Shadcn · React · Typescript     |
| Authentication & Auth  | Better Auth |
| Data & Realtime        | Finnhub API · MongoDB · WebSockets       |
| Workflows & Automation | Inngest · Serverless Functions            |
| DevOps & Hosting       | Docker · CI/CD · VPS · NGINX · SSL        |

---

## ✅ Installation & Quick Start

1. Clone the repo  
   ```bash
   git clone https://github.com/shokhtalat/signalist_stock-tracker_app.git
   cd signalist_stock-tracker_app

2.Install dependencies
   ```bash
   pnpm install   # or npm install
   ```
3.Set environment variables by copying .env.example to .env and filling out the keys:
   ```bash
   NEXT_PUBLIC_API_URL=…
   FINNHUB_API_KEY=…
   MONGODB_URI=…
   BETTER_AUTH_SECRET=…
   ```

4.Run the development server
   ```bash
   pnpm dev   # or npm run dev
   ```

5.Build and preview production version

```bash
   pnpm build
   pnpm preview
```
🚦 Deployment Notes

Use CI/CD tools to automate linting, testing and deployment.

Use NGINX as a reverse-proxy on your VPS with HTTPS (Certbot) for secure access.

Host background/worker tasks via Inngest and message queues for alerts and summaries.

Use environment variables securely and ensure database/API keys are protected.
