const multipy = (a, b) => a * b;
const fourTimesFive = multipy(4, 5);
console.log(fourTimesFive);

const ImpliedReturn = () => (
    <>
        <h3>Implied Return</h3>
        fourTimesFive = { fourTimesFive }<br/>
        multipy(4, 5) = { multipy(4, 5)}<br/>
    </>
);

export default ImpliedReturn