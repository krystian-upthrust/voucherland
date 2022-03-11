import React from 'react'
import Collapsable from '../Collapsable';
import AdminArticle from './AdminArticle';


const articles_date = [
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
      {
        tagTitle: "media",
        color: "yellow",
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

const privateArticles = [
  <AdminArticle article={articles_date[0]} key={articles_date[0].id} />,
  <AdminArticle article={articles_date[1]} key={articles_date[1].id} />,
  <AdminArticle article={articles_date[2]} key={articles_date[2].id} />,
  <AdminArticle article={articles_date[3]} key={articles_date[3].id} />
];

export default  function PrivateArticles() {

  return (
    <section className="private_articles">
        <h3>Private aricles</h3>

        <div className="private_articles_content">
          <Collapsable id={1} title={"Recent articles"} content={privateArticles} layout={"articles_layout"} />
          <Collapsable id={2} title={"Collaborations"} content={privateArticles} layout={"articles_layout"} />
          <Collapsable id={3} title={"Media"} content={privateArticles} layout={"articles_layout"} />
        </div>
    </section>
  )
}
