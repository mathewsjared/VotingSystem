//// ??? <-> IDEAS

Root();

function Root(){ // ---

}

function Entity(){ // <-> Decision
    // Internals
      // Age ( < Integer > )
  var age;
      // Decisions
  var decisions = {
        // Current ( { Decision } )
    current: {},
        // Past ( [ Decision ] )
    past: []
  };

    // Interface
  return {}
}

function Decision(question){ // <-> Entity
    // Internals
      // Question ( < String > )
  var question = question;
      // Entities ( { < Entity > } )
  var entities = {};

    // Interface
  return {};
}

function Member(tag){ // <- Entity
    // Internals
      // Tag ( < String > )
  var tag = tag;

    // Interface
  return {};
}

function Population(){ // <- Entity
    // Internals
      // Members ( { < Member > } )
  var members = [];

    // Interface
  return {};
}
