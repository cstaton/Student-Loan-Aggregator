var Loans = Backbone.Collection.extend({

  model: LoanModel,

  url: "/loans",

  schoolName: "",

  getLoan: function(school) {
    console.log(school);
    
    this.schoolName = school.get("name");

    this.fetch({ 
      type: "POST",
      data: {
        id: school.get("schoolid")
      },
      success: function(data) {
        console.log(data);
      }
    });
  }

});