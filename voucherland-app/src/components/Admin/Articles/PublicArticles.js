import React from 'react'
import Collapsable from '../Collapsable';
import AdminArticle from './AdminArticle';

const articles_data = [
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

const publicArticles = [
  <AdminArticle article={articles_data[0]} key={articles_data[0].id} />,
  <AdminArticle article={articles_data[1]} key={articles_data[1].id} />,
  <AdminArticle article={articles_data[2]} key={articles_data[2].id} />,
  <AdminArticle article={articles_data[3]} key={articles_data[3].id} />
];

export default function PublicArticles() {
  return (
    <section className="public_articles">
        <h3>Public articles</h3>

        <div className="public_articles_content">
          <Collapsable id={1} title={"Recent articles"} content={publicArticles} layout={"articles_layout"} />
          <Collapsable id={2} title={"Collaborations"} content={publicArticles} layout={"articles_layout"} />
          <Collapsable id={3} title={"Media"} content={publicArticles} layout={"articles_layout"} />
        </div>
    </section>
  )
}
