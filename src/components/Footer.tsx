import Link from "next/link";
import React from "react";
import { LiaLinkedin, LiaInstagram } from "react-icons/lia";
import { MdMail } from "react-icons/md";

function Footer() {
  return (
    <section className="bg-[#222222] p-12 text-white  sm:p-5">
      <div className="maxWidth mx-auto flex items-center justify-between">
        <p>© Hazem El-khalil, 2024</p>
        <div className="flex justify-center items-center gap-5 ">
          <Link href={"/blog"}>
            <span className="text-lg">Blog</span>
          </Link>
        </div>
        <div className="flex justify-center items-center gap-5 [&>a]:text-4xl">
          <a>
            <LiaLinkedin />
          </a>
          <a>
            <LiaInstagram />
          </a>
          <a>
            <MdMail />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
