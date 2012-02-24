

module('About Backbone.Model');
    
test('Can be created with default values for its attributes.', function() {
    expect(1);
    var todo = new Todo();
    equal(todo.get('text'), "");
});

test('Will set passed attributes on the model instance when created.', function() {

    expect(3);
    var todo = new Todo({ text: 'Get oil change for car.' });
    
    equal(todo.get('text'), "Get oil change for car.");
    equal(todo.get('done'), false);
    equal(todo.get('order'), 0);
});

test('Will call a custom initialize function on the model instance when created.', function() {

    expect(1);
    var toot = new Todo({ text: 'Stop monkeys from throwing their own crap!' });
    equal(toot.get('text'), 'Stop monkeys from throwing their own rainbows!');
});

test('Fires a custom event when the state changes.', function() {

    expect(1);
    var spy = function(){
        ok( true, 'A change event callback was correctly triggered');
        start();
    }
    
    var todo = new Todo();
    
    todo.bind('change', spy);
    
    stop();
    todo.set({text:"new text"});
    // How would you update a property on the todo here?
    // Hint: http://documentcloud.github.com/backbone/#Model-set
    
});

test('Can contain custom validation rules, and will trigger an error event on failed validation.', function() {
    
    expect(1);
    
    var errorCallback = function(){
        ok( true, 'A failed validation correctly triggered an error');
        start();
    }
    
    var todo = new Todo();
    
    todo.bind('error', errorCallback);
    
    // What would you need to set on the todo properties to cause validation to fail?
    todo.set({done:"not a boolean"});

});

