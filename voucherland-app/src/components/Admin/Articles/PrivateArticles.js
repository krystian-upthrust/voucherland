import React from 'react'
import ArticleTab from './ArticleTab';


const articlesPrivate = [
  {
    id: 1,
    title: "New collaboration with the cola group",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: "/resources/images/cola.png",
    tags: [
      {
        tagTitle: "recent article",
        color: "green",
      },
      {
        tagTitle: "collaboration",
        color: "blue",
      },
    ],
    status: 'private'
  },
  {
    id: 2,
    title: "New collaboration with the cola group",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: "/resources/images/cola.png",
    tags: [
      {
        tagTitle: "recent article",
        color: "green",
      },
      {
        tagTitle: "collaboration",
        color: "blue",
      },
    ],
    status: 'private'
  },
  {
    id: 3,
    title: "New collaboration with the cola group",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: "/resources/images/cola.png",
    tags: [
      {
        tagTitle: "recent article",
        color: "green",
      },
      {
        tagTitle: "collaboration",
        color: "blue",
      },
    ],
    status: 'private'
  },
  {
    id: 4,
    title: "New collaboration with the cola group",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: "/resources/images/cola.png",
    tags: [
      {
        tagTitle: "recent article",
        color: "green",
      },
      {
        tagTitle: "collaboration",
        color: "blue",
      },
    ],
    status: 'private'
  },
];

export default  function PrivateArticles() {
  return (
    <section className="private_articles">
        <h3>Private Aricles</h3>

        <div className="article_content">
          <ArticleTab
            tabTitle={"Recent articles"}
            tabContent={articlesPrivate}
          />
          <ArticleTab
            tabTitle={"Collaborations"}
            tabContent={articlesPrivate}
          />
          <ArticleTab
            tabTitle={"Media"}
            tabContent={articlesPrivate}
          />
        </div>
    </section>
  )
}
