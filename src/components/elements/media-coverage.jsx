import React from "react";
import CenterLayout from "../layouts/center-layout";
import { Divider } from "antd";

export default function MediaCoverage() {
  return (
    <section className="bg-white py-6 mt-10">
      <div className="flex justify-center">
        <h2 className="text-5xl font-bold">Media Coverage</h2>
      </div>
      <CenterLayout className="mt-6 px-4 lg:px-0">
      <Divider>***</Divider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="relative overflow-hidden pt-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/U6arlq3h8j8?si=U4fAkjrVUPQ_hB2S"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div>
            <div className="relative overflow-hidden pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/mCIrXZn3ck4?si=ZKyd4YTfG8lfb5w4"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </CenterLayout>
    </section>
  );
}
