import { connect } from "react-redux";
import CandidateList from "../components/candidateList";
import { Dispatch } from "redux";

const mapStateToProps = (state: any): { state: any } => ({
  state: state,
});

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    // no function is needed here right now
  };
}

const ListCon = connect(mapStateToProps, mapDispatchToProps)(CandidateList);
export default ListCon;
