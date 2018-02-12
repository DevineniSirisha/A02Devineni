
QUnit.test( "a basic test example", function( assert ) {
    var value = "hello";
    assert.equal( value, "hello", "We expect value to be hello" );
  });
QUnit.test('Testing calc function with several sets of inputs', function (assert) {
    assert.equal(calc(80, 2), 40, 'calc(80,2) returns 40.');
    assert.equal(calc(-8, 3), 0, 'calculateSeats(-8,3) returns 0');
    assert.equal(calc(9, 0), 0, 'calculateSeats(9,0) returns 0');
    assert.equal(calc(50.2, 2), 25.1, 'calc(50.2,2) returns 25.1');
    assert.equal(calc(null,1),0, 'calc(null,1) returns 0');
});