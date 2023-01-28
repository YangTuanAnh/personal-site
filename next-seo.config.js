const title = "Yang Tuan Anh - Computer Scientist, Student, Design Enthusiast.";
const description =
  "Personal website for Yang Tuan Anh, a Computer Science sophomore at the VNU-HCM University of Science.";

const SEO = {
  title,
  description,
  canonical: "https://www.yangtuananh.dev",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://www.yantuananh.dev",
    title,
    description,
    images: [
      {
        url: "https://yangtuananh.dev/images/banner.png",
        alt: title,
      },
    ],
  },
};

export default SEO;