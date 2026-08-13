const http = require('http');

const runTest = (type, plan, expectedStatus) => {
  return new Promise((resolve) => {
    const data = JSON.stringify({
      type,
      plan,
      name: 'Test Name',
      email: 'test@example.com',
      company: 'Test Co'
    });

    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/api/leads',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    };

    const req = http.request(options, (res) => {
      if (res.statusCode === expectedStatus) {
        console.log(`PASS: ${type} + ${plan} -> ${res.statusCode}`);
      } else {
        console.error(`FAIL: ${type} + ${plan} -> expected ${expectedStatus}, got ${res.statusCode}`);
        process.exitCode = 1;
      }
      resolve();
    });

    req.on('error', (e) => {
      console.error(`Problem with request: ${e.message}`);
      resolve();
    });

    req.write(data);
    req.end();
  });
};

async function main() {
  console.log("Running matrix tests...");
  
  // Rejected
  await runTest('trial', 'business', 400);
  await runTest('demo', 'essential', 400);
  await runTest('demo', 'professional', 400);
}

main();
