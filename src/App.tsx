import * as React from "react";
import "./styles.css";
import MainPage from './main/appMenu/index';
import Header from './components/Header';
import Title from './components/Title';

// import { Article } from "./components/Article";
// import { AddArticle } from "./components/AddArticle";
// import { addArticle, removeArticle } from "./store/actionCreators";
// import { Dispatch } from "redux";
// import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import { useSelector, shallowEqual, useDispatch } from "react-redux";


const App: React.FC = () => {
  // const articles: readonly IArticle[] = useSelector(
  //   (state: ArticleState) => state.articles,
  //   shallowEqual
  // );

  // const dispatch: Dispatch<any> = useDispatch();

  // const saveArticle = React.useCallback(
  //   (article: IArticle) => dispatch(addArticle(article)),
  //   [dispatch]
  // );

// My blog: https://www.ibrahima-ndaw.com/

  return (
    <div>
      <Header />
      <Title />
      <MainPage />
      {/* <AddArticle saveArticle={saveArticle} />
      {articles.map((article: IArticle) => (
        <Article
          key={article.id}
          article={article}
          removeArticle={removeArticle}
        />
      ))} */}
    </div>
  );
};

export default App;
