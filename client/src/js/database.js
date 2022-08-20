import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (id, value) => {
  console.log('put to update jateDb');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const objStore = tx.objectStore('jate');
  const request = objStore.put({ id: id, value: value })
  const result = await request;
  console.log('jateDb update successful', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('get jateDb content');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const objStore = tx.objectStore('jate');
  const request = objStore.getAll()
  const result = await request;
  console.log('jateDb get successful', result);
};

initdb();
