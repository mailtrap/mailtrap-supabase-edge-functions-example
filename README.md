# Mailtrap with Supabase Edge Functions

This example shows how to use Mailtrap Email Sending API with Supabase Edge Functions.

## Setup
1. Copy `.env.example` to `.env` and add your Mailtrap API key.
2. Important: Supabase Edge Functions do not use .env after deployment.
You must also store your API key as a Supabase secret:
   ```
   supabase secrets set MAILTRAP_API_KEY=your_mailtrap_api_key
   ```
3. Make sure the `from.email` in `index.ts` belongs to a verified Sending Domain in your Mailtrap account.
4. Deploy with Supabase CLI:
   ```
   supabase functions deploy mailtrap --no-verify-jwt
   ```
5. Call the function:
   ```
   curl https://<your-ref>.supabase.co/functions/v1/mailtrap
   ```

## Files
- supabase/functions/mailtrap/index.ts
- .env.example
- README.md
