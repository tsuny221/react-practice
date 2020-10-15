import React from 'react';
import Article from './Article';

const Blog =()=>{

    const authorName = "Tsuny"
    return (
    //divが多くなるの嫌な場合<React.Fragment></React.Fragment>or<></>
      <>
        <Article
          title={"React練習"}
          order={1}
          author={authorName} />
        <Article
          title={"jsxの使い方"}
          order={2}
          author={authorName} />
        <Article
          title={"環境構築の仕方"}
          order={3}
          author={authorName} />
       {/*　親から子へデータの受け渡し */}
      </>
    )
}

export default Blog;
