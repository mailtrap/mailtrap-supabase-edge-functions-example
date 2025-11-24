# Mailtrap with Supabase Edge Functions

This example shows how to use Mailtrap Email Sending API with Supabase Edge Functions.

## Setup
1. Copy `.env.example` to `.env` and add your Mailtrap API key.
2. Deploy with Supabase CLI:
   ```
   supabase functions deploy mailtrap --no-verify-jwt
   ```
3. Call the function:
   ```
   curl https://<your-ref>.supabase.co/functions/v1/mailtrap
   ```

## Files
- supabase/functions/mailtrap/index.ts
- .env.example
- README.md
