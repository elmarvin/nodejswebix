webix.ready(function () {
  var big_film_set = [{"id":1,"title":"The Shawshank Redemption","year":"1994","votes":"678,79","rating":"9,2","rank":"1"},{"id":2,"title":"The Godfather","year":"1972","votes":"511,495","rating":"9,2","rank":"2"},{"id":3,"title":"The Godfather: Part II","year":"1974","votes":"319,352","rating":"9","rank":"3"},{"id":4,"title":"The Good, the Bad and the Ugly","year":"1966","votes":"213,03","rating":"8,9","rank":"4"}];
  webix.ui({
    cols: [
      {
        view: "list",
        dynamic: true,
        width: 320,
        height: 600,
        template: "#rank#. #title#",
        select: "multiselect",
        url:'data_test',
        datatype: 'json'
      },
      {
        view: "list",
        width: 320,
        height: 600,
        template: "#rank#. #title# <div style='padding-left:18px'> Year:#year#, votes:#votes# </div>",
        type: {
          height: 62
        },
        select: true,
        url:'data_test',
        datatype: 'json'
      },
      {
        view: "list",
        height: 600,
        scheme: {
          $init: function (obj) {
            if (obj.year >= 2000) obj.$css = "newtime";
            if (obj.year <= 1970) obj.$css = "oldtime";
          }
        },
        template: "<div class='mark'>#votes# </div> #rank#. #title#",
        type: {
          height: 62
        },
        select: true,
        url:'data_test',
        datatype: 'json'
      }
    ]
  });
})