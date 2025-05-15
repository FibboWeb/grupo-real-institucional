export default function GET(req, res) {
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  res.json({ message: 'This response is not cached by Vercel.' });
}
