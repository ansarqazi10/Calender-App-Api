let Events = require('../models/events');

const eventsManager = {
    create: async data => {
        let event = new Events(data);
        event = await event.save();
        return event;
    },

    get: async () => {
        let events = await Events.find({});
        return events;
    },

    getById: async (id) => {
        let event = await Events.findById(id);
        return event;
    },

    update: async (id, data) => {
        let event = await Events.findByIdAndUpdate(id, data, { new: true });
        return event;
    },

    delete: async (id) => {
        let event = await Events.findByIdAndDelete(id);
        return event;
    }
}

module.exports = eventsManager;   