// Equality operator

function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not equal";
}

console.log(`\n${testEqual("12")}`);

// Strict equality operator

function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(`\n${testStrict("7")}`);

// Comparison with the Inequality Operator

function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(`\n${testNotEqual(99)}`);

// Strict Inequality Operator

function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(`\n${testStrictNotEqual(10)}`);

// Comparison with the Greater Than Operator

function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }

    if (val > 10) {
        return "Over 10";
    }

    return "10 or Under";
}

console.log(`\n${testGreaterThan(70)}`);

// Comparison with the Greater Than Or Equal To Operator

function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }

    if (val >= 10) {
        return "10 or Over";
    }

    return "Less than 10";
}

console.log(`\n${testGreaterOrEqual(2)}`);

// Comparison with the Less Than Operator

function testLessThan(val) {
    if (val < 20) {
        return "Under 25";

    }

    if (val < 55) {
        return "Under 55";
    }
    return "55 or over"

}

console.log(`\n${testLessThan(20)}`)

// Comparison with the Less Than Or Equal To Operator

function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller Than or Equal to 12";
    }
    if (val <= 24) {
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24"
}

console.log(`\n${testLessOrEqual(55)}`)

// Comparisons with the Logical And Operator

function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes"
    }
    return "Nope"
}

console.log(`\n${testLogicalAnd(30)}`)

// Comparisons with the Logical Or Operator

function testLogicalOr(val) {

    if (val < 10 || val > 20) {
        return "Outside";
    }

    return "Inside";
}

console.log(`\n${testLogicalOr(15)}`);

// Introducing Else Statements

function testElse(val) {
    var result = "";
    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or smaller";
    }
    return result
}
console.log(`\n${testElse(3)}`);

// Introducing Else If Statements

function testElseIf(val) {
    if (val > 10) {
        return "Bigger than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}

console.log(`\n${testElseIf(52)}`)