import BodyContent from "./BodyContent";
import BodyHeader from "./BodyHeader";
import "./css/body.css";
const Body = () => {
  return (
    <div className="body container">
      <div className="body">
        <BodyHeader />
        <BodyContent />
      </div>
    </div>
  );
};

export default Body;
