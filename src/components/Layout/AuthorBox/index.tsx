import Link from "next/link";
import Image from "next/image";

interface AuthorBoxProps {
  authorName: string;
  authorBio: string;
  isSinglePage?: boolean;
  authorLink?: string;
}

function AuthorBox({ authorName, authorBio, isSinglePage, authorLink }: AuthorBoxProps) {
  return (
    <>
      <div className="author-card bg-white p-6 rounded-lg border border-fb_blue_button mb-2 min-h-44">
        <div className="flex flex-col lg:flex-row items-center gap-5">
          <div
            className={`flex items-center rounded-full border border-fb_blue_button  ${isSinglePage ? "h-[130px] lg:h-28 lg:w-[300px] p-2" : "p-3 h-[80px]"} aspect-square lg:h-[95px]`}
          >
            <Image
              src={"/logo-real-h.png"}
              width={180}
              height={100}
              alt={authorName}
              className={`h-9 rounded-full object-contain ${isSinglePage ? "lg:w-[300px] aspect-square" : "w-[80px] lg:w-[180px]"} `}
            />
          </div>
          <div className="flex flex-col">
            {isSinglePage ? (
              <Link href={`/author/${authorLink ? authorLink : "realh"}`}>
                <h1 className="text-2xl font-bold text-center duration-300 hover:text-fb_blue lg:text-left">
                  {authorName}
                </h1>
              </Link>
            ) : (
              <h1 className="text-2xl font-bold text-center lg:text-left">{authorName}</h1>
            )}
            <p className="text-fb_gray_bread text-sm">{authorBio}</p>
          </div>
        </div>
      </div>
      <div className="rounded-lg h-12 bg-fb_blue_button flex items-center justify-end gap-4 px-4">
        <Link
          className="bg-white rounded-xl w-7 h-7 flex items-center justify-center"
          href={"https://www.facebook.com/gruporealbr.oficial/"}
        >
          <Image src={"/facebook-icon-rh.svg"} width={20} height={20} alt="Facebook Icon" />
        </Link>
        <Link
          className="bg-white rounded-xl w-7 h-7 flex items-center justify-center"
          href={"https://www.instagram.com/gruporealbr/"}
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
          href={"https://www.youtube.com/@PecuariaForte"}
        >
          <Image src={"/youtube-icon-rh.svg"} width={20} height={20} alt="Linkedin Icon" />
        </Link>
      </div>
    </>
  );
}

export default AuthorBox;
