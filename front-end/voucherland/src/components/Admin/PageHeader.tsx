import React from "react";

interface PageHeaderProps {
  pageTitle: string;
  createTitle: string;
  handleCreatePressed: () => void;
  handleDeletePressed: () => void;
  disableDelete?: boolean;
}

export default function PageHeader({
  pageTitle,
  createTitle,
  handleCreatePressed,
  handleDeletePressed,
  disableDelete = true,
}: PageHeaderProps) {
  
  return (
    <section className="page_header">
      <h2>{pageTitle}</h2>
      <div className="header_btns">
        <button className="create_btn" onClick={handleCreatePressed}>
          {createTitle}
        </button>
        <button
          className="delete_btn"
          disabled={disableDelete}
          onClick={handleDeletePressed}
        >
          delete
        </button>
      </div>
    </section>
  );
}
