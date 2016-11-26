'use strict';

const Fraction = require('../src/fraction');
const assert = require('assert');

describe('Fraction', () => {

    it('分子を返す', () => {
        const sut = new Fraction(4, 7);
        assert(sut.numerator === 4);
    });

    it('分母を返す', () => {
        const sut = new Fraction(4, 7);
        assert(sut.denominator === 7);
    });

    it('numerator 引数は必須', () => {
        assert.throws(() => {
            new Fraction();
        });
    });
    it('denominator 引数は必須', () => {
        assert.throws(() => {
            new Fraction(4);
        });
    });
    it('分母が0の時エラー', () => {
        assert.throws(() => {
            new Fraction(4, 0);
        });
    });

});