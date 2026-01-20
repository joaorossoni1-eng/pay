'use client';

import { useEffect, useState } from 'react';

type HealthResponse = {
  status: string;
  timestamp: string;
};

export default function HomePage() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHealth = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001';
        const response = await fetch(`${baseUrl}/health`);

        if (!response.ok) {
          throw new Error('Erro ao consultar API');
        }

        const data = (await response.json()) as HealthResponse;
        setHealth(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      }
    };

    fetchHealth();
  }, []);

  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Pay SaaS</h1>
      <p>Dashboard administrativo white-label para pagamentos.</p>

      <section style={{ marginTop: '1.5rem' }}>
        <h2>Status da API</h2>
        {error && <p style={{ color: 'crimson' }}>{error}</p>}
        {!error && !health && <p>Carregando...</p>}
        {health && (
          <ul>
            <li>Status: {health.status}</li>
            <li>Timestamp: {health.timestamp}</li>
          </ul>
        )}
      </section>
    </main>
  );
}
