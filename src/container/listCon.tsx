import { connect } from "react-redux";
import CandidateList from "../components/candidateList1";

const mapStateToProps = (state: any): { state: any } => ({
  state: state,
});

const ListCon = connect(mapStateToProps)(CandidateList);
export default ListCon;
