export async function GET(req) {
  const url = new URL(req.url);
  const fileUrl = url.searchParams.get("file");

  const response = await fetch(fileUrl);

  const fileName = fileUrl.split("/").pop();

  return new Response(response.body, {
    headers: {
      "Content-Type": response.headers.get("content-type") || "application/octet-stream",
      "Content-Disposition": `attachment; filename="${fileName}"`,
    },
  });
}
