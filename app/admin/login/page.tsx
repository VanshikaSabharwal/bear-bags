'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push('/admin');
    } else {
      setError('Incorrect password.');
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f4f4ec]">
      <div className="w-full max-w-sm rounded-[24px] border border-[#dbe7d2] bg-white p-8 shadow-sm">
        <h1 className="mb-2 text-2xl font-semibold text-[#134632]">Admin Login</h1>
        <p className="mb-6 text-sm text-[#555]">Bear Bags dashboard</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-[#d1ddcf] bg-[#f8fcf6] px-4 py-3 text-sm text-[#1f3a2d] outline-none focus:border-[#23473f]"
          />
          {error && <p className="text-sm text-[#c82b2d]">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-[#134632] py-3 text-sm font-semibold text-white transition hover:bg-[#1a5a42] disabled:opacity-60">
            {loading ? 'Checking…' : 'Log in'}
          </button>
        </form>
      </div>
    </main>
  );
}
