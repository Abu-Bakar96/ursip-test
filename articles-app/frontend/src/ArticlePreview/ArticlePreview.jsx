import React from "react";
import { Link } from 'react-router-dom'


const ArticlePreview = ({ title, id }) => {
  return (
    <div class="card-body mb-3">
      <Link to={`/articles/${id}`} class="btn btn-primary"> {title}</Link>
    </div>
  );
};

export default ArticlePreview;