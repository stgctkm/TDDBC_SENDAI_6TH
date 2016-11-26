const Fraction = require('./fraction');
const assert = require('assert');

class Addition {
    constructor({augend, addend}) {
        assert(addend instanceof Fraction);
        assert(augend instanceof Fraction);
        this.augend = augend;
        this.addend = addend;
    }
    getNotation() {
        const notation =
`${this.augend.numerator}   ${this.addend.numerator}
- + -
${this.augend.denominator}   ${this.addend.denominator}`;
        return notation;
    }
}

module.exports = Addition;
