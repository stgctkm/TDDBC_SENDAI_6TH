const assert = require('assert');

class Fraction {
    /**
     * 分子と分母を与えて分数のインスタンスを作成する。
     *
     * @param numerator number 分子。0から9までの整数。null不可。
     * @param denominator number 分母。0から9までの整数。null不可。0不可。
     */
    constructor({numerator, denominator}) {
        assert(Number.isInteger(numerator));
        assert(0 <= numerator && numerator <= 9);
        assert(Number.isInteger(denominator));
        assert(0 < denominator && denominator <= 9);
        this._numerator = numerator;
        this._denominator = denominator;
    }

    get numerator() {
        return this._numerator;
    }

    get denominator() {
        return this._denominator;
    }

    /**
     * 分数の文字列表記を返す
     *
     * @override
     * @returns {string}
     */
    toString() {
        return `${this.numerator}\n-\n${this.denominator}`;
    }
}

module.exports = Fraction;
