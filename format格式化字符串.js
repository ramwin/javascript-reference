// Xiang Wang @ 2016-10-21 11:23:45

function format(template, kwargs) {
  for (var key of Object.keys(kwargs)) {
    var reg = new RegExp('{' + key + '}', 'g')
    template = template.replace(reg, kwargs[key])
  }
  return template;
}
a = format("{a}", {'a':'name'})
