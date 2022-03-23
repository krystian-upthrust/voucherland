import React from "react";
import { ITag } from "../../utils/types";

interface TagProps {
  tag: ITag;
}

export default function Tag({ tag }: TagProps) {
  return <div className={`tag ${tag.color}`}>{tag.title}</div>;
}
