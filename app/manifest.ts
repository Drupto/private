import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Saurabh Chandra — Software & AI Engineer",
    short_name: "Saurabh Chandra",
    description:
      "Software & AI Engineer, Founder of DRUPTO CONSULTANTS PRIVATE LIMITED. AI/ML solutions, cloud computing, and IT consultancy.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
  }
}
