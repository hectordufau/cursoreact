import { faPlusSquare, faTrashCan, faEdit, faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconButton = (props: any) => {

    let icon;

    switch (props.icon) {
        case "plus":
            icon = <FontAwesomeIcon icon={faPlusSquare} />
            break;
        case "trash":
            icon = <FontAwesomeIcon icon={faTrashCan} />
            break;
        case "edit":
            icon = <FontAwesomeIcon icon={faEdit} />
            break;
        case "check":
            icon = <FontAwesomeIcon icon={faCheckSquare} />
            break;
    }

    const style = "mx-1 btn btn-" + props.styleb;

    if (props.hide) {
        return null
    } else {
        return (
            <button className={style} onClick={props.onClick}>
                {icon}
            </button>
        )
    }
}

export default IconButton