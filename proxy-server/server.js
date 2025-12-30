import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import https from 'https';

const app = express();
const PORT = 3001;
const API_BASE = 'https://training.tamkeen-dev.com/termc/public/api';

const agent = new https.Agent({
  rejectUnauthorized: false
});

app.use(cors());
app.use(express.json());

// Proxy لجميع طلبات API
app.all('/api/*', async (req, res) => {
  const path = req.path.replace('/api', '');
  const queryString = req.url.includes('?') ? req.url.substring(req.url.indexOf('?')) : '';
  const url = `${API_BASE}${path}${queryString}`;
  
  console.log(`📡 ${req.method} ${url}`);
  
  try {
    const options = {
      method: req.method,
      headers: {
        'Accept': 'application/json',
        'Accept-Language': 'ar',
        'Content-Type': 'application/json'
      },
      agent
    };

    if (req.method !== 'GET' && req.method !== 'HEAD') {
      options.body = JSON.stringify(req.body);
    }

    const response = await fetch(url, options);
    const data = await response.json();
    
    console.log(`✅ ${response.status} - ${Array.isArray(data?.data) ? data.data.length : 'N/A'} items`);
    
    res.status(response.status).json(data);
  } catch (error) {
    console.error('❌ Proxy error:', error.message);
    res.status(500).json({ 
      status: false, 
      error: error.message,
      message: 'فشل الاتصال بالخادم'
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Proxy Server: http://localhost:${PORT}`);
  console.log(`🔗 API Target: ${API_BASE}`);
});
