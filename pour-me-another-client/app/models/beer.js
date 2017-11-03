import DS from 'ember-data';

const {
    Model,
    attr
} = DS;

export default Model.extend({
    name: attr('string'),
    style: attr('string'),
    brewery: attr('string'),
    abv: attr('number'),
    look: attr('string'),
    smell: attr('string'),
    feel: attr('string'),
    taste: attr('string'),
    overall: attr('string'),
    notes: attr('string'),
    price: attr('number'),
    rating: attr('number')
});
