import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="container">
      <div className="card">
        <div className="h1">Admissions AI Agent</div>
        <p>
          Automated female sales executive for Sainik School, RMS and Navodaya entrance exam coaching.
          Handles inbound/outbound calls, captures lead details, and books a free demo.
        </p>
        <div className="grid" style={{ marginTop: 16 }}>
          <div>
            <div className="h2">Get Started</div>
            <ul>
              <li>Set environment variables for Twilio, Facebook, and Google Ads.</li>
              <li>Point your Twilio voice webhook to <code>/api/twilio/voice</code>.</li>
              <li>Subscribe Facebook Lead Ads webhook to <code>/api/leads/facebook/webhook</code>.</li>
            </ul>
          </div>
          <div>
            <div className="h2">Admin</div>
            <p>View/manage leads and export Excel from the dashboard.</p>
            <Link href="/admin" className="button">Open Admin Dashboard</Link>
          </div>
        </div>
        <p className="small" style={{ marginTop: 16 }}>
          Tip: Deploy to Vercel and configure crons for automatic lead sync.
        </p>
      </div>
    </main>
  );
}
