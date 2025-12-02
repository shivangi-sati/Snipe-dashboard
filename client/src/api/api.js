import axios from 'axios'
const BASE = import.meta.env.VITE_API_URL || '';

export const api = axios.create({
  baseURL: BASE + '/api',
  timeout: 10000,
});

export async function fetchShipments() {
  const res = await api.get('/shipments');
  return res.data;
}

export async function fetchShipmentById(id) {
  const res = await api.get(`/shipments?id=${encodeURIComponent(id)}`);
  return res.data[0];
}
