import { borderThemes } from "../../services/serviceApi";
import Button from "../button/Button";
import BodyContentItem from "./BodyContentItem";
import "./css/BodyContent.css";
const BodyContent = () => {
  return (
    <>
      <div className="body-content">
        <div className="header d-flex align-items-center justify-content-between">
          <h3 className="text-capitalize">discusions</h3>
          <Button>
            <div className="btn btn-primary py-2">
              <li className="link-item font-weight-bold">
                <i className="fa fa-plus mr-2" aria-hidden="true"></i>
                <a href="#">Nouveau sujet</a>
              </li>
            </div>
          </Button>
        </div>
        <ul className="body-content-list">
          {borderThemes.map((theme, i) => {
            return <BodyContentItem key={i} borderLeftColor={theme.color} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default BodyContent;
