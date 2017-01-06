'use strict';

exports.create = function(args, res, next) {
  /**
   * parameters expected in the args:
  * shareObject (ShareObject)
  **/
  // no response value expected for this operation
  res.end();
}

exports.delete = function(args, res, next) {
  /**
   * parameters expected in the args:
  * shareId (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.getSearch = function(args, res, next) {
  /**
   * parameters expected in the args:
  * objectId (String)
  * sharingId (String)
  * sharedId (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "shareId" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "sharedId" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "objectId" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "objectType" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

