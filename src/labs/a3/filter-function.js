let numberArray1 = [1, 2, 4, 5, 6];

const numberGreaterThan2 = numberArray1.filter(a => a > 2);
const evenNumbers = numberArray1.filter(a => a % 2 === 0);
const oddNumbers = numberArray1.filter(a => a % 2 !== 0);

const FilterFunction = () => (
    <>
        <h3>Filter Function</h3>
        numberGreaterThan2 = { numberGreaterThan2 }<br/>
        evenNumbers = { evenNumbers }<br/>
        oddNumbers = { oddNumbers }<br/>
    </>
);

export default FilterFunction

