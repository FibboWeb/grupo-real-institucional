import Image from "next/image";

function WhatsappButton() {
  return (
    <div className="fixed bottom-2 md:bottom-5 right-2 md:right-5 left-auto top-auto whatsapp z-50">
      <a href="https://api.whatsapp.com/send?phone=556799655174" target="_blank">
        <Image src="/icons/whatsapp.svg" alt="whatsapp button" width="55" height="55"></Image>
      </a>
    </div>
  );
}

export default WhatsappButton;
