import ES5Functions from "./es5-functions"
import ArrowFunction from "./arrow-functions";
import ImpliedReturn from "./implied-return";
import FunctionParenthesisAndParameters from "./function-parenthesis-and-parameters";

function WorkingWithFunctions () {
    return (
        <div>
            <ES5Functions/>
            <ArrowFunction/>
            <ImpliedReturn/>
            <FunctionParenthesisAndParameters/>
        </div>    
        );
}

export default WorkingWithFunctions