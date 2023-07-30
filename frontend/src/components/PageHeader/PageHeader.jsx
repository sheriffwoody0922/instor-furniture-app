import { useEffect, useState } from "react";
import BackButton from "../BackButton/BackButton";
import "./PageHeader.css";

const PageHeader = (props) => {
  const [pageHeaderTitle, setPageHeaderTitle] = useState();
  const [backgroundImgUrl, setBackgroundImgUrl] = useState();

  useEffect(() => {
    setPageHeaderTitle(props.pageTitle);
    setBackgroundImgUrl(props.imgUrl);
  }, [props]);
  return (
    <>
      <section
        className="pageheader"
        style={{ backgroundImage: `url(${backgroundImgUrl})` }}
      >
        <BackButton />
        <h1>{pageHeaderTitle}</h1>
      </section>
    </>
  );
};

export default PageHeader;
