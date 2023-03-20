import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import "./paginator.styles.scss";

function hasPrev(pageNum) {
  return pageNum > 1;
}

export const Paginator = (props) => {
  return (
    <div className="paginator-container">
      <button className="paginator-button" disabled={!hasPrev()}>
        <ArrowLeft className="paginator-icon"></ArrowLeft>
      </button>
      <div className="paginator-pages"></div>
      <button className="paginator-button" onClick={props.changePage}>
        <ArrowRight className="paginator-icon"></ArrowRight>
      </button>
    </div>
  );
};
