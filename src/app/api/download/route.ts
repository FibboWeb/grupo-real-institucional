export async function GET(req) {
  try {
    const url = new URL(req.url);
    const fileId = url.searchParams.get("file");

    if (!fileId) {
      return new Response("File ID is missing", { status: 400 });
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_WP_URL_API}media?parent=${fileId}`);
    console.log("response", response.url);
    if (!response.ok) {
      return new Response("Failed to fetch file metadata", { status: response.status });
    }

    const data = await response.json();
    if (!data || !data[0] || !data[0].guid || !data[0].guid.rendered) {
      return new Response("Invalid file data", { status: 404 });
    }

    const fileName = data[0].title.rendered || "downloaded-file";
    const fileUrl = data[0].guid.rendered;

    const file = await fetch(fileUrl);
    if (!file.ok) {
      return new Response("Failed to fetch file", { status: file.status });
    }

    const contentType = file.headers.get("content-type");

    return new Response(file.body, {
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="${fileName}.${contentType.split("/")[1]}"`,
      },
    });
  } catch (error) {
    console.error("Error during file download:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
