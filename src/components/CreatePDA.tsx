import { Link } from "react-router-dom";
import CreatePDA from "../pages/PDAConfig";
const CreateMachine = function () {
    return (
        <>
            <Link to={"/"}>Back to Home Page:</Link>
            <CreatePDA />
        </>
    )
}
export default CreateMachine;