const Query = {
    dogs: function (parent, args, ctx, info){
        global.dogs = global.dogs || [];
        return global.dogs;
    },
};

module.exports = Query;
