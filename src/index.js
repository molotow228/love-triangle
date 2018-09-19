/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var count = 0;
var ret=false;
for (var i = 0; i < preferences.length; i++)
{
    var f1,f2;
    f1 = preferences[preferences[i]-1];
    if (preferences.length+1>f1)
    {
        f2 = preferences[f1-1];
        if (f2 == i+1) count++;
    }
}
ret=Math.trunc(count/3);
return ret;
};
