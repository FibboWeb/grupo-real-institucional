import Link from "next/link";
import Image from "next/image";

interface AuthorBoxProps {
  authorName: string;
  authorBio: string;
}

function AuthorBox({ authorName, authorBio }: AuthorBoxProps) {
  return (
    <>
      <div className="author-card bg-white p-6 rounded-lg border border-blue_button mb-2 min-h-44">
        <div className="flex flex-col lg:flex-row items-center gap-5">
          <div className="flex items-center rounded-full border border-blue_button w-[80px] h-[80px] lg:w-[180px] lg:h-[85px]">
            <Image
              src={"/logo-real-h.png"}
              width={180}
              height={100}
              alt={authorName}
              className="h-9 rounded-full mr-4 "
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-center lg:text-left">{authorName}</h1>
            <p className="text-fb_gray_bread text-sm">{authorBio}</p>
          </div>
        </div>
      </div>
      <div className="rounded-lg h-12 bg-blue_button flex items-center justify-end gap-4 px-4">
        <Link
          className="bg-white rounded-xl w-7 h-7 flex items-center justify-center"
          href={"https://www.facebook.com/gruporealh"}
        >
          <Image src={"/facebook-icon-rh.svg"} width={20} height={20} alt="Facebook Icon" />
        </Link>
        <Link
          className="bg-white rounded-xl w-7 h-7 flex items-center justify-center"
          href={"https://instagram.com/gruporealh/"}
        >
          <Image src={"/instagram-icon-rh.svg"} width={20} height={20} alt="Instagram Icon" />
        </Link>
        <Link
          className="bg-white rounded-xl w-7 h-7 flex items-center justify-center"
          href={"https://www.linkedin.com/company/real-h-nutri-o-e-sa-de-animal/?originalSubdomain=br"}
        >
          <Image src={"/linkedin-icon-rh.svg"} width={20} height={20} alt="Linkedin Icon" />
        </Link>
        <Link
          className="bg-white rounded-xl w-7 h-7 flex items-center justify-center"
          href={"https://www.youtube.com/@marketingrealh"}
        >
          <Image src={"/youtube-icon-rh.svg"} width={20} height={20} alt="Linkedin Icon" />
        </Link>
      </div>
    </>
  );
}

export default AuthorBox;
