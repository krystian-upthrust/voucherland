import React from "react";

export default function Tag({ tag }) {
  return <div className={`tag ${tag.color}`}>{tag.tagTitle}</div>;
}
