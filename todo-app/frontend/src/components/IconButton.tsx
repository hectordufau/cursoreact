import { faEdit } from "@fortawesome/free-regular-svg-icons";
import {
  faCheck,
  faClose,
  faPlus,
  faRotateLeft,
  faSearch,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconButton = (props: any) => {
  let icon;

  switch (props.icon) {
    case "plus":
      icon = <FontAwesomeIcon icon={faPlus} />;
      break;
    case "trash":
      icon = <FontAwesomeIcon icon={faTrash} />;
      break;
    case "edit":
      icon = <FontAwesomeIcon icon={faEdit} />;
      break;
    case "check":
      icon = <FontAwesomeIcon icon={faCheck} />;
      break;
    case "undo":
      icon = <FontAwesomeIcon icon={faRotateLeft} />;
      break;
    case "search":
      icon = <FontAwesomeIcon icon={faSearch} />;
      break;
    case "clear":
      icon = <FontAwesomeIcon icon={faClose} />;
      break;
  }

  const style = "mx-1 btn btn-" + props.styleb;

  if (props.hide) {
    return null;
  } else {
    return (
      <button className={style} onClick={props.onClick}>
        {icon}
      </button>
    );
  }
};

export default IconButton;
