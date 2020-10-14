import React from 'react';
import Article from './Article';

class Blog extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    const authorName = "Tsuny"
    return (
    //divが多くなるの嫌な場合<React.Fragment></React.Fragment>or<></>
      <>
        <Article
          title={"React練習"}
          order={1}
          isPublished={true}
          author={authorName} />
        <Article
          title={"jsxの使い方"}
          order={2}
          isPublished={true}
          author={authorName} />
        <Article
          title={"環境構築の仕方"}
          order={3}
          isPublished={false}
          author={authorName} />
       {/*　親から子へデータの受け渡し */}
      </>
    )
  }
}

export default Blog;
