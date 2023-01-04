import { Layout } from "../components/layout";
import { Card } from "../components/card";

import styles from "../styles/Home.module.css";
import textStyles from "../styles/Typography.module.css";
import cardStyles from "../styles/Card.module.css";

import HightouchImage from "../public/images/hightouch.png";
import HeiferImage from "../public/images/heifer.png";
import SutherlandImage from "../public/images/sutherland.png";
import PernImage from "../public/images/pern.png";
import BlogImage from "../public/images/great-blog.png";
import CmhfImage from "../public/images/cmhf.png";
import { Helmet } from "react-helmet";

const projects = [
  {
    title: "Hightouch",
    description: "Marketing site for a high-growth, B2B SaaS startup.",
    url: "https://hightouch.com/",
    img: HightouchImage,
    imgAlt: "Hightouch.",
  },
  {
    title: "Country Music Hall of Fame",
    description: "Archival storytelling of historic Music Row using maps and multi-media.",
    url: "https://musicrow.countrymusichalloffame.org/",
    img: CmhfImage,
    imgAlt: "Image of Music Row's Home Page on a laptop, tablet, and mobile devices.",
  },
  {
    title: "Heifer International",
    description: "Mobile-optimized donation form.",
    url: "https://www.heifer.org/give/donate-monthly.html",
    cta: {
        title: "read about the impact",
        url: "https://lifeblue.com/impact-by-design-building-a-better-online-donation-experience/"
    },
    img: HeiferImage,
    imgAlt: "Three mobile interface images of Heifer's optimized donation form.",
  },
  {
    title: "Sutherland Furniture",
    description: "Luxury e-commerce site overhaul with sibling brand, Perennials Fabrics.",
    url: "https://www.sutherlandfurniture.com/",
    img: SutherlandImage,
    imgAlt: "TODO",
  },
  {
    title: "Perennials Fabrics",
    description: "Simplified and intuitive navigation for luxury e-commerce.",
    url: "https://www.perennialsfabrics.com/",
    img: PernImage,
    imgAlt: "Image of Perennials Fabrics navigation experience on a laptop and mobile device.",
  },
  {
    title: "A Great Blog",
    description: "Rapid prototyping exercise.",
    url: "https://taylormcpherson.github.io/the-great-blog",
    cta: {
        title: "learn about my process",
        url: "https://github.com/taylormcpherson/the-great-blog#readme"
    },
    img: BlogImage,
    imgAlt: "Image of The Great Blog on a laptop device.",
  },
];

export default function Home() {
  return (
    <Layout>
      <Helmet title="Work | Taylor McPherson" />
      <section className={styles.container}>
        <h1 className={textStyles.title}>
          Frontend software engineer at Hightouch
        </h1>
        <h2 className={textStyles.description}>
          building accessible, performant, and delightful tools for us humans on the internet.
        </h2>
      </section>
      <section>
        <h2 className={textStyles.leadIn}>
          selected works
        </h2>
        <ul className={cardStyles.cardsList}>
          {projects.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </ul>
      </section>
    </Layout>
  )
}
