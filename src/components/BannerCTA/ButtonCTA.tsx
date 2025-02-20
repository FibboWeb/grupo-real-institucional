
'use client'

const handleClick = () => {
  const textSeo = document.getElementById("text-seo");
  if (textSeo) {
    const yPosition = textSeo.getBoundingClientRect().top - 250;
    window.scrollTo({
      top: yPosition,
      behavior: "smooth",
    });
  }
};

function ButtonCTA({ ctaLink, content, enableClick }) {
  return (
    <div className="w-fit">
      { enableClick && (
        <button onClick={() => handleClick()} className="bg-fb_blue_button btn-container inline-flex items-center gap-4 py-3 px-4 rounded text-base font-semibold uppercase transition-all duration-300">{content ? content : "Leia mais"}</button>
      )} 
      { !enableClick && (
        <button className="bg-fb_blue_button btn-container inline-flex items-center gap-4 py-3 px-4 rounded text-base font-semibold uppercase transition-all duration-300">{content ? content : "Leia mais"}</button>
      )}
    </div>
  )
}

export default ButtonCTA