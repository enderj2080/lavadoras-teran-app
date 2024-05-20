
import PocketBase from 'pocketbase';
const Url = process.env.POCKET_BASE_URL || 'http://localhost:8090';
const pb = new PocketBase();

export default pb;

