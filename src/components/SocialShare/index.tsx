import Link from "next/link";
import Image from "next/image";

const SocialShare = ({ postTitle, postUrl, postImage, blogContext }) => {
  const encodedTitle = encodeURIComponent(postTitle);
  const encodedUrl = encodeURIComponent(postUrl);
  const encodedImage = encodeURIComponent(postImage);

  const fullUrl = "https://gruporealbr.com.br/" + blogContext + encodedUrl;
  return (
    <div className="social-share-container flex flex-col justify-center items-center my-8">
      <p className="text-slate-600 mb-3">Compartilhe:</p>
      <div className="social-share flex flex-row gap-2">
        <Link
          href={`https://www.facebook.com/sharer/sharer.php?u=${fullUrl}`}
          target="_blank"
          className="social-button facebook"
        >
          <Image src="/icons/facebook-icon-sh.svg" width={32} height={32} alt="Facebook icon" />
        </Link>
        <Link
          href={`https://www.pinterest.com/pin/create/button/?url=${fullUrl}&media=${encodedImage}&description=${encodedTitle}`}
          target="_blank"
          className="social-button pinterest"
        >
          <Image src="/icons/pinterest-icon-sh.svg" width={32} height={32} alt="Pinterest icon" />
        </Link>
        <Link href={`https://www.messenger.com/t/?link=${fullUrl}`} target="_blank" className="social-button messenger">
          <Image src="/icons/messenger-icon-sh.svg" width={32} height={32} alt="Messenger icon" />
        </Link>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${fullUrl}`}
          target="_blank"
          className="social-button x"
        >
          <Image src="/icons/x-icon-sh.svg" width={32} height={32} alt="x icon" />
        </a>
        <Link
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${fullUrl}&title=${encodedTitle}`}
          target="_blank"
          className="social-button linkedin"
        >
          <Image src="/icons/linkedin-icon-sh.svg" width={32} height={32} alt="Linkedin icon" />
        </Link>
        <Link
          href={`https://wa.me/+556799655174?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          className="social-button whatsapp"
        >
          <Image src="/icons/whatsapp-icon-sh.svg" width={32} height={32} alt="Whatsapp icon" />
        </Link>
      </div>
    </div>
  );
};

export default SocialShare;
