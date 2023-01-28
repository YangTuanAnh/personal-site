const title = "Yang Tuan Anh - Computer Science Student";
const description =
  "Personal website for Yang Tuan Anh, where I present my ideas, projects and personal updates. Acts as a portfolio.";

const SEO = {
  title,
  description,
  canonical: "https://www.yangtuananh.dev",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://www.yangtuananh.dev",
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