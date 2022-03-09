import React from 'react'
import ArticleTab from './ArticleTab';

const articlesPublic = [
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
    status: 'public'
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
    status: 'public'
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
    status: 'public'
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
    status: 'public'
  }, 
  {
    id: 5,
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
    status: 'public'
  },
];

export default function PublicArticles() {
  return (
    <section className="public_articles">
        <h3>Public Articles</h3>

        <div className="article_content">
          <ArticleTab
            tabTitle={"Recent articles"}
            tabContent={articlesPublic}
          />
          <ArticleTab
            tabTitle={"Collaborations"}
            tabContent={articlesPublic}
          />
          <ArticleTab
            tabTitle={"Media"}
            tabContent={articlesPublic}
          />
        </div>
    </section>
  )
}
