import { connect } from "react-redux";
import Header from "../components/header";

const mapStateToProps = (state: Array<string>): { state: Array<string> } => ({
  state: state,
});

const HeaderCon = connect(mapStateToProps)(Header);
export default HeaderCon;
