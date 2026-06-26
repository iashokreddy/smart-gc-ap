'use client';

import { FormEvent, useMemo, useState } from 'react';
import { AlertCircle, CheckCircle2, Clock3, Search } from 'lucide-react';

type GrievanceStatus = 'Open' | 'In Progress' | 'Resolved';

type GrievanceTicket = {
  id: string;
  name: string;
  mobile: string;
  category: string;
  village: string;
  description: string;
  submittedAt: string;
  status: GrievanceStatus;
};

const STORAGE_KEY = 'markapuram_grievances_v1';

function generateTicketId() {
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `GVC-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${rand}`;
}

function loadTickets(): GrievanceTicket[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as GrievanceTicket[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveTickets(tickets: GrievanceTicket[]) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
}

export function GrievanceDesk() {
  const [tickets, setTickets] = useState<GrievanceTicket[]>(() => loadTickets());
  const [trackId, setTrackId] = useState('');
  const [queryResult, setQueryResult] = useState<GrievanceTicket | null>(null);

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [category, setCategory] = useState('Roads');
  const [village, setVillage] = useState('');
  const [description, setDescription] = useState('');

  const recentTickets = useMemo(() => tickets.slice().sort((a, b) => Date.parse(b.submittedAt) - Date.parse(a.submittedAt)).slice(0, 5), [tickets]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !mobile.trim() || !description.trim()) return;

    const ticket: GrievanceTicket = {
      id: generateTicketId(),
      name: name.trim(),
      mobile: mobile.trim(),
      category,
      village: village.trim() || 'Not specified',
      description: description.trim(),
      submittedAt: new Date().toISOString(),
      status: 'Open',
    };

    const updated = [ticket, ...tickets];
    setTickets(updated);
    saveTickets(updated);
    setQueryResult(ticket);
    setTrackId(ticket.id);

    setName('');
    setMobile('');
    setVillage('');
    setDescription('');
  };

  const onTrack = () => {
    const found = tickets.find((t) => t.id.toLowerCase() === trackId.trim().toLowerCase()) || null;
    setQueryResult(found);
  };

  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Grievances & Civic Issues</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Submit civic grievances, get a ticket ID instantly, and track status updates.
      </p>

      <div className="mt-8 grid lg:grid-cols-2 gap-6">
        <form onSubmit={onSubmit} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 space-y-4">
          <h2 className="font-bold text-lg text-gray-900 dark:text-white">Submit a grievance</h2>

          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm" required />
          <input value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Mobile number" className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm" required />

          <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm">
            {['Roads', 'Water Supply', 'Electricity', 'Sanitation', 'Healthcare', 'Revenue', 'Other'].map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>

          <input value={village} onChange={(e) => setVillage(e.target.value)} placeholder="Village / Ward" className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm" />
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe your issue with location and details..." className="w-full min-h-28 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm" required />

          <button type="submit" className="inline-flex items-center px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold">
            Submit grievance
          </button>

          <p className="text-xs text-gray-500 dark:text-gray-400">
            Trust signal: ticket data is stored in your browser for demo/static deployment. For official complaint escalation, integrate a district grievance backend endpoint.
          </p>
        </form>

        <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
          <h2 className="font-bold text-lg text-gray-900 dark:text-white">Track grievance</h2>

          <div className="mt-3 flex gap-2">
            <input
              value={trackId}
              onChange={(e) => setTrackId(e.target.value)}
              placeholder="Enter Ticket ID (e.g., GVC-20260626-1234)"
              className="flex-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm"
            />
            <button onClick={onTrack} type="button" className="inline-flex items-center gap-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-sm">
              <Search className="w-4 h-4" /> Track
            </button>
          </div>

          <div className="mt-4">
            {queryResult ? (
              <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 space-y-2 text-sm">
                <p><span className="font-semibold">Ticket:</span> {queryResult.id}</p>
                <p><span className="font-semibold">Category:</span> {queryResult.category}</p>
                <p><span className="font-semibold">Location:</span> {queryResult.village}</p>
                <p><span className="font-semibold">Submitted:</span> {new Date(queryResult.submittedAt).toLocaleString('en-IN')}</p>
                <p className="inline-flex items-center gap-1">
                  <span className="font-semibold">Status:</span>
                  {queryResult.status === 'Open' ? <AlertCircle className="w-4 h-4 text-yellow-500" /> : null}
                  {queryResult.status === 'In Progress' ? <Clock3 className="w-4 h-4 text-blue-500" /> : null}
                  {queryResult.status === 'Resolved' ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : null}
                  {queryResult.status}
                </p>
                <p><span className="font-semibold">Issue:</span> {queryResult.description}</p>
              </div>
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-400">Enter a valid ticket ID to view details.</p>
            )}
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Recent submissions (this browser)</h3>
            <ul className="mt-2 space-y-2 text-xs text-gray-600 dark:text-gray-300">
              {recentTickets.length === 0 ? <li>No grievances submitted yet.</li> : null}
              {recentTickets.map((ticket) => (
                <li key={ticket.id} className="rounded-md border border-gray-200 dark:border-gray-700 p-2">
                  <p className="font-medium">{ticket.id}</p>
                  <p>{ticket.category} · {ticket.village}</p>
                  <p>{new Date(ticket.submittedAt).toLocaleString('en-IN')}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
