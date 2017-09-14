describe('sorting and modifining the array', function() {
  it('sorts and maps the array', function() {
    var arr = [3, 2, 5];
    arr.sort();
    var sorted = arr.map(function(a) {
      return a + 'i';
    });
    expect(sorted).toEqual(['2i', '3i', '5i']);
  });
});