/*
Write a function to flatten a nested dictionary. Namespace the keys with a period.
For example, given the following dictionary:
{
  "key": 3,
  "foo": {
    "a": 5,
    "bar": {
      "baz": 8
      }
    }
}
it should become:
{
  "key": 3,
  "foo.a": 5,
  "foo.bar.baz": 8
}
You can assume keys do not contain dots in them, i.e. no clobbering will occur.
*/

const flatten = (object, _path = '', _object = {}) => {
  Object.entries(object).forEach(([key, value]) => {
    const path = _path ? `${_path}.${key}` : key;
    if ( typeof(value) == 'object' ){
      flatten(value, path, _object);
    }else{
      _object[path] = value;
    }
  });

  return _object;
}

const object ={
  "key": 3,
  "foo": {
    "a": 5,
    "bar": {
      "baz": 8
      }
    } 
}


console.log(flatten(object));