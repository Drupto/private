'use client';

import { useState } from 'react';
import { CheckCircle2, Loader2, MessageCircle } from 'lucide-react';

/**
 * Hero lead form — submits to Netlify Forms when deployed (free tier: 100
 * submissions/month, Akismet spam filtering, email notifications & webhooks
 * configured in the Netlify UI). Falls back to /api/lead in local dev, where
 * Netlify Forms are not active.
 */

const WHATSAPP_URL = 'https://wa.me/916388063038';
/** Static page that registers the Netlify form (see public/__forms.html). */
const NETLIFY_FORM_PATH = '/__forms.html';
/** Local-dev fallback endpoint (deployed, it runs as a Netlify Function). */
const FALLBACK_ENDPOINT = '/api/lead';

const SERVICE_CHOICES = [
  'Web Development',
  'AI Chatbots',
  'WhatsApp Automation',
  'Dashboards',
  'Something else',
];

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  /** Preselect a service in the dropdown. */
  serviceName?: string;
  /** Provenance tag sent with the lead, e.g. 'homepage-hero'. */
  source?: string;
  /** Prefix for field ids — keep unique if two forms share a page. */
  idPrefix?: string;
  anchorId?: string;
  className?: string;
}

const LeadForm = ({
  title = 'Get a Free Audit',
  subtitle = "Fill in your details and we'll get back within 24 hours.",
  serviceName,
  source,
  idPrefix = 'quote',
  anchorId,
  className = '',
}: LeadFormProps) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    city: '',
    email: '',
    service: serviceName ?? '',
    consent: false,
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const update = (key: keyof typeof form, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const options =
    serviceName && !SERVICE_CHOICES.includes(serviceName)
      ? [serviceName, ...SERVICE_CHOICES]
      : SERVICE_CHOICES;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return; // prevent duplicate submissions
    setStatus('submitting');
    setErrorMsg('');

    const fields = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      city: form.city,
      service: form.service || 'Not specified',
      source: source ?? 'unknown',
    };

    // Primary: Netlify Forms (works on the deployed site).
    // "bot-field" must be empty — bots fill it and Netlify discards the entry.
    const submitToNetlify = async () => {
      const body = new URLSearchParams({
        'form-name': 'lead',
        'bot-field': '',
        ...fields,
      });
      const res = await fetch(NETLIFY_FORM_PATH, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!res.ok) throw new Error('Netlify submission failed');
    };

    // Fallback: /api/lead route (local dev; deployed it runs as a Function).
    const submitToFallback = async () => {
      const res = await fetch(FALLBACK_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error('Submission failed');
    };

    try {
      try {
        await submitToNetlify();
      } catch {
        // Netlify Forms aren't active locally (or the POST failed) — use the API.
        await submitToFallback();
      }
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or WhatsApp us directly.');
    }
  };

  // Design-token classes — matches the dark monochrome theme in globals.css
  const inputClass =
    'w-full px-4 py-3 rounded-md border border-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-shadow text-sm disabled:opacity-60';
  const labelClass = 'block text-sm font-medium text-primary mb-1.5';
  const headingId = `${idPrefix}-heading`;

  return (
    <div
      id={anchorId}
      className={`rounded-2xl rounded-tl-[2.5rem] bg-transparent border border-primary/20 p-6 md:p-8 transition-shadow scroll-mt-24 ${className}`}
    >
      <h2 id={headingId} className="text-xl md:text-2xl font-semibold text-primary mb-1">
        {title}
      </h2>
      <p className="text-sm text-muted-foreground mb-6">{subtitle}</p>

      {status === 'success' ? (
        <div className="text-center py-10" role="status">
          <CheckCircle2 className="w-14 h-14 text-green-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">Thanks — request received!</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Our team will reach out shortly. For anything urgent, WhatsApp us below.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-md font-medium hover:brightness-95 transition-all"
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate aria-labelledby={headingId}>
          <div className="space-y-4">
            <div>
              <label htmlFor={`${idPrefix}-name`} className={labelClass}>Name *</label>
              <input
                id={`${idPrefix}-name`} name="name" required autoComplete="name"
                value={form.name} onChange={(e) => update('name', e.target.value)}
                className={inputClass} placeholder="Your name" disabled={status === 'submitting'}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor={`${idPrefix}-phone`} className={labelClass}>Phone *</label>
                <input
                  id={`${idPrefix}-phone`} name="phone" type="tel" required autoComplete="tel"
                  value={form.phone} onChange={(e) => update('phone', e.target.value)}
                  className={inputClass} placeholder="+91" disabled={status === 'submitting'}
                />
              </div>
              <div>
                <label htmlFor={`${idPrefix}-city`} className={labelClass}>City</label>
                <input
                  id={`${idPrefix}-city`} name="city" autoComplete="address-level2"
                  value={form.city} onChange={(e) => update('city', e.target.value)}
                  className={inputClass} placeholder="Lucknow" disabled={status === 'submitting'}
                />
              </div>
            </div>
            <div>
              <label htmlFor={`${idPrefix}-email`} className={labelClass}>Email *</label>
              <input
                id={`${idPrefix}-email`} name="email" type="email" required autoComplete="email"
                value={form.email} onChange={(e) => update('email', e.target.value)}
                className={inputClass} placeholder="you@company.com" disabled={status === 'submitting'}
              />
            </div>
            <div>
              <label htmlFor={`${idPrefix}-service`} className={labelClass}>Service of your concern</label>
              <select
                id={`${idPrefix}-service`} name="service" value={form.service}
                onChange={(e) => update('service', e.target.value)}
                className={inputClass} disabled={status === 'submitting'}
              >
                <option value="">Select a service…</option>
                {options.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="flex items-start gap-3 pt-1">
              <input
                id={`${idPrefix}-consent`} name="consent" type="checkbox"
                checked={form.consent} onChange={(e) => update('consent', e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-border accent-white focus:ring-ring"
                disabled={status === 'submitting'}
              />
              <label htmlFor={`${idPrefix}-consent`} className="text-xs text-muted-foreground leading-relaxed">
                I agree to be contacted about my enquiry.
              </label>
            </div>

            <button
              type="submit"
              disabled={
                status === 'submitting' || !form.name || !form.email || !form.phone || !form.consent
              }
              className="w-full flex items-center justify-center gap-2 bg-white text-black py-3.5 rounded-md font-medium hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                <><Loader2 size={18} className="animate-spin" /> Submitting…</>
              ) : (
                'Submit Details'
              )}
            </button>
            {status === 'error' && (
              <p className="text-sm text-red-400 text-center" role="alert">{errorMsg}</p>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default LeadForm;
