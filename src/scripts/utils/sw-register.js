import { Workbox } from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not supported in the browser');
    return;
  }

  const wb = new Workbox('./sw.bundle.js');

  try {
    await wb.register();
    console.log('Service worker berhasil didaftarkan');
  } catch (error) {
    console.log('Mohon maaf serviced register kamu gagal didaftarkan', error);
  }
};

export default swRegister;
