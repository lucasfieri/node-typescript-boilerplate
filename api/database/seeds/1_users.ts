exports.seed = knex => {
    return knex('users').insert([
        { id: 1, name: 'Lucas', password: '123qwe123', email: 'lucasfieri@gmail.com', role_id: 1 }
    ]);
};
