'use strict';

const Addition = require('../src/addition');
const Fraction = require('../src/fraction');
const assert = require('assert');

suite('加算を表すAdditionクラス', () => {
    test('4/7 + 3/5 の文字列表現を返す', () => {
        const sut = new Addition({
            augend: new Fraction({numerator: 4, denominator: 7}),
            addend: new Fraction({numerator: 3, denominator: 5})
        });
        assert(sut.getNotation() ===
`4   3
- + -
7   5`);
    });

    test('加数の型がFractionでない場合エラー', () => {
        assert.throws(() => {
            new Addition({
                augend: new Fraction({numerator: 4, denominator: 7}),
                addend: 'addend'
            });
        });
    });

    test('被加数の型がFractionでない場合エラー', () => {
        assert.throws(() => {
            new Addition({
                augend: 8,
                addend: new Fraction({numerator: 4, denominator: 7})
            });
        });
    });

});