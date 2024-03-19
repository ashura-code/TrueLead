"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import UploadImage from "@/comps/UploadImage";
import UploadPhoto from "../components/component/upload-photo";
export default function Home() {
  return (
    <div className="w-[100vh]">
      <section className="mx-10 my-6">
        <UploadPhoto />
      </section>

      <UploadImage />
    </div>
  );
}
