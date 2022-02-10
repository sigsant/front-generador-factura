import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import './btngroup.css';

const BtnGroup = (props) => {
	BtnGroup.propTypes = {
		handlerClick: PropTypes.func,
	}

	return(
		<div className="btn-group">
			<button id="btn-1" onClick={props.handlerClick}>Editar</button>
			<button id="btn-2"><Link to="/invoice">Crear nuevo</Link></button>
		</div>
	)
}

export default BtnGroup;