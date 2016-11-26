const assert = require('assert');

class Fraction {
    /**
     * 分子と分母を与えて分数のインスタンスを作成する。
     *
     * @param numerator 分子。null不可。
     * @param denominator 分母。null不可。0不可。
     */
    constructor(numerator, denominator) {
        assert(typeof numerator === 'number');
        assert(typeof denominator === 'number');
        assert(denominator !== 0);
        this.numerator = numerator;
        this.denominator = denominator;
    }
}
module.exports = Fraction;
