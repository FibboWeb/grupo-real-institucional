export default function Timeline() {
  return (
    <section className="flex gap-6 flex-col">
      <div className="fb_container">
        <h3 className="text-3xl font-semibold">A História do Grupo Real</h3>
      </div>
      <div>
        <iframe
          src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1U1FKOpiZr_PwCJZ7hlca9nqWG0imRzZb976SPAR77WI&font=Default&lang=en&initial_zoom=2&height=650"
          width="100%"
          height="650"
          allowFullScreen
          style={{ border: "none" }}
        ></iframe>
      </div>
    </section>
  );
}
