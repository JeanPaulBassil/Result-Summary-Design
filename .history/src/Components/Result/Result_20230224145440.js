import Description from "../Description/Description";
import Grade from "../Grade/Grade";
import data from "../../data.json";

export default function Result() {
    return (
        <div className="result">
            <h3>Your Result</h3>
            <Grade/>
            <Description />
        </div>
    )
};
