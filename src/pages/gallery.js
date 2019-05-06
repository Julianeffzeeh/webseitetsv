import React from "react"
import { Flex, Box } from "rebass"
import { H1, H2, P, Ol } from "../components/VerticalRhythm"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import RespGrid from "../components/RespGrid"
import { render } from "react-dom"
import Gallery from "react-grid-gallery"

const ResourcesPage = () => (
  <Layout>
    <SEO title="Resources" />
    <Section>
      <H1>Weihnachtsfeier 2018</H1>
    </Section>
    <Gallery images={IMAGES} />
  </Layout>
)

const IMAGES = [
  {
    src: "http://www.tsv-ruenderoth.de/fussball/wp-content/uploads/2018/12/74914644d09fc38cc1a89603055f7927.jpg",
    thumbnail:
      "http://www.tsv-ruenderoth.de/fussball/wp-content/uploads/2018/12/74914644d09fc38cc1a89603055f7927.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: "http://www.tsv-ruenderoth.de/fussball/wp-content/uploads/2018/12/03860532eef9d4a8121a70ec0cdfa226.jpg",
    thumbnail:
      "http://www.tsv-ruenderoth.de/fussball/wp-content/uploads/2018/12/03860532eef9d4a8121a70ec0cdfa226.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: "http://www.tsv-ruenderoth.de/fussball/wp-content/uploads/2018/12/a5226ac8f785c90713332e81cb6238f1.jpg",
    thumbnail:
      "http://www.tsv-ruenderoth.de/fussball/wp-content/uploads/2018/12/a5226ac8f785c90713332e81cb6238f1.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: "http://www.tsv-ruenderoth.de/fussball/wp-content/uploads/2018/12/e89deba72963ae22ce8ae0fd1ca5156e.jpg",
    thumbnail:
      "http://www.tsv-ruenderoth.de/fussball/wp-content/uploads/2018/12/e89deba72963ae22ce8ae0fd1ca5156e.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
    {
      src: "http://www.tsv-ruenderoth.de/fussball/wp-content/uploads/2018/12/6335e8bacf5cc39244b258d198525f4d.jpg",
    thumbnail:
      "http://www.tsv-ruenderoth.de/fussball/wp-content/uploads/2018/12/6335e8bacf5cc39244b258d198525f4d.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: "http://www.tsv-ruenderoth.de/fussball/wp-content/uploads/2018/12/13065d83675c57624de8ee4973cbae31.jpg",
    thumbnail:
      "http://www.tsv-ruenderoth.de/fussball/wp-content/uploads/2018/12/13065d83675c57624de8ee4973cbae31.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: "http://www.tsv-ruenderoth.de/fussball/wp-content/uploads/2018/12/28b454f0a2d70a701dca3fef263659b9.jpg",
    thumbnail:
      "http://www.tsv-ruenderoth.de/fussball/wp-content/uploads/2018/12/28b454f0a2d70a701dca3fef263659b9.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
    {
      src: "http://www.tsv-ruenderoth.de/fussball/wp-content/uploads/2018/12/d258cb4f5f3b0083c38925abbe3d5adf.jpg",
    thumbnail:
      "http://www.tsv-ruenderoth.de/fussball/wp-content/uploads/2018/12/d258cb4f5f3b0083c38925abbe3d5adf.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: "http://www.tsv-ruenderoth.de/fussball/wp-content/uploads/2018/12/e64b5f80f7c4136ea12fded547785924.jpg",
    thumbnail:
      "http://www.tsv-ruenderoth.de/fussball/wp-content/uploads/2018/12/e64b5f80f7c4136ea12fded547785924.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: "http://www.tsv-ruenderoth.de/fussball/wp-content/uploads/2018/12/f8cd766169a7af2a41a4938d9b0a46b9.jpg",
    thumbnail:
      "http://www.tsv-ruenderoth.de/fussball/wp-content/uploads/2018/12/f8cd766169a7af2a41a4938d9b0a46b9.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: "http://www.tsv-ruenderoth.de/fussball/wp-content/uploads/2018/12/3d9a8ad4dae8310f76f427b4b073edf6.jpg",
    thumbnail:
      "http://www.tsv-ruenderoth.de/fussball/wp-content/uploads/2018/12/3d9a8ad4dae8310f76f427b4b073edf6.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
    {
      src: "http://www.tsv-ruenderoth.de/fussball/wp-content/uploads/2018/12/4f1d0c0ff51b236a0fb7543ed25e1db3.jpg",
    thumbnail:
      "http://www.tsv-ruenderoth.de/fussball/wp-content/uploads/2018/12/4f1d0c0ff51b236a0fb7543ed25e1db3.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: "http://www.tsv-ruenderoth.de/fussball/wp-content/uploads/2018/12/5ea0fcf4cd14b81fc99a69887a096abc.jpg",
    thumbnail:
      "http://www.tsv-ruenderoth.de/fussball/wp-content/uploads/2018/12/5ea0fcf4cd14b81fc99a69887a096abc.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: "http://www.tsv-ruenderoth.de/fussball/wp-content/uploads/2018/12/6ac379e25818084e7351c42c07488ad2.jpg",
    thumbnail:
      "http://www.tsv-ruenderoth.de/fussball/wp-content/uploads/2018/12/6ac379e25818084e7351c42c07488ad2.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: "http://www.tsv-ruenderoth.de/fussball/wp-content/uploads/2018/12/6cad7da518c9bb0df869c242554a1930.jpg",
    thumbnail:
      "http://www.tsv-ruenderoth.de/fussball/wp-content/uploads/2018/12/6cad7da518c9bb0df869c242554a1930.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: "http://www.tsv-ruenderoth.de/fussball/wp-content/uploads/2018/12/13bc00c049559ad04b907f7560887a21.jpg",
    thumbnail:
      "http://www.tsv-ruenderoth.de/fussball/wp-content/uploads/2018/12/13bc00c049559ad04b907f7560887a21.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
]

export default ResourcesPage
