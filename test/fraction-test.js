'use strict';

const Fraction = require('../src/fraction');
const assert = require('assert');

suite('分数を表すFractionクラス', () => {

    suite('分数 4/7 の場合', () => {
        const sut = new Fraction({denominator: 7, numerator: 4});
        test('分子は4', () => {
            assert(sut.numerator === 4);
        });
        test('分母は7', () => {
            assert(sut.denominator === 7);
        });
        test('文字列表現', () => {
            assert(sut.toString() ===
`4
-
7`);
        });
    });

    suite('分数 0/9 の場合', () => {
        const sut = new Fraction({numerator: 0, denominator: 9});
        test('分子は0', () => {
            assert(sut.numerator === 0);
        });
        test('分母は9', () => {
            assert(sut.denominator === 9);
        });
        test('文字列表現', () => {
            assert(sut.toString() === '0\n-\n9');
        });
    });

    suite('コンストラクタの事前条件', () => {
        test('分子は必須', () => {
            assert.throws(() => {
                new Fraction({denominator: 7});
            });
        });
        test('分子は number である事', () => {
            assert.throws(() => {
                new Fraction({numerator: '4', denominator: 7});
            });
        });
        test('分母は必須', () => {
            assert.throws(() => {
                new Fraction({numerator: 4});
            });
        });
        test('分母は number である事', () => {
            assert.throws(() => {
                new Fraction({numerator: 4, denominator: '7'});
            });
        });
        test('分母が0の時エラー', () => {
            assert.throws(() => {
                new Fraction({numerator: 4, denominator: 0});
            });
        });
        test('分子が-1の時はエラー', () => {
            assert.throws(() => {
                new Fraction({numerator: -1, denominator: 9});
            });
        });
        test('分子が10の時はエラー', () => {
            assert.throws(() => {
                new Fraction({numerator: 10, denominator: 9});
            });
        });
        test('分母が10の時はエラー', () => {
            assert.throws(() => {
                new Fraction({numerator: 6, denominator: 10});
            });
        });
        test('分子が整数でない場合はエラー', () => {
            assert.throws(() => {
                new Fraction({numerator: 3.5, denominator: 7});
            });
        });
        test('分母が整数でない場合はエラー', () => {
            assert.throws(() => {
                new Fraction({numerator: 3, denominator: 7.5});
            });
        });
    });
});