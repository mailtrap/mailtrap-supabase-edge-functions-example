const MAILTRAP_API_KEY = Deno.env.get('MAILTRAP_API_KEY');

if (!MAILTRAP_API_KEY) {
  console.error('MAILTRAP_API_KEY is not set');
  process.exit(1)
}

const handler = async (_request: Request): Promise<Response> => {
  const response = await fetch('https://send.api.mailtrap.io/api/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${MAILTRAP_API_KEY}`,
    },
    body: JSON.stringify({
      from: {
        name: 'Magic Elves',
        email: 'hello@example.com',
      },
      to: [{ email: 'recipient@example.com' }],
      subject: 'Supabase Edge Functions Test',
      html: '<strong>Congrats, it worked! 🎉</strong>',
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    return new Response(
      JSON.stringify({
        error: 'Mailtrap API error',
        status: response.status,
        body: errorBody,
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const data = await response.json();
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

Deno.serve(handler);
