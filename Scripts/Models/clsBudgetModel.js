budgeterFactories.factory('clsBudgetModel',['dateParser',function (dateParser) {

  function clsBudgetModel(Month, Description, Amount) {
    this.Month = Month || undefined,
    this.Description = Description || undefined,
    this.Amount = Amount || undefined
  }

  clsBudgetModel.build = function(data) {
 
    return new clsBudgetModel (
      Month = dateParser.getUTCDate(data.Month).toLocaleDateString('en-US'),
      Description = data.Description,
      Amount = data.Amount
      );
    };

    return clsBudgetModel;

}]);
