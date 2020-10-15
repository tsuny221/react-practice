import React, { useState } from 'react';

const Article = (props) => {
  const [isPublished, togglePublished] = useState(true)
  let publishState = "";
  if (isPublished) {
    publishState = "公開"
  } else {
    publishState = "非公開"
  }
  return (
    <div>
      <h2>{props.title}</h2>
      <p>順番は{props.order}です。</p>
      <p>著者:{props.author}</p>
      <p>{publishState}</p>
      <label htmlFor="check">公開状態:</label>
      <input type="checkbox" checked={isPublished} id="check" onClick={() => togglePublished(!isPublished)}/>
    </div>
  )
};

export default Article;
