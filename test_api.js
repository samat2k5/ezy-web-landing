const data = { type: 'demo', plan: 'business', name: 'Test', email: 'test@example.com', company: 'Test Corp', employeeCount: '11-50', phone: '+65 91234567', message: 'Hi', modules: ['Leave'], website_url: 'http://spam.com' };

fetch('http://localhost:3000/api/leads', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
})
.then(r => r.json())
.then(console.log)
.catch(console.error);
