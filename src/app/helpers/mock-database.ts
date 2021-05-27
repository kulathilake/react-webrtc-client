import Dexie from 'dexie';

const db = new Dexie('MockDatabase');

db.version(1).stores({
    users: '++id, email, avatar',
})

export default db;